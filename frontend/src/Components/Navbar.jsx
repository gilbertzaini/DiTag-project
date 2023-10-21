import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import logo from "../Assets/logo.png";
import { Link as ReactLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Flex justifyContent={"center"}>
        <Flex
          width={"85%"}
          id="navbar"
          bgColor={"#FFFFFF"}
          alignItems={"center"}
          justifyContent={"center"}
          py={3}
          px={5}
          mx={"auto"}
          top={5}
          position={"fixed"}
          zIndex={10}
          rounded={"10px"}
        >
          <Image h={"5em"} src={logo} objectFit={"contain"} />
          <Spacer />
          <ReactLink to={"/"}>Home</ReactLink>
          <ReactLink to={"/device/register"}>Register DiTag</ReactLink>
          <ReactLink to={"/device/monitor"}>Monitoring</ReactLink>
          <Link>Review</Link>
          <Spacer />
          <Box>
            <ReactLink to="/login" color={"#000000"}>
              Sign In
            </ReactLink>
            <Button
              h={"3.5em"}
              bg={"#060640"}
              color={"#FFFFFF"}
              fontWeight={"normal"}
            >
              Notifications
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
