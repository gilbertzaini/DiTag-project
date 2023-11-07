import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import loadingGif from "../Assets/loading.gif";
import map_sample from "../Assets/map_sample.png";
import axios from "axios";
import Map from "./Map";
import { useSelector } from "react-redux";

const Monitor = () => {
  const [devices, setDevices] = useState([]);
  const [deviceLatitude, setDeviceLatitude] = useState(null);
  const [deviceLongitude, setDeviceLongitude] = useState(null);
  const [deviceName, setDeviceName] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);

  const getDevices = async () => {
    if (user) {
      try {
        const response = await axios.get(
          `http://localhost:8080/device/${user.user_id}`
        );
        setDevices(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    }
  };

  useEffect(() => {
    getDevices();
  }, []);

  // useEffect(() => {
  //   console.log(deviceLatitude, deviceLongitude);
  // }, [deviceLatitude, deviceLongitude]);

  // useEffect(() => {
  //   console.log(deviceId);
  // }, [deviceId]);

  return (
    <Box
      position={"relative"}
      pt={"9rem"}
      px={"5%"}
      maxH={"100vh"}
      maxW={"100vw"}
      overflow={"hidden"}
    >
      {/* <Image src={logo} w={"13rem"} position={"absolute"} top={1} left={5} /> */}
      <Heading fontSize={"3rem"} fontWeight={400} color={"#060640"}>
        Find your DiTag Location
      </Heading>
      <Text color={"#9090A7"} fontSize={"1rem"} mt={4}>
        Monitoring lokasi keberadaan DiTag
      </Text>
      <Flex mt={3} h={"60vh"}>
        <Flex
          direction={"column"}
          borderRadius={"12px"}
          overflow={"hidden"}
          w={"15%"}
          border={"2px solid grey"}
        >
          <Box bg={"#7d89ff"} py={1} px={3}>
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
            {devices.map((device) => (
              <Button
                // bg={"transparent"}
                bg={deviceId === device.device_id ? "white" : "transparent"}
                onClick={() => {
                  setDeviceLatitude(device.Coordinate.latitude);
                  setDeviceLongitude(device.Coordinate.longitude);
                  setDeviceName(device.name);
                  setDeviceId(device.device_id);
                }}
                my={1}
                h={"fit-content"}
                p={3}
                borderRadius={"12px"}
                transform={deviceId === device.device_id ? "scale(1.1)" : ""}
              >
                <Flex textAlign={"start"} direction={"column"} fontWeight={500}>
                  <Text color="black" fontSize={"1rem"} fontWeight={600}>
                    {device.User.name} - {device.name}
                  </Text>
                  {/* <Text color="black" fontSize={"0.75rem"}>
                  Multimedia Nusantara University
                </Text> */}
                  <Text color="black" fontSize={"0.75rem"}>
                    Latitude: {device.Coordinate.latitude}
                  </Text>
                  <Text color="black" fontSize={"0.75rem"}>
                    Longitude: {device.Coordinate.longitude}
                  </Text>
                  <Text color="black" fontSize={"0.75rem"}>
                    -now
                  </Text>
                </Flex>
                {/* <Text
                  color="black"
                  fontSize={"0.8rem"}
                  textAlign={"end"}
                  mt={"2px"}
                >
                  0km
                </Text> */}
              </Button>
            ))}
          </Flex>
        </Flex>
        <Box
          id="mapContainer"
          w={"70%"}
          mx={"auto"}
          border={"1px solid grey"}
          borderRadius={"12px"}
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
