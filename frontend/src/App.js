import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Index from "./Pages";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <div className="App-header"> */}
          {/* <Test /> */}
        {/* </div> */}
        <Index/>
      </div>
    </ChakraProvider>
  );
}

export default App;
