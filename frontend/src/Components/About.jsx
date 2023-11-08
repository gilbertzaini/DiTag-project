import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import { IoShieldSharp, IoLocation } from "react-icons/io5";
import React from "react";
import logo_no_text from "../Assets/logo.png";

const About = () => {
  return (
    <>
      <Flex w={"85vw"} minH={"100vh"} mx={"auto"} alignItems={"center"}>
        <Flex
          direction={"column"}
          w={{ base: "100%", xl: "50%" }}
          justifyContent={"center"}
          textAlign={{ base: "center", xl: "start" }}
          id="aboutKiri"
        >
          <Heading color={"#060640"} font-size={"3rem"} fontWeight={400}>
            About DiTag
          </Heading>
          <Text my={5} w={{ base: "100%", xl: "50%" }}>
            DiTag adalah produk yang dapat membantu mahasiswa yang sering lupa
            atau ceroboh untuk mengatasi masalah mereka dalam manajemen
            barang-barang pribadi
          </Text>
          <Flex direction={"column"}>
            <Flex my={3} ml={-1} align={"center"}>
              <Box display={{ base: "none", xl: "block" }} w={"60px"} h={"60px"}>
                <IoShieldSharp size={"100%"} color="#00aa63" />
              </Box>
              <Flex direction={"column"}>
                <Flex
                  w={"100%"}
                  justify={{ base: "center", xl: "start" }}
                  align={"center"}
                >
                  <Box
                    display={{ base: "block", xl: "none" }}
                    h={"30px"}
                    mt={-2}
                  >
                    <IoShieldSharp size={"100%"} color="#00aa63" />
                  </Box>
                  <Heading
                    mt={1}
                    mb={3}
                    fontSize={"1.2rem"}
                    color={"#060640"}
                    fontWeight={400}
                  >
                    Safe and Secure
                  </Heading>
                </Flex>
                <Text
                  mx={{ base: "auto", xl: 0 }}
                  w={{ base: "80%", xl: "60%" }}
                >
                  Menjaga keamanan barang berhargamu dengan mengetahui
                  keberadaannya
                </Text>
              </Flex>
            </Flex>

            <Flex my={3} ml={-1} align={"center"}>
              <Box display={{ base: "none", xl: "block" }} w={"60px"} h={"60px"}>
                <IoLocation size={"100%"} color="#7d89ff" />
              </Box>
              <Flex direction={"column"}>
                <Flex
                  w={"100%"}
                  justify={{ base: "center", xl: "start" }}
                  align={"center"}
                >
                  <Box
                    display={{ base: "block", xl: "none" }}
                    h={"30px"}
                    mt={-2}
                  >
                    <IoLocation size={"100%"} color="#7d89ff" />
                  </Box>
                  <Heading
                    mt={1}
                    mb={3}
                    fontSize={"1.2rem"}
                    color={"#060640"}
                    fontWeight={400}
                  >
                    Friendly Reminder
                  </Heading>
                </Flex>
                <Text
                  mx={{ base: "auto", xl: 0 }}
                  w={{ base: "80%", xl: "60%" }}
                >
                  Membantumu mengingat lokasi terakhir barang berhargamu
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Box
          id="aboutKanan"
          display={{ base: "none", xl: "block" }}
          w={{ base: "0%", xl: "50%" }}
        >
          <Image src={logo_no_text} borderRadius={"10px"} />
        </Box>
      </Flex>
    </>
  );
};

export default About;
