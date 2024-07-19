import React, { useState, useEffect } from 'react';
import MyCalendar from './MyCalender.jsx' // Import the calendar component
import Modal from './Modal'; // Import the modal component
import './HomePage.css'; // Import the styles for the HomePage

const TaskManagerHome = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'React', defaultTime: 4, spentHours: 0, completed: false },
    { id: 2, title: 'Java', defaultTime: 2, spentHours: 0, completed: false },
    { id: 3, title: 'Exercise', defaultTime: 0.5, spentHours: 0, completed: false },
    { id: 4, title: 'Meditation', defaultTime: 0.25, spentHours: 0, completed: false },
    { id: 5, title: 'Spoken English Practice', defaultTime: 1, spentHours: 0, completed: false },
  ]);
  const [specialTasks, setSpecialTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Fetch special tasks from the calendar for the current month
  useEffect(() => {
    // Replace with actual data fetching logic
    const fetchedSpecialTasks = [
      { id: 6, title: 'Project Deadline', date: new Date(2024, 6, 11) },
      { id: 7, title: 'Team Meeting', date: new Date(2024, 6, 20) },
    ];
    setSpecialTasks(fetchedSpecialTasks);
  }, []);

  // Mark a task as completed or not completed
  const handleTaskCompletion = (taskId, isCompleted) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: isCompleted } : task
      )
    );
    setShowModal(false);
  };

  // Handle updating the spent hours for a task
  const handleSpentHoursChange = (taskId, hours) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, spentHours: hours } : task
      )
    );
  };

  // Show modal to confirm task completion
  const handleShowModal = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  // Render special tasks for the current day
  const today = new Date();
  const todaySpecialTasks = specialTasks.filter(
    (task) => task.date.toDateString() === today.toDateString()
  );

  return (
    <>
    <div className="homepage-container">
      <h2>Daily Routine</h2>
      <ul className="task-list">
        {todaySpecialTasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.title}</span>
            <button onClick={() => handleShowModal(task)}>Mark as Completed</button>
          </li>
        ))}
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.title}</span>
            <input
              type="number"
              value={task.spentHours}
              onChange={(e) => handleSpentHoursChange(task.id, parseFloat(e.target.value))}
              placeholder={`Default: ${task.defaultTime} hrs`}
            />
            <button onClick={() => handleShowModal(task)}>Mark as Completed</button>
          </li>
        ))}
      </ul>
      <h2>Special Tasks for the Month</h2>
      <ul className="special-task-list">
        {specialTasks.map((task) => (
          <li key={task.id} className="special-task-item">
            {task.title} - {task.date.toDateString()}
          </li>
        ))}
      </ul>
      <a href='/calendar'>Calendar</a>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={(isCompleted) => handleTaskCompletion(selectedTask.id, isCompleted)}
        title={`Mark task "${selectedTask?.title}" as completed?`}
      />
    </div>
    </>
  );
};

export default TaskManagerHome;
