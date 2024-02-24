import React from 'react'

const DisplayNested = ({ user }) => {
    return (
        <>
            {Object.entries(user).map(([key, value]) => {
                if (typeof value === 'object') {
                    return (
                        <>
                            <p>{`${key} : `}</p>
                            <div style={{ paddingLeft: 50 }}>
                                <DisplayNested user={value} />
                            </div>
                        </>
                    )
                } else{
                    return <p>{`${key} : ${value}`}</p>
                }
            })}
        </>
    )
}

export default DisplayNested