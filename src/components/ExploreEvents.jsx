import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExploreEvents = () => {
  const [activeTimeFilter, setActiveTimeFilter] = useState('All');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('All');

  const timeFilters = [
    'All', 'Today', 'Tomorrow', 'This Week', 'This Weekend', 
    'Next Week', 'Next Weekend', 'This Month', 'Next Month', 
    'This Year', 'Next Year'
  ];

  const categoryFilters = [
    'All', 'Arts', 'Business', 'Concert', 'Workshops', 
    'Coaching and Consulting', 'Health and Wellbeing', 
    'Volunteer', 'Sports', 'Free'
  ];

  const events = [
    {
      id: 1,
      title: "Spring Showcase Saturday April 30th 2022 at 7pm",
      price: "Free*",
      image: "/api/placeholder/300/200",
      date: "1 May",
      time: "Sun, 4:30 PM",
      duration: "3h",
      remaining: null,
      category: "Arts"
    },
    {
      id: 2,
      title: "Shutter Life",
      price: "AUD $85.00",
      image: "/api/placeholder/300/200",
      date: "1 May",
      time: "Sun, 5:30 PM",
      duration: "1h",
      remaining: "7 Remaining",
      category: "Workshops"
    },
    {
      id: 3,
      title: "Friday Night Dinner at The Old Station May 27 2022",
      price: "AUD $41.50*",
      image: "/api/placeholder/300/200",
      date: "27 May",
      time: "Fri, 12:00 PM",
      duration: "5h",
      remaining: null,
      category: "Health and Wellbeing"
    },
    {
      id: 4,
      title: "Tutorial on Canvas Painting for Beginners",
      price: "AUD $50.00*",
      image: "/api/placeholder/300/200",
      date: "17 Jul",
      time: "Sun, 5:30 PM",
      duration: "1h",
      remaining: "17 Remaining",
      category: "Arts"
    }
  ];

  return (
    <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Header */}
        <div className="row mb-4">
          <div className="col">
            <h1 className="display-5 fw-bold text-dark">Explore Events</h1>
          </div>
        </div>

        {/* Time Filters */}
        <div className="row mb-3">
          <div className="col">
            <div className="d-flex flex-wrap gap-2">
              {timeFilters.map((filter) => (
                <button
                  key={filter}
                  className={`btn ${
                    activeTimeFilter === filter 
                      ? 'btn-dark' 
                      : 'btn-outline-secondary'
                  } btn-sm rounded-pill`}
                  onClick={() => setActiveTimeFilter(filter)}
                  style={{ 
                    fontSize: '0.875rem',
                    padding: '6px 16px',
                    border: activeTimeFilter === filter ? 'none' : '1px solid #dee2e6'
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="row mb-4">
          <div className="col">
            <div className="d-flex flex-wrap gap-2">
              {categoryFilters.map((filter) => (
                <button
                  key={filter}
                  className={`btn ${
                    activeCategoryFilter === filter 
                      ? 'btn-dark' 
                      : 'btn-outline-secondary'
                  } btn-sm rounded-pill ${filter === 'Free' ? 'text-success' : ''}`}
                  onClick={() => setActiveCategoryFilter(filter)}
                  style={{ 
                    fontSize: '0.875rem',
                    padding: '6px 16px',
                    border: activeCategoryFilter === filter ? 'none' : '1px solid #dee2e6',
                    color: filter === 'Free' && activeCategoryFilter !== filter ? '#28a745' : '',
                    borderColor: filter === 'Free' && activeCategoryFilter !== filter ? '#28a745' : ''
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="row g-4 mb-4">
          {events.map((event) => (
            <div key={event.id} className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                {/* Event Image */}
                <div className="position-relative">
                  <div 
                    className="card-img-top"
                    style={{
                      height: '200px',
                      background: `linear-gradient(135deg, ${
                        event.id === 1 ? '#1a237e, #3949ab' :
                        event.id === 2 ? '#37474f, #78909c' :
                        event.id === 3 ? '#bf360c, #ff5722' :
                        '#424242, #757575'
                      })`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {/* Placeholder content */}
                    <div className="text-white text-center">
                      {event.id === 1 && <i className="fas fa-music fa-3x opacity-50"></i>}
                      {event.id === 2 && <i className="fas fa-camera fa-3x opacity-50"></i>}
                      {event.id === 3 && <i className="fas fa-utensils fa-3x opacity-50"></i>}
                      {event.id === 4 && <i className="fas fa-paint-brush fa-3x opacity-50"></i>}
                    </div>
                  </div>
                  {/* Bookmark Icon */}
                  <div className="position-absolute top-0 end-0 m-3">
                    <div 
                      className="bg-success rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '40px', height: '40px', cursor: 'pointer' }}
                    >
                      <i className="fas fa-bookmark text-white"></i>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.3' }}>
                    {event.title}
                  </h5>
                  
                  <div className="mt-auto">
                    {/* Price and Remaining */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold text-dark" style={{ fontSize: '1.1rem' }}>
                        {event.price}
                      </span>
                      {event.remaining && (
                        <small className="text-muted">
                          <i className="fas fa-users me-1"></i>
                          {event.remaining}
                        </small>
                      )}
                    </div>

                    {/* Event Info */}
                    <div className="d-flex justify-content-between align-items-center text-muted small">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-calendar me-2"></i>
                        <span className="me-3">{event.date}</span>
                        <i className="fas fa-clock me-2"></i>
                        <span>{event.time}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-hourglass-half me-2"></i>
                        <span>{event.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="row">
          <div className="col text-center">
            <button 
              className="btn btn-success btn-lg px-4 py-3"
              style={{ 
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}
            >
              Browse All
            </button>
          </div>
        </div>
      </div>

      {/* Font Awesome for icons */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </div>
  );
};

export default ExploreEvents;