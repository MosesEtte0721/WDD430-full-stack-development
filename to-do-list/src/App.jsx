import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { v4 as uuidv4 } from 'uuid';
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);

  function createTodo(text){
  return {
    id: uuidv4(),
    text: text,
    completed: false
  }
}

function handleChange(e){
  setText(e.target.value);
}

function handleClick(e){
  e.preventDefault();
  setTodo(oldTodos => [
    ...oldTodos, 

    createTodo(text)
  ]);

  setText('');
}

function displayList() {
  return todo.map(item => {
    return (
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.completed ?? false}
          onChange={() => handleCheckboxChange(item.id)}
        />
        {item.text}
        <span style={{ marginLeft: '10px' }}>{"\t"}</span> 
        <button onClick={() => handleDelete(item.id)}>
          Delete
        </button>

        

        <br />
      </li>
    );
  });

}

const displayConsole = useEffect(() => {
          console.log(todo);
        }, [todo]);

const handleDelete = (id) => {
  setTodo(oldTodos => oldTodos.filter(item => item.id !== id));
}
const handleCheckboxChange = (id) => {
  setTodo(oldTodos => oldTodos.map(item => {
    if (item.id === id) {
      return { ...item, completed: !item.completed };
    }
    return item;
  }));
}

  return (
    <>
      <form className="new-item-form">
        <div className="form-row" >
          <label htmlFor="item">New Item 
            <input type="text" id="item" value={text} onChange={handleChange}  checked={false} />
          </label>
          
        </div>
        <button className="btn" onClick={handleClick}> Add </button>
      </form>
      <h1 className="header"> To Do List </h1>
      <ul>
        {displayList()}
        {displayConsole}
      </ul>
    </>
  )
}

export default App
