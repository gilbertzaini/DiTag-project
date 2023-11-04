import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages";
import Login from "./Pages/login";
import Register from "./Pages/register";
import RegisterDevice from "./Pages/registerDevice";
import Monitoring from "./Pages/monitoring";
import Reviews from "./Pages/reviews";
import LoginTest from "./Components/LoginTest";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route index element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/device/register" element={<RegisterDevice />} />
            <Route path="/device/monitor" element={<Monitoring />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/logintest" element={<LoginTest />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
