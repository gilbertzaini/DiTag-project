import React, {useEffect} from "react";
import NotificationList from "../Components/NotificationList";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Features/authSlice";

const Notifications = () => {
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
      <NotificationList />
    </>
  );
};

export default Notifications;
