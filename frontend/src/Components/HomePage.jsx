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
import React from "react";
import logo from "../Assets/logo.png";
import logo_no_text from "../Assets/logo_no_text.png";

const HomePage = () => {
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

          <Flex mt={3} id="signin">
            <Button
              h={"3.5em"}
              w={"8rem"}
              bg={"#060640"}
              color={"#FFFFFF"}
              fontWeight={"normal"}
              mr={5}
            >
              Sign In
            </Button>
            <AiFillPlayCircle size={55} color="#00E5CC" />
          </Flex>

          <Flex
            id="review"
            bg={"white"}
            direction="column"
            mt={"5rem"}
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
                <FaStar size={20} color="FFBF00" />
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
              src={logo}
              border={"2px solid #9090A7"}
              borderRadius={"10px"}
              mt={4}
            />
            {/* <Flex id="macFooter"
            alignItems={"center"}
            justifyContent={"center"}> */}
            <AvatarGroup size="md" max={2} mt={3}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
            {/* </Flex> */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HomePage;
