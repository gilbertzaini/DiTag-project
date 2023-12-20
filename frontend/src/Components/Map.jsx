import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { getPreciseDistance } from "geolib";
import "leaflet/dist/leaflet.css";
import "../map.css";
import userMarker from "../Assets/userMarker.png";
import deviceMarker from "../Assets/deviceMarker.png";
import loading from "../Assets/loading.gif";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import {useSelector} from "react-redux";

const Map = (props) => {
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  const [distance, setDistance] = useState();
  const deviceMarkerRef = useRef(null);
  const [get, setGet] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLatitude(position.coords.latitude);
          setUserLongitude(position.coords.longitude);
          setGet(true);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const updateUserLocation = async (id) => {
    try {
      const latitude = userLatitude;
      const longitude = userLongitude;

      await axios.patch(`http://localhost:8080/users/coordinates/${id}`, {
        latitude,
        longitude,
      });
      console.log("User location updated");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUserLocation();
    const interval = setInterval(getUserLocation, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateUserLocation(user.user_id);
    setGet(false);
  }, [get]);

  const deviceIcon = new Icon({
    iconUrl: deviceMarker,
    iconSize: [38, 38],
  });

  const userIcon = new Icon({
    iconUrl: userMarker,
    iconSize: [45, 45],
  });

  useEffect(() => {
    if (
      userLatitude &&
      userLongitude &&
      props.deviceLatitude &&
      props.deviceLongitude
    ) {
      const distanceCalc = getPreciseDistance(
        { latitude: userLatitude, longitude: userLongitude },
        { latitude: props.deviceLatitude, longitude: props.deviceLongitude }
      );
      setDistance(distanceCalc);
    }
  }, [
    userLatitude,
    userLongitude,
    props.deviceLatitude,
    props.deviceLongitude,
  ]);

  useEffect(() => {
    if (deviceMarkerRef.current) {
      deviceMarkerRef.current.openPopup();
    }
  }, [distance]);
  return (userLatitude && userLongitude) ||
    (props.deviceLatitude && props.deviceLongitude) ? (
    <MapContainer
      center={
        props.deviceLatitude && props.deviceLongitude
          ? [props.deviceLatitude, props.deviceLongitude]
          : [userLatitude, userLongitude]
      }
      zoom={15}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.deviceLatitude && props.deviceLongitude ? (
        <Marker
          icon={deviceIcon}
          position={[props.deviceLatitude, props.deviceLongitude]}
          ref={deviceMarkerRef}
        >
          <Popup closeButton={false}>
            <Text align={"center"} fontSize={"0.8rem"} p={0} color={"black"}>
              {distance}m
            </Text>
          </Popup>
        </Marker>
      ) : null}
      <Marker icon={userIcon} position={[userLatitude, userLongitude]}>
        <Popup closeButton={false}>
          <Text align={"center"} fontSize={"0.8rem"} color={"black"}>
            You
          </Text>
        </Popup>
      </Marker>
    </MapContainer>
  ) : (
    <Flex direction={"column"} justify={"center"} align={"center"} h={"100%"} w={"100%"}>
      <Image mx={"auto"} src={loading} h={"7rem"} w={"auto"} />
      <Text>Pastikan laman ini memiliki akses ke lokasi anda.</Text>
    </Flex>
  );
};

export default Map;
