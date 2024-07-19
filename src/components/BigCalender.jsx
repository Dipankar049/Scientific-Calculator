import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const BasicCalendar = () => {
  const events = [
    {
      id: 1,
      title: 'Meeting',
      start: new Date(2024, 6, 10, 10, 0), // year, month (0-indexed), day, hour, minute
      end: new Date(2024, 6, 10, 12, 0),
    },
    {
      id: 2,
      title: 'Presentation',
      start: new Date(2024, 6, 12, 14, 0),
      end: new Date(2024, 6, 12, 16, 0),
    },
  ];

  return (
    <div>
      <h2>Basic Calendar Example</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default BasicCalendar;
