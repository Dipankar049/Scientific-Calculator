import React from 'react'
import MyCalendar from './MyCalender.jsx'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

export default function TaskManager() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/calendar" element={<MyCalendar />} />
        {/* <Route path="users/*" element={<Users />} /> */}
        
      </Routes>
    </BrowserRouter>
    <div>
        hii
    </div>
    <a href='/calendar'>Calendar</a>
    </>
    
  )
}
