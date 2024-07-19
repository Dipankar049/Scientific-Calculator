import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from './Modal'; // Import the modal component
import { Link } from 'react-router-dom';
import { useSpecialTasks } from './SpecialTasksContext';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  // const [events, setEvents] = useState([
  //   {
  //     id: 1,
  //     title: 'Meeting',
  //     start: new Date(2024, 6, 10, 10, 0),
  //     end: new Date(2024, 6, 10, 12, 0),
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'Presentation',
  //     start: new Date(2024, 6, 12, 14, 0),
  //     end: new Date(2024, 6, 12, 16, 0),
  //     completed: false,
  //   },
  // ]);
  const { specialTasks, setSpecialTasks } = useSpecialTasks();

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleConfirmCompletion = (isCompleted) => {
    setEvents((prevEvents) =>
      prevEvents.map((evt) =>
        evt.id === selectedEvent.id ? { ...evt, completed: isCompleted } : evt
      )
    );
    setSelectedEvent(null);
  };

  const handleSelectSlot = (slotInfo) => {
    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        id: events.length + 1,
        title,
        start: slotInfo.start,
        end: slotInfo.end,
        completed: false,
      };
      // setEvents((prevEvents) => [...prevEvents, newEvent]);
      const updatedTasks = [...specialTasks, newEvent];
      setSpecialTasks(updatedTasks);
      localStorage.setItem('specialTasks', JSON.stringify(updatedTasks));
    }
  };

  const CustomEventComponent = ({ event }) => (
    <span style={{ textDecoration: event.completed ? 'line-through' : 'none', color: event.completed ? 'gray' : 'black' }}>
      {event.title}
    </span>
  );

  return (
    <div>
      <h2>My Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleEventClick}
        selectable
        onSelectSlot={handleSelectSlot}
        components={{
          event: CustomEventComponent,
        }}
      />
      <Link to="/">Homepage</Link>
      <Modal
        show={!!selectedEvent}
        onClose={handleCloseModal}
        onConfirm={handleConfirmCompletion}
        title={`Mark task "${selectedEvent?.title}" as completed?`}
      />
    </div>
  );
};

export default MyCalendar;
