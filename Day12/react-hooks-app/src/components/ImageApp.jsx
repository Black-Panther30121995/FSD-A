import React from "react";
import { useState } from "react";
import "./ImageApp.css";

const ImageApp = () => {
  const [heightx, setHeightx] = useState(100);
  const [width, setWidth] = useState(100);
  const [rotation, setRotation] = useState(0);

  return (
    <div className="disp">
      <div className="img">
        <img
          src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
          style={{
            width: `${width}px`,
            height: `${heightx}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </div>
      <div className="Panel">
        <button
          className="Inc"
          onClick={() => {
            setWidth(width + 10);
          }}
        >
          Increase Width
        </button>
        <button
          className="Dec"
          onClick={() => {
            setWidth(width - 10);
          }}
        >
          Decrease width
        </button>
        <button
          className="Inc"
          onClick={() => {
            setHeightx(heightx + 10);
          }}
        >
          Increse Height
        </button>
        <button
          className="Dec"
          onClick={() => {
            setHeightx(heightx - 10);
          }}
        >
          Decrease Height
        </button>
        <button
          className="Inc"
          onClick={() => {
            setRotation(rotation + 10);
          }}
        >
          Rotate Clockwise
        </button>
        <button
          className="Dec"
          onClick={() => {
            setRotation(rotation - 10);
          }}
        >
          Rotate Anti-Clockwise
        </button>
      </div>
    </div>
  );
};
export default ImageApp;
