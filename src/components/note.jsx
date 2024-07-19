import React from 'react'
import { useState, useEffect } from 'react'
// import '../index.css'


export default function Note() {
    const [task, setTask] = useState('');
    let [todos, setTodo] = useState([]);
    const addTodo = (e) => {
      if (task.trim() !== '') {
          let updatedTodo = [...todos, task];
          setTodo([...todos, task]);
          localStorage.setItem('todos', JSON.stringify(updatedTodo));
          setTask('');
      }
    }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodo(storedTodos);
    }
  }, []);

  const resetTodo = () => {
    // localStorage.clear();
    localStorage.removeItem('todos');
    setTodo([]);
  }

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  return (
    <>
    <div className='mt-48 box-border text-center'>
       <h1 className='font-serif text-5xl'>Note Taking App</h1>
       <div className='mt-10'>
          <input value={task} onChange={ (e) => {setTask(e.target.value)}} className='border text-black font-medium w-56 h-8 p-2 ml-2 mr-2 rounded'  placeholder='Enter text here' />
          <button className='bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 m-2 rounded' onClick={addTodo}>Add</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 m-2 rounded' onClick={resetTodo}>Reset</button>
       </div>
      <div className='mt-12'>
          {
            todos.map((todo,index)=>(
              <li key={index}>
                {todo}
              </li>
            ))
          }
          
      </div>
         
      </div>
    </>
    
  )
}
