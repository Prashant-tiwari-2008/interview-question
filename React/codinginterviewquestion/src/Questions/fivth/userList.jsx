import React, { useContext, useEffect } from 'react'
import { UsersContext } from './fivth';

const Userlist = () => {
    const { userState, setUserState } = useContext(UsersContext);

    const ChanngeRandomUser = () => {
        const keyArray = Object.keys(userState);
        const randomNum = Math.floor(Math.random() * keyArray.length)
        const newUser = Object.assign({}, userState);
        newUser[keyArray[randomNum]] = !userState[keyArray[randomNum]];
        setUserState(newUser);
    }

    useEffect(() => {
        const interval = setInterval(ChanngeRandomUser, 1000);
        return () => clearInterval(interval);
    }, [userState])

    return (
        <div style={{ textAlign: "center" }}>
            {Object.keys(userState).map(key => (
                <p key={key}>{`${key} : ${userState[key] ? "🟢" : "🔴"}`}</p>
            ))}
        </div>
    )
}

export default Userlist