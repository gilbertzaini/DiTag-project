import { Flex, Text, Spacer, Heading } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { LuQuote } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    const response = await axios.get("http://localhost:8080/review");
    setReviews(response.data);
  };
  return (
    <>
    <Heading mt={"10%"} fontSize={"3rem"}>Our Reviews</Heading>
    <Text fontSize={"0.8rem"}>What they say about DiTag</Text>
      <Flex flexWrap={"wrap"} align={"around"} mt={5} w={"85%"} mx={"auto"}>
        <Flex
          id="review"
          bg={"white"}
          direction="column"
          mt={4}
          minW={"27rem"}
          maxW={"27rem"}
          py={5}
          px={5}
          mx={2}
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
          <Text mt={5} align={"start"}>
            DITAG sangat membantu saya, sekarang tidak pernah kehilangan barang
            lagi <strong>-Nando Punca</strong>
          </Text>
        </Flex>

        {reviews.map((review) => (
          <Flex
            id="review"
            bg={"white"}
            direction="column"
            mt={4}
            minW={"27rem"}
            maxW={"27rem"}
            py={5}
            px={5}
            mx={2}
            rounded={"12px"}
            filter={"drop-shadow(0px 10px 30px rgba(6, 6, 64, 0.03))"}
          >
            <Flex>
              <LuQuote size={32} fill="#00E5CC" color="#00E5CC" />
              <Spacer />
              <Flex alignItems={"end"} pb={1}>
                <FaStar size={20} color="#FFBF00" />
                <Text fontSize={"0.7em"} ml={1}>
                  {review.rate}
                </Text>
              </Flex>
            </Flex>
            <Text mt={5} align={"start"}>
              {review.message} <strong>-{review.User.name}</strong>
            </Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default ReviewList;
