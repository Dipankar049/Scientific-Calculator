// MyCalendar.jsx
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSpecialTasks } from './SpecialTasksContext';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const { specialTasks, setSpecialTasks } = useSpecialTasks();

  const handleSelectSlot = (slotInfo) => {
    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        id: specialTasks.length + 1,
        title,
        start: slotInfo.start,
        end: slotInfo.end,
        date: slotInfo.start,
      };
      setSpecialTasks((prevEvents) => [...prevEvents, newEvent]);
    }
  };

  return (
    <div>
      <h2>My Calendar</h2>
      <Calendar
        localizer={localizer}
        events={specialTasks}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default MyCalendar;
