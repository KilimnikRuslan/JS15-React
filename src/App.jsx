import  { useState, useEffect } from 'react'
import './App.css'


const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [seconds]); 

  return (
    <div>
      <h2>Таймер</h2>
      <p>Час: {seconds} секунд</p>
    </div>
  );
};

export default Timer;



