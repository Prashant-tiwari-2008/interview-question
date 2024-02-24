import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState();

  const handleTimer = () => {
    let id = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    setTimer(id);
  };

  const StopTimer = () => {
    if (timer) {
      clearInterval(timer);
    }
  };

  return (
    <div className="App">
      <button onClick={handleTimer}>Play</button>
      <button onClick={StopTimer}>Pause</button>
      <p>{counter}</p>
    </div>
  );
}
