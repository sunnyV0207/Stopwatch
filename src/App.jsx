import { useState,useEffect,useRef, use } from 'react'
import './App.css'
import { stringify } from 'postcss';

function App() {

  const [time,setTime] = useState(0);
  const timeRef = useRef(null);

  function startTimer() {
    const startTime = Date.now() - time;
    timeRef.current = setInterval(()=>{
      setTime(Date.now() - startTime)
    },1000)
  }

  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  function formatTime(time) {
    // const getMiliSeconds = `0${(time % 1000)}`.slice(-2);
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${(seconds % 60)}`.slice(-2);
    const minutes = Math.floor(seconds/60);
    const getMinutes = `0${(minutes % 60)}`.slice(-2);
    const hours = Math.floor(minutes/60);
    const getHours = `0${(hours%60)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <div className='h-screen w-screen bg-gray-900 flex justify-center items-center p-8 sm:p-0'>
      <div className='w-full sm:w-[75%] md:w-1/2 bg-white rounded-xl flex flex-col items-center py-4 px-4 gap-8'>
        <h1 className='text-4xl font-bold'>Stopwatch</h1>
        <p className='text-2xl font-semibold'>{formatTime(time)}</p>
        <div className='btn-cont flex flex-row justify-between gap-8'>
          <button className='btn bg-blue-700 text-white text-md font-semibold px-6 py-1 rounded-md hover:bg-blue-800' onClick={startTimer}>Start</button>
          <button className='btn bg-blue-700 text-white text-md font-semibold px-6 py-1 rounded-md hover:bg-blue-800' onClick={stopTimer}>Stop</button>
          <button className='btn bg-blue-700 text-white text-md font-semibold px-6 py-1 rounded-md hover:bg-blue-800' onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  )
}


export default App
