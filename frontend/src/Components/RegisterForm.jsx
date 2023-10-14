// LoginForm.js
import { Text, Flex, Box, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import "../form.css";
import logo from "../Assets/logo.png";
import axios from "axios";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleLogin = () => {
  //   // You can add authentication logic here
  //   console.log("Name:", name);
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // };

  const saveUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/register", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (exception) {
      console.log(exception);
    }
  };
  return (
    <>
      <Flex minH={"100vh"} w={"100vw"} bg={"#f3dadf"} overflow={"hidden"}>
        <Box w={"40vw"} h={"100vh"} position={"relative"}>
          <Box position={"absolute"} zIndex={1} top={20} left={10}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="526"
              height="661"
              viewBox="0 0 526 661"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M247.031 4.45225C311.888 13.4938 365.692 60.4527 413.925 117.438C465.431 178.291 524.477 243.638 525.969 334.006C527.477 425.385 473.786 499.204 421.23 560.054C372.224 616.793 312.485 649.937 247.031 656.962C174.47 664.749 92.5661 668.06 41.4209 600.816C-9.56762 533.778 1.65127 428.197 1.39477 334.006C1.13686 239.295 -10.7804 133.383 39.9626 65.3046C91.111 -3.31772 173.881 -5.74547 247.031 4.45225Z"
                fill="#95F8ED"
              />
            </svg>
          </Box>

          <Box position={"absolute"} zIndex={2} top={10} left={"30%"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="530"
              height="607"
              viewBox="0 0 530 607"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M243.061 4.70985C344.08 -11.5616 469.016 13.1371 518.064 97.4432C564.291 176.902 462.842 257.032 441.159 345.214C419.587 432.942 480.924 558.045 394.922 598.235C309.015 638.381 231.579 530.416 151.752 480.458C93.4621 443.979 22.1083 417.422 4.45926 353.873C-13.6655 288.611 26.8082 227.115 65.6198 170.319C112.978 101.017 156.485 18.6548 243.061 4.70985Z"
                fill="#01C1AC"
              />
            </svg>
          </Box>
          <Box pos={"absolute"} zIndex={3} bottom={0}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="550"
              height="469"
              viewBox="0 0 550 469"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M299.963 0.108262C343.049 -1.30402 384.815 11.1816 421.197 32.844C459.469 55.6319 489.605 87.2747 510.043 125.192C533.503 168.718 560.633 217.191 545.742 263.911C530.771 310.879 473.499 329.836 434.422 362.443C389.486 399.939 360.144 468.416 299.963 468.997C239.858 469.576 213.227 396.651 163.477 365.057C111.055 331.766 17.1311 337.391 2.01656 279.786C-13.4351 220.896 63.789 178.035 101.465 128.716C126.448 96.014 149.433 63.4714 184.742 40.5946C219.324 18.189 257.939 1.48575 299.963 0.108262Z"
                fill="#00E5CC"
              />
            </svg>
          </Box>

          <Image
            src={logo}
            w={"50%"}
            zIndex={4}
            pos={"absolute"}
            left={"50%"}
            top={"50%"}
            transform={"translate(-50%, -50%)"}
          />
        </Box>
        <Flex
          bg={"#FCFEFF"}
          width={"60%"}
          height={"100vh"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          id="loginInput"
          textAlign={"start"}
          className="login-container"
          zIndex={5}
          pos={"relative"}
        >
          <ReactLink to={"/"}>
            <Text pos={"absolute"} top={5} left={5} color={"black"}>
              {"< Back"}
            </Text>
          </ReactLink>
          <Heading
            textAlign={"center"}
            fontSize={"1.7rem"}
            color={"black"}
            fontWeight={500}
          >
            Create your Account
          </Heading>
          <form onSubmit={saveUser}>
            <div className="input-container">
              <Text className="loginLabel">Full Name</Text>
              <input
                type="text"
                placeholder="Enter your Full Name here"
                value={name}
                name="name"
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="input-container">
              <Text className="loginLabel">Email</Text>
              <input
                type="text"
                placeholder="Enter your Email here"
                value={email}
                name="email"
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-container">
              <Text className="loginLabel">Password</Text>
              <input
                type="password"
                placeholder="Enter your Password here"
                value={password}
                name="password"
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Create Account
            </button>
          </form>
          <Flex
            mt={2}
            w={"60%"}
            fontSize={"1.2rem"}
            justifyContent={"start"}
            alignItems={"center"}
          >
            <Text>Already have an account?</Text>
            <ReactLink to="/login" ml={1}>
              <Text color={"lightblue"}>Log In</Text>
            </ReactLink>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default RegisterForm;
