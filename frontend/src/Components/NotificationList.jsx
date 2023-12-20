import React, { useEffect, useState } from "react";
import { Button, Flex, Text, Spacer, Heading, Box } from "@chakra-ui/react";
import { TiDeleteOutline } from "react-icons/ti";
import { PiBellSimpleRinging } from "react-icons/pi";
import axios from "axios";
import { useSocket } from "../Features/SocketContext.js";
import { useSelector } from "react-redux";

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);
  const socket = useSocket();
  const { user } = useSelector((state) => state.auth);

  const getNotif = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/notifications/${user.user_id}`
      );
      console.log(response.data);
      setNotifications(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const deleteNotif = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/notifications/${id}`);
      getNotif();
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

  useEffect(() => {
    getNotif();
  }, []);

  const dateFormat = (rawDate) => {
    const date = new Date(rawDate);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

  useEffect(() => {
    console.log("Socket connected:", socket.connected);

    socket.on("newNotification", (updatedData) => {
      console.log("Received new notification:", updatedData);
      setNotifications(updatedData);
    });

    return () => {
      socket.off("newNotification");
    };
  }, [socket]);

  return (
    <>
      {notifications.length > 0 ? (
        <Box>
          <Heading mt={"10%"} fontSize={"3rem"}>
            Notifications
          </Heading>
          <Text fontSize={"0.8rem"} mb={"3%"}>Let your devices reach you</Text>

          {notifications.map((notif) => (
            <Flex
              bg={"lightblue"}
              h={"8vh"}
              mb={2}
              borderRadius={"8pt"}
              pl={3}
              alignItems={"center"}
              mx={"auto"}
              w={"60%"}
              px={5}
            >
              <Text color={"#060640"} fontSize={"100%"} textAlign={"start"}>
                <strong>{notif.device_id}</strong> - {notif.message} ({dateFormat(notif.createdAt)})
              </Text>
              <Spacer />
              {/* <Button
                    justifySelf={"end"}
                    bg={"transparent"}
                    _hover={{ bg: "transparent", transform: "scale(1.1)" }}
                  > */}
              <Button
                variant={"unstyled"}
                onClick={() => {
                  pingDevice(notif.device_id);
                }}
                w={"22px"}
                h={"auto"}
                _hover={{ transform: "scale(1.05)" }}
              >
                <PiBellSimpleRinging size={"auto"} fill="#060640" />
              </Button>
              <Button
                variant={"unstyled"}
                onClick={() => {
                  deleteNotif(notif.id);
                }}
                w={"22px"}
                h={"auto"}
                _hover={{ transform: "scale(1.05)" }}
              >
                <TiDeleteOutline size={"auto"} fill="#060640" />
              </Button>
              {/* </Button> */}
            </Flex>
          ))}
        </Box>
      ) : (
        <Flex alignItems={"center"} textAlign={"center"}>
          <Heading>Belum ada notifikasi</Heading>
        </Flex>
      )}
    </>
  );
};

export default NotificationList;
