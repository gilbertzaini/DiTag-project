import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages";
import Login from "./Pages/login";
import Register from "./Pages/register";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* <div className="App-header"> */}
            {/* <Test /> */}
            {/* </div> */}
            <Route index element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
