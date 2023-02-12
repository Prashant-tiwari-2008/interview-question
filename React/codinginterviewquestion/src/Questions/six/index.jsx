import React, { useState } from 'react'
import DisplaySubTasks from './displaySubTasks.js'

const INITIAL_LIST = {
    "Organize closet": [
        { "Donate old clothes and shoes": false },
        { "Buy new shelf": false },
        { "Put in shelf by color": false },
    ],
    "Finish homework": [
        { "Finish math homework": false },
        { "Finish science homework": false },
        { "Finish Reactjs homework": false },
    ],
    "Achieve nirvana": [
        { "Meditate a little": false },
        { "Gain some wisdom": false },
    ],
};

const Checklist = () => {
    const [list, setList] = useState(INITIAL_LIST)
    return (
        <div
            style={{
                diplay: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 40,
            }}
        >
            {list && Object.entries(list).map(([topTask, subTask]) => {
                return (
                    <>
                        <h2 style={{ textAlign: 'center' }}>{topTask}</h2>
                        <div style={{display:"flex"}}>
                            <DisplaySubTasks topTask={topTask} subTask={subTask} />
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Checklist