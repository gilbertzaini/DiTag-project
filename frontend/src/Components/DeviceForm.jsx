import { Box, FormLabel, Input, Select, Image, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../form.css";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";

const DeviceForm = () => {
  const [users, setUsers] = useState([]);
  const [user_id, setUserId] = useState("");
  const [name, setName] = useState("");
  const [device_id, setDeviceId] = useState("");
  const navigate = useNavigate();

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
    console.log(
        "User Selected Value - ",
        e.target.value
    );
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDeviceIdChange = (e) => {
    setDeviceId(e.target.value);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8080/users");
    setUsers(response.data);
  };

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
        <Box my={5}>
          <Select name="user_id" value={user_id} onChange={handleUserIdChange}>
            <option value={""}>User</option>
            {users.map((user) => (
              <option value={user.user_id}>{user.name}</option>
            ))}
          </Select>
        </Box>
        <Box my={5}>
          {/* <FormLabel className="loginLabel">Device Name</FormLabel> */}
          <Input
            name="name"
            placeholder="Device Name"
            value={name}
            onChange={handleNameChange}
          />
        </Box>
        <Box my={5}>
          {/* <FormLabel className="loginLabel">Serial Number</FormLabel> */}
          <Input
            name="device_id"
            placeholder="Serial Number"
            value={device_id}
            onChange={handleDeviceIdChange}
          />
        </Box>

        <Button type="submit">Add</Button>
      </form>
    </Box>
  );
};

export default DeviceForm;
