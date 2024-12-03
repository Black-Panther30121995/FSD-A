import React from 'react';
import './CounterApp.css';
import { useState } from 'react';

const CounterApp = () => {
    const[count,setCount] =useState(0);
  return (
      
    <div className='count-app'>
      <div className='counter'>
      <h1 className='heading'>Counter App</h1>
      <div className='count'>{count}</div>
      <div className='count-body'>
          <button className='Inc' onClick={()=>setCount(count+1)}>
            Increment
          </button>
          <button className='Dec' onClick={()=>setCount(count-1)}>
            Decrement
          </button>
          <button className="Res" onClick={()=>setCount(0)}>
            Reset
          </button>
      </div>
      </div>

    </div>
  )
}

export default CounterApp
