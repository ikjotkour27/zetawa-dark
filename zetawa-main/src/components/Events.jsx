import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Play, Image, FileText, CheckCircle, AlertCircle, User, Mail, Phone, Video, Coffee, Briefcase, GraduationCap } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    eventId: null
  });
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Full Stack Development Workshop',
      date: '2025-08-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Virtual Event',
      type: 'Workshop',
      category: 'Technical',
      description: 'Comprehensive workshop covering React, Node.js, and modern development practices.',
      speaker: 'Sarah Johnson',
      capacity: 50,
      registered: 32,
      image: '🚀',
      registrationOpen: true,
      tags: ['Development', 'React', 'Node.js']
    },
    {
      id: 2,
      title: 'Data Science Conference 2025',
      date: '2025-08-22',
      time: '9:00 AM - 6:00 PM',
      location: 'Tech Hub, Jammu',
      type: 'Conference',
      category: 'Data Science',
      description: 'Annual conference bringing together data scientists, analysts, and ML engineers.',
      speaker: 'Dr. Michael Chen',
      capacity: 200,
      registered: 145,
      image: '📊',
      registrationOpen: true,
      tags: ['Data Science', 'ML', 'Analytics']
    },
    {
      id: 3,
      title: 'UI/UX Design Webinar',
      date: '2025-08-05',
      time: '2:00 PM - 4:00 PM',
      location: 'Online',
      type: 'Webinar',
      category: 'Design',
      description: 'Learn modern UI/UX principles and design thinking methodologies.',
      speaker: 'Emily Davis',
      capacity: 100,
      registered: 78,
      image: '🎨',
      registrationOpen: true,
      tags: ['Design', 'UX', 'UI']
    },
    {
      id: 4,
      title: 'Mobile App Development Bootcamp',
      date: '2025-09-10',
      time: '10:00 AM - 5:00 PM',
      location: 'Innovation Center, Kashmir',
      type: 'Bootcamp',
      category: 'Mobile',
      description: 'Intensive bootcamp covering React Native and Flutter development.',
      speaker: 'David Lee',
      capacity: 30,
      registered: 28,
      image: '📱',
      registrationOpen: true,
      tags: ['Mobile', 'React Native', 'Flutter']
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Tech Innovation Summit 2025',
      date: '2025-07-20',
      time: '9:00 AM - 6:00 PM',
      location: 'Grand Convention Center',
      type: 'Summit',
      category: 'Innovation',
      description: 'Major tech summit featuring industry leaders and emerging technologies.',
      speaker: 'Multiple Speakers',
      attendees: 500,
      image: '🏆',
      highlights: ['AI & Machine Learning', 'Blockchain Technology', 'IoT Applications'],
      photos: 25,
      videos: 8,
      summary: 'Successful summit with 500+ attendees, 20 speakers, and valuable networking opportunities.'
    },
    {
      id: 6,
      title: 'Startup Pitch Competition',
      date: '2025-07-10',
      time: '1:00 PM - 8:00 PM',
      location: 'Startup Hub, Jammu',
      type: 'Competition',
      category: 'Entrepreneurship',
      description: 'Annual startup pitch competition with cash prizes and mentorship opportunities.',
      speaker: 'Panel of Judges',
      attendees: 150,
      image: '💡',
      highlights: ['15 Startups Pitched', 'Winner: EcoTech Solutions', 'Prize Pool: ₹5 Lakhs'],
      photos: 40,
      videos: 12,
      summary: 'Exciting competition showcasing innovative startups with promising solutions.'
    },
    {
      id: 7,
      title: 'Women in Tech Panel Discussion',
      date: '2025-06-25',
      time: '3:00 PM - 5:00 PM',
      location: 'Virtual Event',
      type: 'Panel',
      category: 'Diversity',
      description: 'Inspiring panel discussion featuring successful women leaders in technology.',
      speaker: 'Panel of Women Leaders',
      attendees: 300,
      image: '👩‍💻',
      highlights: ['Career Guidance', 'Breaking Barriers', 'Mentorship Programs'],
      photos: 15,
      videos: 5,
      summary: 'Inspiring session promoting diversity and inclusion in the tech industry.'
    }
  ];

  const eventCalendar = [
    { date: '2025-08-05', event: 'UI/UX Design Webinar', type: 'webinar' },
    { date: '2025-08-15', event: 'Full Stack Development Workshop', type: 'workshop' },
    { date: '2025-08-22', event: 'Data Science Conference 2025', type: 'conference' },
    { date: '2025-09-10', event: 'Mobile App Development Bootcamp', type: 'bootcamp' },
    { date: '2025-09-18', event: 'Cybersecurity Awareness Session', type: 'session' },
    { date: '2025-10-05', event: 'Annual Tech Awards Ceremony', type: 'ceremony' }
  ];

  const handleRegistration = (eventId) => {
    if (!registrationData.name || !registrationData.email || !registrationData.phone) {
      setRegistrationStatus({
        type: 'error',
        message: 'Please fill in all required fields'
      });
      return;
    }

    // Simulate registration process
    setRegistrationStatus({
      type: 'success',
      message: 'Registration successful! Check your email for confirmation.'
    });

    // Reset form
    setRegistrationData({ name: '', email: '', phone: '', eventId: null });
    setSelectedEvent(null);
  };

  const getEventTypeIcon = (type) => {
    const icons = {
      'Workshop': <Coffee size={16} />,
      'Conference': <Briefcase size={16} />,
      'Webinar': <Video size={16} />,
      'Bootcamp': <GraduationCap size={16} />,
      'Summit': <Users size={16} />,
      'Competition': <CheckCircle size={16} />,
      'Panel': <Users size={16} />
    };
    return icons[type] || <Calendar size={16} />;
  };

  const getTypeColor = (type) => {
    const colors = {
      'Workshop': '#28a745',
      'Conference': '#17a2b8',
      'Webinar': '#ffc107',
      'Bootcamp': '#6f42c1',
      'Summit': '#20c997',
      'Competition': '#fd7e14',
      'Panel': '#e83e8c'
    };
    return colors[type] || '#6c757d';
  };

  return (
    <>
      <style>{`
        :root {
          --primary-red: #7e3a41ff;
          --primary-red-hover: #884a51ff;
          --dark-bg: #b9adadff;
          --dark-card: #2d2d2d;
          --dark-border: #404040;
        }

        body {
          background-color: var(--dark-bg);
          color: white;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .back-button {
          background-color: var(--primary-red);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: background-color 0.2s;
          cursor: pointer;
        }
        
        .back-button:hover {
          background-color: var(--primary-red-hover);
          color: white;
          text-decoration: none;
        }

        .hero-section {
          background: linear-gradient(135deg, rgba(108, 101, 102, 0.15), rgba(185, 173, 173, 0.9));
          text-align: center;
          margin-bottom: 30px;
          padding: 40px 0;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 20px;
          background: linear-gradient(45deg, #000, #c77f86ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .notification-banner {
          background: linear-gradient(45deg, var(--primary-red), #dc3545);
          color: white;
          padding: 10px 0;
          overflow: hidden;
          position: relative;
          margin-bottom: 20px;
        }

        .notification-text {
          animation: scroll-left 25s linear infinite;
          white-space: nowrap;
          font-weight: 500;
        }

        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .card-custom {
          background-color: var(--dark-card);
          border: 1px solid var(--dark-border);
          border-radius: 15px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .card-custom:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
        }

        .tab-button {
          background-color: transparent;
          color: #adb5bd;
          border: 2px solid var(--dark-border);
          padding: 12px 24px;
          border-radius: 10px;
          margin: 0 5px;
          transition: all 0.3s;
          cursor: pointer;
        }

        .tab-button.active {
          background-color: var(--primary-red);
          color: white;
          border-color: var(--primary-red);
        }

        .tab-button:hover {
          border-color: var(--primary-red);
          color: var(--primary-red);
        }

        .event-card {
          background-color: var(--dark-card);
          border: 1px solid var(--dark-border);
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .event-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          border-color: var(--primary-red);
        }

        .btn-primary-custom {
          background-color: var(--primary-red);
          border-color: var(--primary-red);
          padding: 12px 24px;
          font-weight: 600;
          transition: all 0.2s;
          border-radius: 8px;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        .btn-primary-custom:hover {
          background-color: var(--primary-red-hover);
          border-color: var(--primary-red-hover);
          transform: translateY(-2px);
        }

        .form-control-custom {
          background-color: #404040;
          border: 2px solid var(--dark-border);
          color: white;
          padding: 12px;
          border-radius: 8px;
          transition: all 0.3s;
          width: 100%;
        }
        
        .form-control-custom:focus {
          background-color: #505050;
          border-color: var(--primary-red);
          color: white;
          box-shadow: 0 0 0 0.2rem rgba(184, 61, 73, 0.25);
          outline: none;
        }

        .type-badge {
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
          color: white;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .progress-bar-custom {
          background-color: #404040;
          border-radius: 10px;
          height: 8px;
          overflow: hidden;
        }

        .progress-fill {
          background: linear-gradient(45deg, var(--primary-red), #ff6b7d);
          height: 100%;
          border-radius: 10px;
          transition: width 0.3s ease;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }

        .calendar-item {
          background-color: var(--dark-card);
          border: 1px solid var(--dark-border);
          border-radius: 10px;
          padding: 15px;
          transition: all 0.3s ease;
        }

        .calendar-item:hover {
          border-color: var(--primary-red);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          .tab-button {
            padding: 8px 16px;
            margin: 5px 2px;
          }
        }
      `}</style>

      <div style={{ minHeight: '100vh' }}>
        {/* Moving Notification Banner */}
        <div className="notification-banner">
          <div className="notification-text">
            🎉 Upcoming: Full Stack Development Workshop - Aug 15 • Data Science Conference - Aug 22 • 
            UI/UX Design Webinar - Aug 5 • Register now for limited seats! Early bird discounts available
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="container">
            <button className="back-button" style={{ display: 'inline-flex', marginBottom: '20px' }}>
              <ArrowLeft size={20} style={{ marginRight: '8px' }} />
              Back to Home
            </button>
            <h1 className="hero-title">ZETAWA DARK</h1>
            <p style={{ fontSize: '1.3rem', color: 'black', marginBottom: '10px' }}>
              Events & Learning Hub
            </p>
            <p style={{ fontSize: '1rem', color: '#555', marginBottom: '0' }}>
              Conferences, workshops, webinars, and networking opportunities
            </p>
          </div>
        </div>

        <div className="container pb-5">
          {/* Navigation Tabs */}
          <div className="text-center mb-4">
            <button 
              className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              <Calendar size={16} style={{ marginRight: '8px' }} />
              Upcoming Events
            </button>
            <button 
              className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              <Clock size={16} style={{ marginRight: '8px' }} />
              Past Events
            </button>
            <button 
              className={`tab-button ${activeTab === 'calendar' ? 'active' : ''}`}
              onClick={() => setActiveTab('calendar')}
            >
              <Calendar size={16} style={{ marginRight: '8px' }} />
              Event Calendar
            </button>
            <button 
              className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              <User size={16} style={{ marginRight: '8px' }} />
              Event Registration
            </button>
          </div>

          {/* Upcoming Events Tab */}
          {activeTab === 'upcoming' && (
            <div>
              <div className="card-custom" style={{ padding: '30px', marginBottom: '30px' }}>
                <h3 style={{ color: '#fff', marginBottom: '20px', textAlign: 'center' }}>
                  🚀 Upcoming Events
                </h3>
                <p style={{ color: '#adb5bd', textAlign: 'center', marginBottom: '30px' }}>
                  Details about conferences, webinars, workshops, and other events
                </p>

                <div className="row">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="col-lg-6 mb-4">
                      <div className="event-card">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div style={{ fontSize: '3rem' }}>{event.image}</div>
                          <span 
                            className="type-badge" 
                            style={{ backgroundColor: getTypeColor(event.type) }}
                          >
                            {getEventTypeIcon(event.type)}
                            {event.type}
                          </span>
                        </div>

                        <h5 style={{ color: '#fff', marginBottom: '15px' }}>{event.title}</h5>
                        
                        <div className="mb-3">
                          <div style={{ color: '#adb5bd', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                            <Calendar size={16} style={{ marginRight: '8px', color: 'var(--primary-red)' }} />
                            {event.date}
                          </div>
                          <div style={{ color: '#adb5bd', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                            <Clock size={16} style={{ marginRight: '8px', color: 'var(--primary-red)' }} />
                            {event.time}
                          </div>
                          <div style={{ color: '#adb5bd', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                            <MapPin size={16} style={{ marginRight: '8px', color: 'var(--primary-red)' }} />
                            {event.location}
                          </div>
                          <div style={{ color: '#adb5bd', marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                            <User size={16} style={{ marginRight: '8px', color: 'var(--primary-red)' }} />
                            Speaker: {event.speaker}
                          </div>
                        </div>

                        <p style={{ color: '#adb5bd', fontSize: '0.9rem', marginBottom: '15px' }}>
                          {event.description}
                        </p>

                        <div className="mb-3">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <small style={{ color: '#fff' }}>Registration Progress</small>
                            <small style={{ color: '#adb5bd' }}>{event.registered}/{event.capacity}</small>
                          </div>
                          <div className="progress-bar-custom">
                            <div 
                              className="progress-fill" 
                              style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {event.tags.map((tag, index) => (
                            <span 
                              key={index}
                              style={{
                                background: 'rgba(184, 61, 73, 0.2)',
                                color: 'var(--primary-red)',
                                padding: '4px 8px',
                                borderRadius: '12px',
                                fontSize: '0.75rem'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button 
                          className="btn-primary-custom w-100"
                          onClick={() => {
                            setSelectedEvent(event);
                            setActiveTab('register');
                            setRegistrationData({...registrationData, eventId: event.id});
                          }}
                          disabled={!event.registrationOpen}
                        >
                          {event.registrationOpen ? 'Register Now' : 'Registration Closed'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Past Events Tab */}
          {activeTab === 'past' && (
            <div>
              <div className="card-custom" style={{ padding: '30px' }}>
                <h3 style={{ color: '#fff', marginBottom: '20px', textAlign: 'center' }}>
                  📚 Past Events
                </h3>
                <p style={{ color: '#adb5bd', textAlign: 'center', marginBottom: '30px' }}>
                  Overview and highlights of past events (photos, summaries, and videos)
                </p>

                <div className="row">
                  {pastEvents.map((event) => (
                    <div key={event.id} className="col-lg-6 mb-4">
                      <div className="event-card">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div style={{ fontSize: '3rem' }}>{event.image}</div>
                          <span 
                            className="type-badge" 
                            style={{ backgroundColor: getTypeColor(event.type) }}
                          >
                            {getEventTypeIcon(event.type)}
                            {event.type}
                          </span>
                        </div>

                        <h5 style={{ color: '#fff', marginBottom: '15px' }}>{event.title}</h5>
                        
                        <div className="mb-3">
                          <div style={{ color: '#adb5bd', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                            <Calendar size={16} style={{ marginRight: '8px', color: 'var(--primary-red)' }} />
                            {event.date}
                          </div>
                          <div style={{ color: '#adb5bd', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                            <MapPin size={16} style={{ marginRight: '8px', color: 'var(--primary-red)' }} />
                            {event.location}
                          </div>
                          <div style={{ color: '#adb5bd', marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                            <Users size={16} style={{ marginRight: '8px', color: 'var(--primary-red)' }} />
                            {event.attendees} attendees
                          </div>
                        </div>

                        <p style={{ color: '#adb5bd', fontSize: '0.9rem', marginBottom: '15px' }}>
                          {event.summary}
                        </p>

                        <div className="mb-3">
                          <h6 style={{ color: '#fff', marginBottom: '10px' }}>Highlights:</h6>
                          {event.highlights.map((highlight, index) => (
                            <div key={index} style={{ color: '#adb5bd', fontSize: '0.9rem', marginBottom: '5px' }}>
                              • {highlight}
                            </div>
                          ))}
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <span style={{ color: '#adb5bd', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
                              <Image size={16} style={{ marginRight: '5px' }} />
                              {event.photos} Photos
                            </span>
                            <span style={{ color: '#adb5bd', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
                              <Play size={16} style={{ marginRight: '5px' }} />
                              {event.videos} Videos
                            </span>
                          </div>
                          <button className="btn-primary-custom" style={{ padding: '8px 16px' }}>
                            View Media
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Event Calendar Tab */}
          {activeTab === 'calendar' && (
            <div>
              <div className="card-custom" style={{ padding: '30px' }}>
                <h3 style={{ color: '#fff', marginBottom: '20px', textAlign: 'center' }}>
                  📅 Event Calendar
                </h3>
                <p style={{ color: '#adb5bd', textAlign: 'center', marginBottom: '30px' }}>
                  Calendar view of all events and important dates
                </p>

                <div className="calendar-grid">
                  {eventCalendar.map((item, index) => (
                    <div key={index} className="calendar-item">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span style={{ 
                          color: 'var(--primary-red)', 
                          fontWeight: '600',
                          fontSize: '1.1rem'
                        }}>
                          {new Date(item.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                        <span 
                          className="type-badge"
                          style={{ 
                            backgroundColor: getTypeColor(item.type),
                            fontSize: '0.7rem',
                            padding: '4px 8px'
                          }}
                        >
                          {item.type}
                        </span>
                      </div>
                      <h6 style={{ color: '#fff', marginBottom: '8px', fontSize: '0.95rem' }}>
                        {item.event}
                      </h6>
                      <div style={{ 
                        color: '#adb5bd', 
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <Calendar size={14} style={{ marginRight: '5px' }} />
                        {new Date(item.date).getFullYear()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Event Registration Tab */}
          {activeTab === 'register' && (
            <div>
              <div className="card-custom" style={{ padding: '30px' }}>
                <h3 style={{ color: '#fff', marginBottom: '20px', textAlign: 'center' }}>
                  📝 Event Registration
                </h3>
                <p style={{ color: '#adb5bd', textAlign: 'center', marginBottom: '30px' }}>
                  Option to sign up or register for upcoming events
                </p>

                {selectedEvent && (
                  <div className="card-custom" style={{ padding: '20px', marginBottom: '30px', background: 'rgba(184, 61, 73, 0.1)' }}>
                    <h5 style={{ color: 'var(--primary-red)', marginBottom: '10px' }}>
                      Selected Event: {selectedEvent.title}
                    </h5>
                    <p style={{ color: '#adb5bd', fontSize: '0.9rem' }}>
                      {selectedEvent.date} • {selectedEvent.time} • {selectedEvent.location}
                    </p>
                  </div>
                )}

                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label style={{ color: '#fff', marginBottom: '8px' }}>
                          <User size={16} style={{ marginRight: '8px' }} />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="form-control-custom"
                          placeholder="Enter your full name"
                          value={registrationData.name}
                          onChange={(e) => setRegistrationData({...registrationData, phone: e.target.value})}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label style={{ color: '#fff', marginBottom: '8px' }}>
                          <Briefcase size={16} style={{ marginRight: '8px' }} />
                          Organization/Company
                        </label>
                        <input
                          type="text"
                          className="form-control-custom"
                          placeholder="Enter your organization"
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label style={{ color: '#fff', marginBottom: '8px' }}>
                          <FileText size={16} style={{ marginRight: '8px' }} />
                          Additional Comments
                        </label>
                        <textarea
                          className="form-control-custom"
                          rows="3"
                          placeholder="Any special requirements or questions?"
                          style={{ resize: 'vertical' }}
                        ></textarea>
                      </div>
                    </div>

                    {registrationStatus && (
                      <div 
                        className={`alert ${registrationStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`} 
                        style={{
                          background: registrationStatus.type === 'success' ? 'rgba(40, 167, 69, 0.2)' : 'rgba(220, 53, 69, 0.2)',
                          border: `2px solid ${registrationStatus.type === 'success' ? '#28a745' : '#dc3545'}`,
                          color: registrationStatus.type === 'success' ? '#28a745' : '#dc3545',
                          borderRadius: '10px',
                          padding: '15px',
                          marginBottom: '20px'
                        }}
                      >
                        <div className="d-flex align-items-center">
                          {registrationStatus.type === 'success' ? 
                            <CheckCircle size={20} style={{ marginRight: '10px' }} /> : 
                            <AlertCircle size={20} style={{ marginRight: '10px' }} />
                          }
                          {registrationStatus.message}
                        </div>
                      </div>
                    )}

                    <div className="text-center">
                      <button 
                        className="btn-primary-custom"
                        onClick={() => handleRegistration(registrationData.eventId)}
                        style={{ padding: '15px 40px', fontSize: '1.1rem' }}
                      >
                        Complete Registration
                      </button>
                    </div>

                    <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(108, 101, 102, 0.1)', borderRadius: '10px' }}>
                      <h6 style={{ color: 'var(--primary-red)', marginBottom: '15px' }}>Available Events for Registration:</h6>
                      <div className="row">
                        {upcomingEvents.filter(event => event.registrationOpen).map((event) => (
                          <div key={event.id} className="col-md-6 mb-3">
                            <div 
                              style={{ 
                                background: registrationData.eventId === event.id ? 'rgba(184, 61, 73, 0.2)' : 'transparent',
                                border: `2px solid ${registrationData.eventId === event.id ? 'var(--primary-red)' : 'var(--dark-border)'}`,
                                borderRadius: '10px',
                                padding: '15px',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                              }}
                              onClick={() => {
                                setSelectedEvent(event);
                                setRegistrationData({...registrationData, eventId: event.id});
                              }}
                            >
                              <div className="d-flex align-items-center mb-2">
                                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>{event.image}</span>
                                <div>
                                  <h6 style={{ color: '#fff', margin: '0', fontSize: '0.9rem' }}>{event.title}</h6>
                                  <small style={{ color: '#adb5bd' }}>{event.date}</small>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <span 
                                  className="type-badge"
                                  style={{ 
                                    backgroundColor: getTypeColor(event.type),
                                    fontSize: '0.7rem',
                                    padding: '4px 8px'
                                  }}
                                >
                                  {event.type}
                                </span>
                                <small style={{ color: '#adb5bd' }}>
                                  {event.capacity - event.registered} seats left
                                </small>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Additional Information Section */}
          <div className="row mt-4">
            <div className="col-md-4 mb-4">
              <div className="card-custom" style={{ padding: '25px', height: '100%', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎯</div>
                <h5 style={{ color: 'var(--primary-red)', marginBottom: '15px' }}>Upcoming Events</h5>
                <p style={{ color: '#adb5bd', fontSize: '0.9rem', marginBottom: '15px' }}>
                  Join our upcoming conferences, workshops, and webinars to enhance your skills and network with industry professionals.
                </p>
                <div style={{ color: 'var(--primary-red)', fontWeight: '600', fontSize: '1.5rem' }}>
                  {upcomingEvents.length}
                </div>
                <small style={{ color: '#adb5bd' }}>Events scheduled</small>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card-custom" style={{ padding: '25px', height: '100%', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📊</div>
                <h5 style={{ color: 'var(--primary-red)', marginBottom: '15px' }}>Past Events</h5>
                <p style={{ color: '#adb5bd', fontSize: '0.9rem', marginBottom: '15px' }}>
                  Explore highlights, photos, and summaries from our successful past events and get inspired for future participation.
                </p>
                <div style={{ color: 'var(--primary-red)', fontWeight: '600', fontSize: '1.5rem' }}>
                  {pastEvents.length}
                </div>
                <small style={{ color: '#adb5bd' }}>Events completed</small>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card-custom" style={{ padding: '25px', height: '100%', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📅</div>
                <h5 style={{ color: 'var(--primary-red)', marginBottom: '15px' }}>Event Calendar</h5>
                <p style={{ color: '#adb5bd', fontSize: '0.9rem', marginBottom: '15px' }}>
                  Stay updated with our comprehensive event calendar featuring all important dates and upcoming activities.
                </p>
                <div style={{ color: 'var(--primary-red)', fontWeight: '600', fontSize: '1.5rem' }}>
                  {eventCalendar.length}
                </div>
                <small style={{ color: '#adb5bd' }}>Calendar entries</small>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="card-custom" style={{ 
            padding: '40px', 
            marginTop: '30px', 
            background: 'linear-gradient(135deg, rgba(184, 61, 73, 0.1), rgba(45, 45, 45, 0.9))',
            textAlign: 'center'
          }}>
            <h4 style={{ color: '#fff', marginBottom: '20px' }}>Stay Connected with Our Events</h4>
            <p style={{ color: '#adb5bd', marginBottom: '30px', fontSize: '1.1rem' }}>
              Don't miss out on learning opportunities, networking events, and industry insights. 
              Subscribe to our newsletter for event updates and early bird registration access.
            </p>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="d-flex">
                  <input
                    type="email"
                    className="form-control-custom"
                    placeholder="Enter your email for event notifications"
                    style={{ marginRight: '10px' }}
                  />
                  <button className="btn-primary-custom">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <small style={{ color: '#adb5bd' }}>
                🔔 Get notified about new events, early bird discounts, and exclusive workshops
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;