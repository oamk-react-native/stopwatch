import React, { useState,useEffect, useRef } from 'react'
import Toggle from './Toggle';
import { Text } from 'react-native';

export default function Clock() {
  const timerRef = useRef();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
  start();
    return () => {
      stop();
    }
  }, [])

  function start() {
    const id = setInterval(() => {
      setTime(new Date());
    },1000);
    timerRef.current = id;
  }

  function stop() {
    clearInterval(timerRef.current);
  }

  return (
    <>
      <Text>{time.toLocaleTimeString()}</Text>
      <Toggle start={start} stop={stop}/>
    </>
  )
}
