import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const localizer = momentLocalizer(moment);

function CalendarPage() {
  const [bookedDates, setBookedDates] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const mockData = {
      '2025-02': ['2025-02-15', '2025-02-20'],
      '2025-06': ['2025-06-01', '2025-06-10'],
    };
    const monthKey = moment(currentDate).format('YYYY-MM');
    setBookedDates(mockData[monthKey] || []);
  }, [currentDate]);

  const events = useMemo(() =>
    bookedDates.map(date => ({
      title: 'Booked',
      start: new Date(date),
      end: new Date(date),
      allDay: true,
    })), [bookedDates]
  );

  const handleSelectSlot = ({ start }) => {
    const dateStr = moment(start).format('YYYY-MM-DD');
    if (moment(dateStr).isBefore(moment().startOf('day'))) return;
    if (bookedDates.includes(dateStr)) {
      alert(`❌ Date ${dateStr} is already booked!`);
      return;
    }
    alert(`✅ Booking request for ${dateStr}`);
    navigate(`/booking/${dateStr}`);
  };

  const handleSelectEvent = (event) => {
    alert(`⚠️ You clicked on a booked date: ${event.title}`);
  };

  const handleNavigate = (action) => {
    setCurrentDate(prevDate =>
      action === 'prev'
        ? moment(prevDate).subtract(1, 'months').toDate()
        : moment(prevDate).add(1, 'months').toDate()
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Booking Calendar</h1>

      <div className="d-flex justify-content-between mb-4">
        <button className="btn btn-primary" onClick={() => handleNavigate('prev')}>Previous Month</button>
        <button className="btn btn-primary" onClick={() => handleNavigate('next')}>Next Month</button>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            date={currentDate}
            onNavigate={date => setCurrentDate(date)}
            defaultView="month"
            views={['month']}
            style={{ height: '70vh', minHeight: '500px' }}
            minDate={new Date()}
          />
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
