import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import loadingGif from "../Assets/loading.gif";
// import map_sample from "../Assets/map_sample.png";
import axios from "axios";
import Map from "./Map";
import { useSelector } from "react-redux";
import { Link as ReactLink } from "react-router-dom";
import { useSocket } from "../Features/SocketContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiBellSimpleRinging } from "react-icons/pi";

const Monitor = () => {
  const [devices, setDevices] = useState([]);
  const [deviceLatitude, setDeviceLatitude] = useState(null);
  const [deviceLongitude, setDeviceLongitude] = useState(null);
  const [deviceName, setDeviceName] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [loading, setLoading] = useState(true);
  const [updatedAt, setUpdatedAt] = useState(null);
  // const [lastUpdate, setLastUpdate] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const socket = useSocket();

  const getDevices = async () => {
    if (user) {
      try {
        const response = await axios.get(
          `http://localhost:8080/device/${user.user_id}`
        );
        setDevices(response.data);
        // console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    }
  };

  useEffect(() => {
    getDevices();
  }, []);

  useEffect(() => {
    socket.on("coordinateUpdated", (updatedData) => {
      setDevices(updatedData);
    });

    return () => {
      socket.off("newPot");
    };
  }, [socket]);

  const deleteDevice = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/device/${id}`);
      console.log("deleted");
      getDevices();
    } catch (e) {
      console.log(e.message);
    }
  };
  const pingDevice = async (id) => {
    try {
      await axios.post(`http://localhost:8080/device/ring/${id}`);
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 seconds delay
      await axios.post(`http://localhost:8080/device/mute/${id}`);
      console.log(`Ping request for ${id} sent`);
    } catch (e) {
      console.log(e.message);
    }
  };

  const formatTimeDifference = (updatedAtDate) => {
    const now = new Date();
    const timeDifferenceMilliseconds = now - updatedAtDate;
    const hours = Math.floor(timeDifferenceMilliseconds / 3600000);
    const minutes = Math.floor((timeDifferenceMilliseconds % 3600000) / 60000);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  const pingDevice = async (id) => {
    try {
      await axios.post(`https://api.punca.my.id/device/ring/${id}`);
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 seconds delay
      await axios.post(`https://api.punca.my.id/device/mute/${id}`);
      console.log(`Ping request for ${id} sent`);
    } catch (e) {
      console.log(e.message);
    }
  };

  const formatTimeDifference = (updatedAtDate) => {
    const now = new Date();
    const timeDifferenceMilliseconds = now - updatedAtDate;
    const hours = Math.floor(timeDifferenceMilliseconds / 3600000);
    const minutes = Math.floor((timeDifferenceMilliseconds % 3600000) / 60000);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  // useEffect(() => {
  //   console.log(deviceLatitude, deviceLongitude);
  // }, [deviceLatitude, deviceLongitude]);

  // useEffect(() => {
  //   console.log(deviceId);
  // }, [deviceId]);

  return (
    <Box
      position={"relative"}
      pt={{ base: "7rem", xl: "9rem" }}
      px={"5%"}
      maxH={"100vh"}
      w={{ base: "100vw", xl: "inherit" }}
      overflow={"hidden"}
    >
      {/* <Image src={logo} w={"13rem"} position={"absolute"} top={1} left={5} /> */}
      <Heading
        fontSize={{ base: "2rem", xl: "3rem" }}
        fontWeight={400}
        color={"#060640"}
      >
        Find your DiTag Location
      </Heading>
      <Text color={"#9090A7"} fontSize={{ base: "0.8rem", xl: "1rem" }} mt={4}>
        Monitoring lokasi keberadaan DiTag
      </Text>
      <Flex
        mt={3}
        h={{ base: "72vh", xl: "60vh" }}
        direction={{ base: "column-reverse", xl: "row" }}
      >
        <Flex
          direction={"column"}
          borderRadius={{ base: "0 0 12px 12px", xl: "12px" }}
          overflow={"hidden"}
          w={{ base: "100%", xl: "15%" }}
          h={{ base: "11vh", xl: "100%" }}
          border={"1px solid grey"}
        >
          <Box
            bg={"#7d89ff"}
            py={1}
            px={3}
            display={{ base: "none", xl: "block" }}
          >
            <Text
              color={"black"}
              fontWeight={600}
              fontSize={"1.5rem"}
              textAlign={"center"}
            >
              Devices
            </Text>
          </Box>
          <Flex
            justify={"center"}
            align={"center"}
            display={loading ? "block" : "none"}
            h={"100%"}
            w={"100%"}
          >
            <Image
              mx={"auto"}
              mt={"18vh"}
              w={"50%"}
              h={"auto"}
              src={loadingGif}
            />
          </Flex>
          <Flex
            display={loading ? "none" : "block"}
            direction={"column"}
            mx={2}
            px={deviceId === "" ? 0 : 2}
            py={deviceId === "" ? 0 : 2}
            h={"55vh"}
            overflowY={"scroll"}
            className="noScroll"
          >
            {devices.length > 0 ? (
              <>
                {devices.map((device) => (
                  <Box
                    // bg={"transparent"}
                    bg={deviceId === device.device_id ? "white" : "transparent"}
                    onClick={() => {
                      setDeviceLatitude(device.Coordinate.latitude);
                      setDeviceLongitude(device.Coordinate.longitude);
                      setDeviceName(device.name);
                      setDeviceId(device.device_id);
                      setUpdatedAt(device.updatedAt);
                    }}
                    my={1}
                    w={"100%"}
                    h={"fit-content"}
                    px={3}
                    py={1}
                    borderRadius={"12px"}
                    _hover={{ transform: "scale(1.05)" }}
                    transform={{
                      base: "",
                      xl: deviceId === device.device_id ? "scale(1.05)" : "",
                    }}
                    transition={"0.4s ease"}
                  >
                    <Flex justify={"space-between"}>
                      <Flex
                        textAlign={"start"}
                        direction={"column"}
                        fontWeight={500}
                        w={"90%"}
                      >
                        <Text
                          color="black"
                          fontSize={{ base: "0.8rem", xl: "1rem" }}
                          fontWeight={600}
                          mb={1}
                        >
                          {device.name}
                        </Text>
                        {/* <Text
                          color="black"
                          fontSize={{ base: "0.65rem", xl: "0.75rem" }}
                        >
                          Power: {device.battery_percentage || "100%"}
                        </Text>
                        <Text
                          color="black"
                          fontSize={{ base: "0.65rem", xl: "0.75rem" }}
                        >
                          Status: {device.status}
                        </Text> */}
                        <Text
                          color="black"
                          fontSize={{ base: "0.65rem", xl: "0.75rem" }}
                        >
                          {formatTimeDifference(new Date(device.updatedAt))} ago
                        </Text>
                      </Flex>
                      <Flex align={"center"}>
                        <Button
                          variant={"unstyled"}
                          _hover={{ transform: "scale(1.1)" }}
                          onClick={() => {
                            pingDevice(device.device_id);
                          }}
                        >
                          <PiBellSimpleRinging size={"20px"} />
                        </Button>
                        <Button
                          variant={"unstyled"}
                          _hover={{ transform: "scale(1.1)" }}
                          onClick={() => {
                            deleteDevice(device.device_id);
                          }}
                        >
                          <RiDeleteBin5Line size={"20px"} fill="red" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>
                ))}
              </>
            ) : (
              <>
                <Flex
                  justify={"center"}
                  align={"center"}
                  fontSize={"1rem"}
                  w={"100%"}
                  h={"100%"}
                >
                  <Box textDecor={"underline"} color={"blue"}>
                    <ReactLink to={"/device/register"}>Register</ReactLink>
                  </Box>
                  <Text ml={1}>your device now</Text>
                </Flex>
              </>
            )}
          </Flex>
        </Flex>
        <Box
          id="mapContainer"
          w={{ base: "100%", xl: "70%" }}
          h={"100%"}
          mx={"auto"}
          border={"1px solid grey"}
          borderRadius={{ base: "12px 12px 0 0", xl: "12px" }}
          zIndex={1}
        >
          <Map
            deviceName={deviceName}
            deviceLatitude={deviceLatitude}
            deviceLongitude={deviceLongitude}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Monitor;