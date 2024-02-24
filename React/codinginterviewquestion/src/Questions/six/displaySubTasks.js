import React from 'react'

const DisplaySubTasks = ({ topTask, subTask, clickTask }) => {

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", paddingRight: 50, width: 250 }}>
                <h3>Not yet Completed</h3>
                {subTask && subTask.map((task, index) => {
                    debugger
                    const taskText = Object.keys(task)[0];
                    console.log(subTask)
                    console.log(subTask[0])
                    console.log(subTask[taskText])
                    if (!task[taskText]) {
                        return (
                            <p key={index} onClick={() => clickTask(topTask, index, taskText)}>{taskText}</p>
                        )
                    }
                })}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>Completed</h3>
                {subTask && subTask.map((task, index) => {
                    const taskText = Object.keys(task);
                    if (task[taskText]) {
                        return (
                            <p key={index} onClick={() => clickTask(topTask, index, taskText)}>{taskText}</p>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default DisplaySubTasks