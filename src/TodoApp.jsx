import React from 'react'
import Note from './components/note'
// import './App.css'

export default function TodoApp() {
  document.querySelector('body').style.backgroundColor = 'black';
  return (
    <div className='text-white'>
      <Note />
    </div>
  )
}
