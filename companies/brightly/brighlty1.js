const App = () => {
    const [count, setCount] = React.useState(0);
    const [timerId, setTimerId] = React.useState(0)

    const handleIncrement = () => {
        let id = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)
        setTimerId(id);
    }

    const handleDecrement = () => {
        clearInterval(timerId)
        let Did = setInterval(() => {
            setCount((prev) => prev - 1)
        }, 1000)
    }
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};