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
        { "Finish science homework": true },
        { "Finish Reactjs homework": false },
    ],
    "Achieve nirvana": [
        { "Meditate a little": false },
        { "Gain some wisdom": false },
    ],
};

const Checklist = () => {
    const [list, setList] = useState(INITIAL_LIST)

    const clickTask = (topTask, index, taskText) => {
        debugger
        const newList = { ...INITIAL_LIST };
        newList[topTask][index][taskText] = !newList[topTask][index][taskText];
        setList(newList)
    }

    return (
        <div
            style={{
                diplay: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 40,
            }}
        >
            {list && Object.entries(list).map(([topTask, subTask], index) => {
                return (
                    <React.Fragment key={index}>
                        <h2 style={{ textAlign: 'center' }}>{topTask}</h2>
                        <div style={{ display: "flex" }}>
                            <DisplaySubTasks topTask={topTask} subTask={subTask} clickTask={clickTask} />
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Checklist