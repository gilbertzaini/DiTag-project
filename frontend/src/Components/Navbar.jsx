import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import logo from "../Assets/logo.png";

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
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Register DiTag</Link>
          <Link>Monitoring</Link>
          <Link>Review</Link>
          <Spacer />
          <Box>
            <Link color={"#000000"}>Sign In</Link>
            <Link>
              <Button h={"3.5em"} bg={"#060640"} color={"#FFFFFF"} fontWeight={"normal"}>
                Notifications
              </Button>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
