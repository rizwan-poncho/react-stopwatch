import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }),
    [running];

  return (
    <>
      <section>
        <h1 className="text-center font-bold text-4xl py-10">STOPWATCH</h1>
        <div className="flex justify-center py-10">
          <span className="text-6xl">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </span>
          <span className="text-6xl">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
          </span>
          <span className="text-6xl">
            {"0" + Math.floor((time / 10) % 100)}
          </span>
        </div>
        <div className="flex justify-center gap-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setRunning(true)}
          >
            Start
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setRunning(false)}
          >
            Stop
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setTime(0)}
          >
            Reset
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
