import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import logo from "../Assets/logo.png";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../Features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

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
          <ReactLink to={"/"}>
            <Image h={"5em"} src={logo} objectFit={"contain"} />
          </ReactLink>
          <Spacer />
          {user ? (
            <>
              <ReactLink to="/device/register">Register DiTag</ReactLink>
              <ReactLink to="/device/monitor">Monitoring</ReactLink>
              <ReactLink to="/reviews">Reviews</ReactLink>
            </>
          ) : null}
          <Spacer />
          <Box>
            {user ? (
              <>
                <Button
                  onClick={logout}
                  mx={3}
                  bg={"transparent"}
                  _hover={"background: transparent"}
                  fontSize={"0.9rem"}
                  color={"#828297"}
                  fontWeight={"normal"}
                >
                  Logout
                </Button>
                <Button
                  h={"3.5em"}
                  bg={"#060640"}
                  color={"#FFFFFF"}
                  fontWeight={"normal"}
                  _hover={"transform: scale(1.1)"}
                >
                  Notifications
                </Button>
              </>
            ) : (
              <ReactLink to="/login" color={"#000000"}>
                Sign In
              </ReactLink>
            )}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
