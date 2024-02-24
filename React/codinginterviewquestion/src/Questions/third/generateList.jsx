import React, { useState, useEffect } from 'react'
import ExpandList from './expandList'

const url = "https://www.boredapi.com/api/activity"

const Third = () => {
    const [activity, setActivity] = useState([])
    const [disableButton, setDisableButton] = useState(false);

    const getActivity = async () => {
        setDisableButton(true);
        try {
            const res = await fetch(url)
            const response = await res.json();
            setActivity([...activity, response])
        } catch (err) {
            setDisableButton(false);
        }
        setDisableButton(false);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={getActivity} disabled={disableButton}>GetActivity</button>
            <ul>
                {activity.length > 1 ? activity.map((ele, index) => {
                    return (
                        <React.Fragment key={index}>
                            <ExpandList ele={ele} />
                        </React.Fragment>
                    )
                }) : <h2>No acitvity found please click button to generate one</h2>}
            </ul>

        </div>
    )
}

export default Third