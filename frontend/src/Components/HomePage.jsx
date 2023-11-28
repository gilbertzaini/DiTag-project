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
    const response = await axios.get("https://api.punca.my.id/users");
    setUsers(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Flex
        w={"85vw"}
        mt={{ base: "28vh", xl: 0 }}
        minH={"100vh"}
        mx={"auto"}
        direction={{ base: "column", xl: "row" }}
      >
        <Flex
          id="kiri"
          direction={"column"}
          justifyContent={"center"}
          alignItems={"start"}
          textAlign={"start"}
          px={{ base: 0, xl: 5 }}
          pt={"6%"}
        >
          <Flex direction={"column"} id="typography">
            <Heading
              fontWeight={"extrabold"}
              textAlign={{ base: "center", xl: "start" }}
              fontSize={{ base: "2rem", xl: "3rem" }}
            >
              Hilangkan Kebiasaan Kehilangan Barang
            </Heading>
            <Text my={5} textAlign={{ base: "center", xl: "start" }}>
              DITAG merupakan produk yang membantu anda agar barang berharga
              anda dapat terjaga
            </Text>
          </Flex>

          <Flex
            mt={3}
            w={"100%"}
            justifyContent={"center"}
            align={"center"}
            id="signin"
            display={user ? "none" : "block"}
          >
            <Flex justifyContent={{ base: "center", xl: "start" }}>
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
              <Box display={{ base: "none", xl: "block" }}>
                <AiFillPlayCircle size={55} color="#00E5CC" />
              </Box>
            </Flex>
          </Flex>

          <Flex
            id="review"
            bg={"white"}
            direction="column"
            mt={user ? "9.2rem" : "5rem"}
            w={{ base: "100%", xl: "100%" }}
            py={5}
            px={5}
            rounded={"12px"}
            filter={"drop-shadow(0px 10px 30px rgba(6, 6, 64, 0.03))"}
          >
            <Flex>
              <Box w={{ base: "25px", xl: "35px" }}>
                <LuQuote size={"100%"} fill="#00E5CC" color="#00E5CC" />
              </Box>
              <Spacer />
              <Flex alignItems={"center"} pb={1}>
                <Box w={{base: "15px", xl: "18px"}}>
                  <FaStar size={"100%"} color="#FFBF00" />
                </Box>
                <Text fontSize={"0.7rem"} mt={"2px"} ml={1}>
                  4.9
                </Text>
              </Flex>
            </Flex>
            <Text
              mt={5}
              fontSize={{ base: "0.7rem", xl: "1rem" }}
              wordBreak={"break-word"}
            >
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
            display={{ base: "none", xl: "block" }}
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
