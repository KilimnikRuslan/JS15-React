import  { useState } from 'react'
import './App.css'

const TodoList = () => {
    const [task, setTask] = useState(''); 
    const [tasksList, setTasksList] = useState([]);
  
    const handleInputChange = (event) => {
      setTask(event.target.value); 
    };
  
    const handleAddTask = () => {
      if (task.trim() !== '') {
        setTasksList([...tasksList, task]); 
        setTask(''); 
      }
    };
  
    return (
      <div>
        <h2>Список завданнь</h2>
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