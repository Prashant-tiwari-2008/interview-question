import React, { useState } from "react";

const Timer = () => {
  const [mint, setMint] = useState(0);
  const [sec, setSec] = useState(0);
  const [msec, setMSec] = useState(0);
  const [timerId, setTimerId] = useState();

  const startTimer = () => {
    let timerId = setInterval(() => {
      timerControler();
    }, 100);
    setTimerId(timerId);
  };

  const timerControler = () => {
    if (msec > 0) {
      setMSec((prev) => prev - 1);
    } else if (msec === 0 && sec > 0) {
      setSec(sec - 1);
      setMSec(59);
    } else if (msec == 0 && sec == 0 && mint > 0) {
      setMint(mint - 1);
      setMSec(59);
      setSec(59);
    }
  };

  const stopTimer = () => {
    clearInterval(timerId);
  };

  const resetTimer = () => {
    clearInterval(timerId);
    setMint(0);
    setSec(0);
    setMSec(0);
  };

  return (
    <>
      <input type="number" onChange={(e) => setMint(e.target.value)} />
      <br />
      <p>Mint : {mint}</p>
      <p>sec : {sec}</p>
      <p>msec : {msec}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};

export default Timer;
