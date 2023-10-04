import './App.css';
import Test from './Components/Test';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Test />
    </ChakraProvider>
  )
}

export default App;
