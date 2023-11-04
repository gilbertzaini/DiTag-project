import React from "react";
import DeviceForm from "../Components/DeviceForm";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Features/authSlice";

const RegisterDevice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  return (
    <>
      <Navbar />
      <DeviceForm />
    </>
  );
};

export default RegisterDevice;
