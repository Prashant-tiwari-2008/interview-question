// https://medium.com/@justin.sherman/react-coding-interview-challenge-2-bb8909e2b4a0
import React, { useState } from 'react'

const RobotList = () => {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])

  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, input])
    setInput('')
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", padding: 20 }}>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} placeholder={`enter name here`} onChange={(e) => setInput(e.target.value)} />
      </form>
      <h2>ROBOT LIST</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {list && list.map((ele, index) => {
          return (
            <React.Fragment key={index}>
              <img 
              onClick={() => setList(list.filter((robo) => robo != ele))}
              src={`https://robohash.org/${ele}`} 
              width={200} height={200}
              ></img>
              <p>{ele}</p>
            </React.Fragment>

          )
        })}
      </div>
    </div>
  )
}

export default RobotList;