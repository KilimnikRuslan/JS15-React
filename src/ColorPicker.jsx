import React from 'react';

const ColorPicker = ({ colorRef }) => {
  return (
    <div>
      <label htmlFor="colorInput">Choose a color:</label>
      <input id="colorInput" ref={colorRef} type="color" />
    </div>
  );
};

export default ColorPicker;
