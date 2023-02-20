import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0)
    const [inctimer, setInctimer] = useState()
    const [dectimer, setDectimer] = useState()

    const Increment = () => {
        clearInterval(dectimer)
        let Itimer = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)
        setInctimer(Itimer)
    }

    const Decrement = () => {
        clearInterval(inctimer)
        let Dtimer = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000)
        setDectimer(Dtimer)
    }

    useEffect(() =>{
        return(() =>{
            clearInterval(dectimer)
            clearInterval(inctimer)
        })
    },[])

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default Timer