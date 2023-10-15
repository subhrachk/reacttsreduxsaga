import React, { useState } from 'react'
import { useAppDispath, useAppSelector } from '../../hook';
import { SelectCounter, decrementCounter, incrementCounter } from '../Shared/Store/Counter/CounterSlice';
import { Button } from '@mui/material';

export const Counter = () => {
  const dispatch = useAppDispath();

  const count$ = useAppSelector(SelectCounter);
  return (
    <div>
        <h2>Counter value is : {count$.count}</h2>
        <Button onClick={()=>dispatch(decrementCounter(1))} color="error" variant="contained">Decrement</Button>
        <Button onClick={()=>dispatch(incrementCounter(1))} color="success" variant="contained">Increment</Button>
    </div>
  )
}
