import React, { useEffect, useState } from 'react'

const Demo = () => {
    const [todo, setTodo] = useState([])
    const [todoChecker, setTodoChecker] = useState(0)
    const [todoCheckerOne, setTodoCheckerOne] = useState(0)

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const response = await res.json();
        setTodo(response);
    }

    useEffect(() => {
        getData();
    }, []);

    const renderTodos = React.useMemo(() => {
        { setTodoCheckerOne(prev => prev + 1) }
        return (
            <>
                {todoCheckerOne}
                {todo.map(ele => {
                    return (
                        <>
                            <p>{ele.id}</p>
                            <p>{ele.title}</p>
                        </>
                    )
                })
                }
            </>
        )
    }, [todo]);

    return (
        <div>
            <button onClick={(e) => setTodoChecker(prev => prev + 1)}>Increase Todo {todoChecker}</button>
            {renderTodos}
        </div>
    )
}

export default Demo