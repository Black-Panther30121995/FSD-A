import React, { useState } from 'react';
import "./App.css";
const ImageEditor = () => {
    const [heightx,setHeightx]=useState(50);
    const [width,setWidth]=useState(50);
  return (
    <div>
      <img  src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" style={{width:`${width}px`,height:`${heightx}px`}} />
      <div className='Increase'><button className='Inc' onClick={()=>{
        setWidth(width+10)
      }}>Increase Width</button>
        <button className='Dec' onClick={()=>{setWidth(width-10)}}>Decrease width</button>
        <button className='Inc' onClick={()=>{setHeightx(heightx+10)}}>Increse Height</button>
        <button className='Dec'onClick={()=>{setHeightx(heightx-10)}}>Decrease Height</button>
      </div>
    </div>
  )
}

export default ImageEditor
