import { Box, FormLabel, Input, Select, Image, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../form.css";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DeviceForm = () => {
  const [user_id, setUserId] = useState("");
  const [name, setName] = useState("");
  const [device_id, setDeviceId] = useState("");
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    if(user){
      setUserId(user.user_id);
    }
  }, [user]);

  const registerDevice = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/device/register", {
        user_id,
        name,
        device_id,
      });
      navigate("/device/monitor");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Box mt={"15rem"} id="deviceRegisterForm">
      <Image src={logo} h={"7rem"} mx={"auto"} />
      <form onSubmit={registerDevice}>
        {/* <Box my={5}>
          <Select name="user_id" value={user.user_id}>
            <option value={""}>User</option>
            {users.map((user) => (
              <option value={user.user_id}>{user.name}</option>
            ))}
          </Select>
        </Box> */}
        <Box my={5} display={"none"}>
          <Input
            name="user_id"
            value={user ? user.name : ""}
            readOnly
          />
        </Box>
        <Box my={5}>
          {/* <FormLabel className="loginLabel">Device Name</FormLabel> */}
          <Input
            name="name"
            placeholder="Device Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box my={5}>
          {/* <FormLabel className="loginLabel">Serial Number</FormLabel> */}
          <Input
            name="device_id"
            placeholder="Serial Number"
            value={device_id}
            onChange={(e) => setDeviceId(e.target.value)}
          />
        </Box>

        <Button type="submit">Add</Button>
      </form>
    </Box>
  );
};

export default DeviceForm;
