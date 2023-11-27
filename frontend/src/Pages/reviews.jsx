import React, { useEffect } from "react";
import ReviewList from "../Components/ReviewList";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Features/authSlice";

const Reviews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <ReviewList />
    </>
  );
};

export default Reviews;
