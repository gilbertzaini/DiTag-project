import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Spacer,
  Avatar,
  Image,
  AvatarGroup,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { LuQuote } from "react-icons/lu";
import { AiOutlineSearch, AiFillPlayCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import axios from "axios";
import logo from "../Assets/logo.png";
import logo_no_text from "../Assets/logo_no_text.png";
import map_sample from "../Assets/map_sample.png";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const getUser = async () => {
    const response = await axios.get("http://localhost:8080/users");
    setUsers(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Flex w={"85vw"} minH={"100vh"} mx={"auto"}>
        <Flex
          id="kiri"
          direction={"column"}
          justifyContent={"center"}
          alignItems={"start"}
          textAlign={"start"}
          px={5}
          pt={"6%"}
        >
          <Flex direction={"column"} id="typography">
            <Heading fontWeight={"extrabold"} fontSize={"3rem"}>
              Hilangkan
              <br />
              Kebiasaan
              <br />
              Kehilangan Barang
            </Heading>
            <Text my={5}>
              DITAG merupakan produk yang membantu anda
              <br />
              agar barang berharga anda dapat terjaga
            </Text>
          </Flex>

          <Box display={user ? "none" : "block"}>
            <Flex mt={3} id="signin">
              <ReactLink to="/login">
                <Button
                  h={"3.5em"}
                  w={"8rem"}
                  bg={"#060640"}
                  color={"#FFFFFF"}
                  fontWeight={"normal"}
                  mr={5}
                  _hover={{}}
                >
                  Sign In
                </Button>
              </ReactLink>
              <AiFillPlayCircle size={55} color="#00E5CC" />
            </Flex>
          </Box>

          <Flex
            id="review"
            bg={"white"}
            direction="column"
            mt={user ? "9.2rem" : "5rem"}
            w={"27rem"}
            py={5}
            px={5}
            rounded={"12px"}
            filter={"drop-shadow(0px 10px 30px rgba(6, 6, 64, 0.03))"}
          >
            <Flex>
              <LuQuote size={32} fill="#00E5CC" color="#00E5CC" />
              <Spacer />
              <Flex alignItems={"end"} pb={1}>
                <FaStar size={20} color="#FFBF00" />
                <Text fontSize={"0.7em"} ml={1}>
                  4.9
                </Text>
              </Flex>
            </Flex>
            <Text mt={5}>
              DITAG sangat membantu saya, sekarang tidak pernah kehilangan
              barang lagi <strong>-Nando Punca</strong>
            </Text>
          </Flex>
        </Flex>

        <Flex
          id="kanan"
          direction={"column"}
          justifyContent={"start"}
          mt={"14%"}
          ml={"10%"}
        >
          <Flex
            id="wrapper"
            bg={"white"}
            w={"45vw"}
            // h={"55vh"}
            alignItems={"start"}
            justifyContent={"start"}
            py={5}
            px={5}
            borderRadius={"10px"}
            direction={"column"}
          >
            <Flex
              justifyContent={"start"}
              alignItems={"center"}
              id="macOptWrapper"
            >
              <Box className="macOpt" bg={"#FF4443"} />
              <Box className="macOpt" bg={"#FFBF00"} />
              <Box className="macOpt" bg={"#00D544"} />
            </Flex>
            <Flex
              id="searchWrapper"
              justifyContent={"start"}
              alignItems={"center"}
              bg={"#ECF9FF"}
              py={3}
              px={3}
              mt={3}
              borderRadius={"10px"}
              w={"100%"}
            >
              <Box
                id="searchBar"
                w={"45%"}
                bg={"#DFF3FD"}
                borderRadius={"10px"}
                py={3}
                px={2}
              >
                <AiOutlineSearch />
              </Box>
              <Spacer />
              <Avatar
                name="DiTag"
                src={logo_no_text}
                h={"30px"}
                w={"30px"}
                bg={"white"}
                objectFit={"contain"}
              />
            </Flex>
            <Image
              w={"100%"}
              objectFit={"contain"}
              src={map_sample}
              border={"1px solid #9090A7"}
              borderRadius={"10px"}
              mt={4}
            />
            <AvatarGroup size="md" max={3} mt={3}>
              {users.map((item, index) => (
                <Avatar
                  key={index}
                  name={item.name}
                  src={
                    "https://img.icons8.com/pastel-glyph/64/person-male--v1.png"
                  }
                  bg="white"
                  objectFit="contain"
                  border={"1px solid lightgrey"}
                />
              ))}
            </AvatarGroup>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HomePage;
