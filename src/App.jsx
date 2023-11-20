import  { useState } from 'react'
import './App.css'


const ButtonComponent = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleButtonClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {isTextVisible ? 'Сховати текст' : 'Показати текст'}
      </button>
      {isTextVisible && (
        <div className="animated-text">
          <q>Ти не знаєш, доки не спробуєш</q>
        </div>
      )}
    </div>
  );
};

export default ButtonComponent;



