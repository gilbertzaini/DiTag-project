import { createContext, useContext } from 'react';

const SocketContext = createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export default SocketContext;