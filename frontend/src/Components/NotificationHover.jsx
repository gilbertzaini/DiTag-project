import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Button,
  Flex,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { PiBellSimpleRinging } from "react-icons/pi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSocket } from "../Features/SocketContext.js";

const NotificationHover = (props) => {
  const initialFocusRef = useRef(null);
  const { user } = useSelector((state) => state.auth);
  const [notifications, setNotifications] = useState([]);
  const socket = useSocket();

  const getNotif = async () => {
    try {
      const response = await axios.get(
        `https://api.punca.my.id/notifications/${user.user_id}`
      );
      console.log(response.data);
      setNotifications(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const deleteNotif = async (id) => {
    try {
      await axios.delete(`https://api.punca.my.id/notifications/${id}`);
      getNotif();
    } catch (e) {
      console.log(e.message);
    }
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

  useEffect(() => {
    getNotif();
  }, []);

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
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Box pos={"relative"}>
          <Button
            h={"3.5em"}
            bg={"#060640"}
            color={"#FFFFFF"}
            fontWeight={"normal"}
            _hover={"transform: scale(1.1)"}
          >
            Notifications
          </Button>
          <Flex position={"absolute"} top={-2} right={-2} justify={"center"} align={"center"} bg={"red"} borderRadius={"50%"} width={"1.4rem"} height={"1.4rem"}>
            <Text color={"#FFFFFF"}>{notifications.length}</Text>
          </Flex>
        </Box>
      </PopoverTrigger>
      <PopoverContent
        color="#060640"
        bg="#FFFFFF"
        borderRadius={"8pt"}
        borderColor="#060640"
        py={2}
      >
        {/* <PopoverHeader pt={4} fontWeight="bold" border="0">
          Your Notifications
        </PopoverHeader> */}
        <PopoverArrow bg="#060640" />
        {/* <PopoverCloseButton /> */}
        <PopoverBody minH={"fit-content"} maxH={"28.5vh"} overflowY={"auto"}>
          {notifications.length > 0 ? (
            <>
              {notifications.map((notif) => (
                <Flex
                  bg={"lightblue"}
                  h={"6vh"}
                  mb={2}
                  borderRadius={"8pt"}
                  pl={3}
                  alignItems={"center"}
                >
                  <Text color={"#060640"} textAlign={"start"}>
                    <strong>{notif.device_id}</strong> - {notif.message}
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
            </>
          ) : (
            <>
              <Text>Belum ada notifikasi</Text>
            </>
          )}
        </PopoverBody>
        {notifications.length > 0 && (
          <PopoverFooter h={"3.5vh"}>
            <Link to={`/notifications`}>Show All</Link>
          </PopoverFooter>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default NotificationHover;
