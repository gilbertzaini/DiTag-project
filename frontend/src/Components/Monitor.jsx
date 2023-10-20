import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import map_sample from "../Assets/map_sample.png";

const Monitor = () => {
  return (
    <Box position={"relative"} pt={"8rem"} px={"5%"} maxH={"100vh"} maxW={"100vw"} overflow={"hidden"}>
      {/* <Image src={logo} w={"13rem"} position={"absolute"} top={1} left={5} /> */}
      <Heading fontSize={"3rem"} fontWeight={400} color={"#060640"}>
        Find your DiTag Location
      </Heading>
      <Text color={"#9090A7"} fontSize={"1rem"} mt={4}>
        Monitoring lokasi keberaaan DiTag
      </Text>
      <Flex mt={3} h={"60vh"}>
        <Flex direction={"column"} borderRadius={"12px"} overflow={"hidden"} minW={"12%"} maxW={"12%"} border={"2px solid grey"}>
          <Box bg={"#7d89ff"} py={1} px={3}>
            <Text
              color={"black"}
              fontWeight={600}
              fontSize={"1.5rem"}
              textAlign={"center"}
            >
              Devices
            </Text>
          </Box>
          <Flex direction={"column"} mx={3} h={"55vh"} overflowY={"scroll"} className="noScroll">
            <Flex my={3}>
              <Flex textAlign={"start"} direction={"column"} fontWeight={500}>
                <Text color="black" fontSize={"1rem"} fontWeight={600}>
                  Dompet
                </Text>
                <Text color="black" fontSize={"0.75rem"}>
                  Multimedia Nusantara University
                </Text>
                <Text color="black" fontSize={"0.75rem"}>-now</Text>
              </Flex>
              <Text color="black" fontSize={"0.8rem"} textAlign={"end"} mt={"2px"}>
                0km
              </Text>
            </Flex>
            <Flex my={3}>
              <Flex textAlign={"start"} direction={"column"} fontWeight={500}>
                <Text color="black" fontSize={"1rem"} fontWeight={600}>
                  Dompet
                </Text>
                <Text color="black" fontSize={"0.75rem"}>
                  Multimedia Nusantara University
                </Text>
                <Text color="black" fontSize={"0.75rem"}>-now</Text>
              </Flex>
              <Text color="black" fontSize={"0.8rem"} textAlign={"end"} mt={"2px"}>
                0km
              </Text>
            </Flex>
            <Flex my={3}>
              <Flex textAlign={"start"} direction={"column"} fontWeight={500}>
                <Text color="black" fontSize={"1rem"} fontWeight={600}>
                  Dompet
                </Text>
                <Text color="black" fontSize={"0.75rem"}>
                  Multimedia Nusantara University
                </Text>
                <Text color="black" fontSize={"0.75rem"}>-now</Text>
              </Flex>
              <Text color="black" fontSize={"0.8rem"} textAlign={"end"} mt={"2px"}>
                0km
              </Text>
            </Flex>
            <Flex my={3}>
              <Flex textAlign={"start"} direction={"column"} fontWeight={500}>
                <Text color="black" fontSize={"1rem"} fontWeight={600}>
                  Dompet
                </Text>
                <Text color="black" fontSize={"0.75rem"}>
                  Multimedia Nusantara University
                </Text>
                <Text color="black" fontSize={"0.75rem"}>-now</Text>
              </Flex>
              <Text color="black" fontSize={"0.8rem"} textAlign={"end"} mt={"2px"}>
                0km
              </Text>
            </Flex>
            <Flex my={3}>
              <Flex textAlign={"start"} direction={"column"} fontWeight={500}>
                <Text color="black" fontSize={"1rem"} fontWeight={600}>
                  Dompet
                </Text>
                <Text color="black" fontSize={"0.75rem"}>
                  Multimedia Nusantara University
                </Text>
                <Text color="black" fontSize={"0.75rem"}>-now</Text>
              </Flex>
              <Text color="black" fontSize={"0.8rem"} textAlign={"end"} mt={"2px"}>
                0km
              </Text>
            </Flex>
            <Flex my={3}>
              <Flex textAlign={"start"} direction={"column"} fontWeight={500}>
                <Text color="black" fontSize={"1rem"} fontWeight={600}>
                  Dompet
                </Text>
                <Text color="black" fontSize={"0.75rem"}>
                  Multimedia Nusantara University
                </Text>
                <Text color="black" fontSize={"0.75rem"}>-now</Text>
              </Flex>
              <Text color="black" fontSize={"0.8rem"} textAlign={"end"} mt={"2px"}>
                0km
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box id="map" w={"70%"} mx={"auto"} border={"1px solid grey"} borderRadius={"12px"}>
            <Image src={map_sample} h={"100%"} w={"100%"} objectFit={"cover"} borderRadius={"12px"}/>
        </Box>
      </Flex>
    </Box>
  );
};

export default Monitor;
