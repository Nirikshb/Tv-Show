import React, { useState } from 'react';
import './ShowSummary.css';

const ShowSummary = ({ show, onBookTicket }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(show.name, formData);
    onBookTicket(show.name, formData);
  };

  return (
    <div className="ShowSummary">
      <h2>Show Summary</h2>
      <h3>{show.name}</h3>
      <p className='summary'>{show.summary}</p>

      <div className="BookTicket">
        <h4>Book Ticket</h4>
        <form onSubmit={handleFormSubmit}>
          <div className="group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </div>
          <br />
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default ShowSummary;
