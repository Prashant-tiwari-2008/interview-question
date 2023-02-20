// https://medium.com/@justin.sherman/react-coding-interview-challenge-5-57c30b25fbb3
import React, { useContext, useEffect, useState } from 'react'
import Userlist from './userList';

export const UsersContext = React.createContext()
const Fivth = () => {
  const [userState, setUserState] = useState({
    Bob: true,
    Gary: true,
    Jessica: true,
    Sam: true,
    Eric: true,
  });
  return (
    <UsersContext.Provider value={{ userState, setUserState }}>
      <Userlist />
    </UsersContext.Provider>
  ) 
}

export default Fivth