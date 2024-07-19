import React from 'react';
import EventCalendar from 'react-event-calendar';

const TaskReminder = () => {
  const events = [
    {
      start: '2024-07-20',
      end: '2024-07-20',
      eventClasses: 'optionalEvent',
      title: 'React Practice',
      description: 'Practice React for 4 hours',
    },
    {
      start: '2024-07-21',
      end: '2024-07-21',
      title: 'Java Practice',
      description: 'Practice Java for 2 hours',
      data: 'Extra data if needed',
    },
  ];

  return (
    <div>
      <h2>Task Reminders</h2>
      <EventCalendar 
        month={7}
        year={2024}
        events={events} 
        onEventClick={(target, eventData, day) => console.log(eventData)} 
      />
    </div>
  );
};

export default TaskReminder;
