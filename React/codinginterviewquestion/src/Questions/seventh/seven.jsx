import React, { useState, useRef, useEffect } from 'react'

const Seven = () => {
  const [input, setInput] = useState('')
  const [list, setList] = useState('')
  const [modelopen, setModelopen] = useState(false)
  const [modelText, setModelText] = useState('')
  const modelRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, input])
    setInput(" ");
  }

  const openModel = (text) => {
    setModelText(text)
    setModelopen(true)
  }

  useEffect(() => {    
    const clickedOutside = (e) => {
      if (modelRef && modelRef.current && !modelRef.current.contains(e.target)) {
        setModelopen(false)
      }
    }

    document.addEventListener("mousedown", clickedOutside);
    
  }, [modelopen])

  return (
    <>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 100 }}>

        <form onSubmit={submitHandler}>
          ADD LIST : <input type={`text`} value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
        {list && list.map((item) => {
          return (
            <p onClick={(e) => openModel(item)}>{item.length > 5 ? `${item.substring(0, 6)}...` : item}</p>
          )
        })}
      </div>
      {modelopen &&
        (
          <div ref={modelRef} style={{ position: "absolute", textAlign: "center", inset: 0, margin: "auto", width: 600, height: 600, border: "5px solid black", background: "black" }}>
            <p style={{ color: "white" }}>{`Full Text : ${modelText}`}</p>
          </div>
        )
      }
    </>
  )
}

export default Seven