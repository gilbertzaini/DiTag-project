import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Index from "./Pages";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <div className="App-header"> */}
          {/* <Test /> */}
        {/* </div> */}
        {/* <Index/> */}
        <LoginPage/>
      </div>
    </ChakraProvider>
  );
}

export default App;
