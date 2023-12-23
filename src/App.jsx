import  { useRef, useState } from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colorRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    const colorValue = colorRef.current.value;
    setInputValue(colorValue);
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <ColorPicker colorRef={colorRef} />
      <button onClick={handleButtonClick}>Show Color Value</button>
      <p>Selected color: {inputValue}</p>
    </div>
  );
};

export default App;

