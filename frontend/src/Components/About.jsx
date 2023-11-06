import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import { IoShieldSharp, IoLocation } from "react-icons/io5";
import React from "react";
import logo_no_text from "../Assets/logo.png";

const About = () => {
  return (
    <>
      <Flex w={"85vw"} minH={"100vh"} mx={"auto"}>
        <Flex direction={"column"} w={"50%"} justifyContent={"center"} textAlign={"start"} id="aboutKiri">
          <Heading color={"#060640"} font-size={"3rem"} fontWeight={400}>
            About DiTag
          </Heading>
          <Text my={5} w={"70%"}>
            DiTag adalah produk yang dapat membantu mahasiswa yang sering lupa
            atau ceroboh untuk mengatasi masalah mereka dalam manajemen
            barang-barang pribadi
          </Text>
          <Flex direction={"column"}>
            <Flex my={3}>
              {/* <Box bg={"#f0faff"} w={"fit-content"} h={"auto"}> */}
              <IoShieldSharp size={60} color="#00aa63" />
              {/* </Box> */}
              <Flex ml={3} direction={"column"}>
                <Heading mt={1} mb={3} fontSize={"1.2rem"} color={"#060640"} fontWeight={400}>
                  Safe and secure
                </Heading>
                <Text w={"60%"}>
                  Menjaga keamanan barang berhargamu dengan mengetahui
                  keberadaannya
                </Text>
              </Flex>
            </Flex>
            <Flex my={3} ml={-1}>
              {/* <Box bg={"#f0faff"} w={"fit-content"} h={"auto"}> */}
              <IoLocation size={55} color="#7d89ff" />
              {/* </Box> */}
              <Flex direction={"column"} ml={3}>
                <Heading mt={1} mb={3} fontSize={"1.2rem"} color={"#060640"} fontWeight={400}>
                  Friendly Reminder
                </Heading>
                <Text w={"60%"}>
                  Membantumu mengingat lokasi terakhir barang berhargamu
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction={"column"} w={"50%"} justifyContent={"center"} alignItems={"start"} id="aboutKanan">
            <Image
                src={logo_no_text}
                borderRadius={"10px"}
            />
        </Flex>
      </Flex>
    </>
  );
};

export default About;
