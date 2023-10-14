import React, { useState } from 'react';

function ColorPicker() {
  // Define an array of colors
  const colors = ['red', 'green', 'blue', 'purple'];

  // State to track the selected color
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <div>
        <h2>Choose a Color:</h2>
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                display: 'inline-block',
                marginRight: '10px',
                cursor: 'pointer',
                border: color === selectedColor ? '2px solid black' : 'none',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      </div>
      <div>
        {selectedColor && (
          <p>
            You selected the color: <span style={{ color: selectedColor }}>{selectedColor}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default ColorPicker;
