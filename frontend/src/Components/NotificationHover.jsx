import React, { useRef, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Box,
  ButtonGroup,
  Flex,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const NotificationHover = () => {
  const initialFocusRef = useRef(null);

  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button
          h={"3.5em"}
          bg={"#060640"}
          color={"#FFFFFF"}
          fontWeight={"normal"}
          _hover={"transform: scale(1.1)"}
        >
          Notifications
        </Button>
      </PopoverTrigger>
      <PopoverContent
        color="white"
        bg="#060640"
        borderRadius={"8pt"}
        borderColor="blue.800"
        py={2}
      >
        {/* <PopoverHeader pt={4} fontWeight="bold" border="0">
          Your Notifications
        </PopoverHeader> */}
        <PopoverArrow bg="#060640" />
        {/* <PopoverCloseButton /> */}
        <PopoverBody minH={"fit-content"} maxH={"28.5vh"} overflowY={"auto"}>
          <Flex
            bg={"lightblue"}
            h={"6vh"}
            mb={2}
            borderRadius={"8pt"}
            pl={3}
            alignItems={"center"}
          >
            <Text color={"white"}>Notif</Text>
            <Spacer />
            <Button
              justifySelf={"end"}
              bg={"transparent"}
              _hover={{ bg: "transparent", transform: "scale(1.1)" }}
            >
              <Box w={"22px"} h={"auto"}>
                <TiDeleteOutline size={"auto"} fill="white" />
              </Box>
            </Button>
          </Flex>
          <Flex
            bg={"lightblue"}
            h={"6vh"}
            mb={2}
            borderRadius={"8pt"}
            pl={3}
            alignItems={"center"}
          >
            <Text color={"white"}>Notif</Text>
            <Spacer />
            <Button
              justifySelf={"end"}
              bg={"transparent"}
              _hover={{ bg: "transparent", transform: "scale(1.1)" }}
            >
              <Box w={"22px"} h={"auto"}>
                <TiDeleteOutline size={"auto"} fill="white" />
              </Box>
            </Button>
          </Flex>
          <Flex
            bg={"lightblue"}
            h={"6vh"}
            mb={2}
            borderRadius={"8pt"}
            pl={3}
            alignItems={"center"}
          >
            <Text color={"white"}>Notif</Text>
            <Spacer />
            <Button
              justifySelf={"end"}
              bg={"transparent"}
              _hover={{ bg: "transparent", transform: "scale(1.1)" }}
            >
              <Box w={"22px"} h={"auto"}>
                <TiDeleteOutline size={"auto"} fill="white" />
              </Box>
            </Button>
          </Flex>
          <Flex
            bg={"lightblue"}
            h={"6vh"}
            mb={2}
            borderRadius={"8pt"}
            pl={3}
            alignItems={"center"}
          >
            <Text color={"white"}>Notif</Text>
            <Spacer />
            <Button
              justifySelf={"end"}
              bg={"transparent"}
              _hover={{ bg: "transparent", transform: "scale(1.1)" }}
            >
              <Box w={"22px"} h={"auto"}>
                <TiDeleteOutline size={"auto"} fill="white" />
              </Box>
            </Button>
          </Flex>
          <Flex
            bg={"lightblue"}
            h={"6vh"}
            mb={2}
            borderRadius={"8pt"}
            pl={3}
            alignItems={"center"}
          >
            <Text color={"white"}>Notif</Text>
            <Spacer />
            <Button
              justifySelf={"end"}
              bg={"transparent"}
              _hover={{ bg: "transparent", transform: "scale(1.1)" }}
            >
              <Box w={"22px"} h={"auto"}>
                <TiDeleteOutline size={"auto"} fill="white" />
              </Box>
            </Button>
          </Flex>
        </PopoverBody>
        <PopoverFooter h={"3.5vh"}>
          <Link to={"/notifications/:id"}>Show All</Link>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationHover;
