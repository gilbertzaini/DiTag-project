import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar'
import HomePage from '../Components/HomePage'
import About from '../Components/About'
import { useDispatch } from "react-redux";
import { getMe } from "../Features/authSlice";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <>
        <Navbar/>
        <HomePage/>
        <About/>
    </>
  )
}

export default Index