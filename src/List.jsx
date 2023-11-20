import  { useState } from 'react'
import './App.css'

const TodoList = () => {
    const [task, setTask] = useState(''); // Стан для збереження введеного значення
    const [tasksList, setTasksList] = useState([]); // Стан для збереження списку завдань
  
    const handleInputChange = (event) => {
      setTask(event.target.value); // Оновлення значення введеного завдання
    };
  
    const handleAddTask = () => {
      if (task.trim() !== '') {
        setTasksList([...tasksList, task]); // Додавання нового завдання до списку
        setTask(''); // Очистка поля введення після додавання
      }
    };
  
    return (
      <div>
        <h2>Список завдань</h2>
        <input type="text" value={task} onChange={handleInputChange} />
        <button onClick={handleAddTask}>Додати завдання</button>
        <ul>
          {tasksList.map((taskItem, index) => (
            <li key={index}>{taskItem}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default TodoList;