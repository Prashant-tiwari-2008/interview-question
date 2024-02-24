import React, { useState } from 'react'

const ExpandList = ({ ele }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <li>
            <div style={{ display: "flex" }}>
                <p>{ele.activity}</p>
                <button style={{ margin: "20px" }} onClick={() => setExpanded(!expanded)}>{expanded ? "Expend" : "Collapse"}</button>
            </div>

            {expanded && (
                <div style={{ paddingLeft: 20 }}>
                    <ul>
                        {Object.keys(ele).filter((key) => key != "activity").map((key) => (
                            <li>{`${key}:${ele[key]}`}</li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    )
}

export default ExpandList