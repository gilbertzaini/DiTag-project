import React, { useEffect, useState } from "react";
import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useSocket } from "../Features/SocketContext";

const ReviewModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState("");
  const [user_id, setUserId] = useState("");
  const [rate, setRate] = useState();
  const [canReview, setCanReview] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const socket = useSocket();

  const handleChange = (value) => setRate(value)

  const getReview = async () => {
    const response = await axios.get("http://localhost:8080/review");
    const votedUsers = response.data;
    for (let i = 0; i < votedUsers.length; i++) {
      if (user.user_id === votedUsers[i].user_id) {
        // console.log(`found ${votedUsers[i]} at index ${i}`);
        setCanReview(false);
        return;
      }
    }
  };

  useEffect(() => {
    try {
      getReview();
      setUserId(user.user_id);
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  const postReview = async (e) => {
    e.preventDefault();

    try {
      socket.emit("addReview", "a new review is added");

      await axios.post("http://localhost:8080/review", {
        user_id,
        message,
        rate,
      });
      onClose();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {canReview && (
        <Button
          bg={"#060640"}
          color={"white"}
          fontWeight={"normal"}
          onClick={onOpen}
        >
          Add Review
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={postReview}>
          <ModalOverlay />
          <ModalContent pos={"absolute"}>
            <ModalHeader>Add Your Review</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Review</FormLabel>
                <Textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  minH={"25vh"}
                  maxH={"55vh"}
                  resize={"vertical"}
                />
              </FormControl>
              {/* <FormControl>
                <FormLabel>Rate</FormLabel>
                <Input
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  type="number"
                  min={1}
                  max={5}
                />
              </FormControl> */}
              <Flex>
                <NumberInput
                  maxW="100px"
                  mr="2rem"
                  value={rate}
                  onChange={handleChange}
                  max={5}
                  min={1}
                  step={0.1}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Slider
                  flex="1"
                  focusThumbOnChange={false}
                  value={rate}
                  onChange={handleChange}
                  max={5}
                  min={1}
                  step={0.1}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb fontSize="sm" boxSize="32px" children={rate} />
                </Slider>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" type="submit" mr={3}>
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default ReviewModal;
