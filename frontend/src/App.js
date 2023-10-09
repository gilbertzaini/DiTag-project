import "./App.css";
import Test from "./Components/Test";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      {/* <div className="App"> */}
        <div className="App-header">
          <Test />
        </div>
      {/* </div> */}
    </ChakraProvider>
  );
}

export default App;
