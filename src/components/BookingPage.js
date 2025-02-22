import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BookingPage() {
  const { date } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="text-center mb-4">Booking Form</h2>
          <p className="text-center mb-4">You've selected the date: <strong>{date}</strong></p>

          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
            </div>

            <div className="mb-3">
              <label htmlFor="comments" className="form-label">Additional Comments</label>
              <textarea className="form-control" id="comments" rows="3" placeholder="Any special requests?"></textarea>
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-success">Submit Booking</button>
              <button type="button" className="btn btn-secondary" onClick={() => navigate('/calendar')}>Back to Calendar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
