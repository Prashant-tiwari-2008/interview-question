import React from 'react'

const DisplaySubTasks = ({ topTask, subTask }) => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", paddingRight: 50, width: 250 }}>
                <h3>Not yet Completed</h3>

            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>Completed</h3>
            </div>
        </>
    )
}

export default DisplaySubTasks