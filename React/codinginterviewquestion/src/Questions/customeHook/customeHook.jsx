import React from 'react'
import useFetch from './useFetch'

const url = "https://jsonplaceholder.typicode.com/todos"

const CustomeHook = () => {
    const { loading, data, error } = useFetch(url)

    return (
        <div>
                {loading ? <h1>Loading</h1> : data ? data?.map((task) => {
                    return (
                        <>
                            <p>{task.userId}</p>
                            <p>{task.id}</p>
                            <p>{task.title}</p>
                            <p>{task.completed ? "Completed" : "Incomplete"}</p>
                        </>
                    )
                }) : <h1>{error}</h1>}
        </div>
    )
}

export default CustomeHook