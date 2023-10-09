import './App.css';
import Test from './Components/Test';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'




function App() {
  return(
    <div className="App">
      <header className="App-header">
      <Test />
      </header>
    </div>
  )
}

export default App;
