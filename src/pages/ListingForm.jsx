import React, { useState } from 'react';

const ListingForm = ({ listing, onSave, onDelete }) => {
  const [formData, setFormData] = useState(listing || {
    name: '',
    category: '',
    date: '',
    time: '',
    location: '',
    seats: '',
    bookingDeadline: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listing) {
      onSave(formData);
    } else {
      onSave(formData);
    }
  };

  const handleDelete = () => {
    if (listing) {
      onDelete(listing.id);
    }
  };

  return (
    <div className="container mt-3">
      <h2>{listing ? 'Edit Listing' : 'Create Listing'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            className="form-control"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seats">Seats</label>
          <input
            type="number"
            className="form-control"
            id="seats"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookingDeadline">Booking Deadline</label>
          <input
            type="date"
            className="form-control"
            id="bookingDeadline"
            name="bookingDeadline"
            value={formData.bookingDeadline}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {listing ? 'Update Listing' : 'Create Listing'}
        </button>
        {listing && (
          <button
            type="button"
            className="btn btn-danger mt-3 ml-3"
            onClick={handleDelete}
          >
            Delete Listing
          </button>
        )}
      </form>
    </div>
  );
};

export default ListingForm;
