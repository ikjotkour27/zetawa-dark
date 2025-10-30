import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ClientSatisfaction() {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      rating: 5,
      comment: "Outstanding service! The team delivered beyond our expectations. Highly professional and responsive throughout the entire project.",
      date: "2024-10-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Innovations Ltd",
      rating: 5,
      comment: "Exceptional quality and attention to detail. They transformed our vision into reality with remarkable efficiency.",
      date: "2024-10-10"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      company: "Global Ventures Inc",
      rating: 4,
      comment: "Great experience working with this team. Professional, timely, and delivered excellent results. Would definitely recommend!",
      date: "2024-10-05"
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    rating: '5',
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.comment) {
      const newFeedback = {
        id: Date.now(),
        name: formData.name,
        company: formData.company,
        rating: parseInt(formData.rating),
        comment: formData.comment,
        date: new Date().toISOString().split('T')[0]
      };

      setFeedbacks(prev => [newFeedback, ...prev]);
      
      setFormData({
        name: '',
        company: '',
        rating: '5',
        comment: ''
      });

      // Show success message
      const successMsg = document.getElementById('successMessage');
      successMsg.style.display = 'block';
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 3000);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} style={{ color: index < rating ? '#ff6b35' : '#444' }}>
        ★
      </span>
    ));
  };

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      minHeight: '100vh', 
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div className="container py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#ff6b35' }}>
            Client Satisfaction
          </h1>
          <p className="lead" style={{ color: '#b0b0b0' }}>
            See what our clients say about us and share your experience
          </p>
        </div>

        {/* Success Message */}
        <div 
          id="successMessage" 
          className="alert alert-success" 
          style={{ 
            display: 'none',
            backgroundColor: '#ff6b35',
            border: 'none',
            color: '#ffffff'
          }}
        >
          Thank you! Your feedback has been submitted successfully.
        </div>

        {/* Feedback Form */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              padding: '2.5rem',
              border: '1px solid #2a2a2a'
            }}>
              <h2 className="h3 mb-4" style={{ color: '#ff6b35' }}>
                Share Your Feedback
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" style={{ color: '#b0b0b0' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        backgroundColor: '#0a0a0a',
                        border: '1px solid #2a2a2a',
                        color: '#ffffff',
                        padding: '0.75rem'
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ color: '#b0b0b0' }}>
                      Company
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: '#0a0a0a',
                        border: '1px solid #2a2a2a',
                        color: '#ffffff',
                        padding: '0.75rem'
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" style={{ color: '#b0b0b0' }}>
                      Rating *
                    </label>
                    <select
                      className="form-select"
                      name="rating"
                      value={formData.rating}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: '#0a0a0a',
                        border: '1px solid #2a2a2a',
                        color: '#ffffff',
                        padding: '0.75rem'
                      }}
                    >
                      <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                      <option value="4">⭐⭐⭐⭐ Very Good</option>
                      <option value="3">⭐⭐⭐ Good</option>
                      <option value="2">⭐⭐ Fair</option>
                      <option value="1">⭐ Poor</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label" style={{ color: '#b0b0b0' }}>
                      Your Feedback *
                    </label>
                    <textarea
                      className="form-control"
                      name="comment"
                      rows="4"
                      value={formData.comment}
                      onChange={handleInputChange}
                      required
                      style={{
                        backgroundColor: '#0a0a0a',
                        border: '1px solid #2a2a2a',
                        color: '#ffffff',
                        padding: '0.75rem'
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-lg w-100"
                      style={{
                        backgroundColor: '#ff6b35',
                        border: 'none',
                        color: '#ffffff',
                        padding: '0.875rem',
                        fontWeight: '600',
                        transition: 'all 0.3s'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#ff5722'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#ff6b35'}
                    >
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Feedback Display */}
        <div className="row">
          <div className="col-12">
            <h2 className="h3 mb-4 text-center" style={{ color: '#ff6b35' }}>
              What Our Clients Say
            </h2>
          </div>
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="col-lg-4 col-md-6 mb-4">
              <div style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #2a2a2a',
                height: '100%',
                transition: 'transform 0.3s',
                cursor: 'default'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="mb-3">
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    {renderStars(feedback.rating)}
                  </div>
                </div>
                <p style={{ 
                  color: '#d0d0d0', 
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  "{feedback.comment}"
                </p>
                <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '1rem' }}>
                  <h5 style={{ color: '#ffffff', marginBottom: '0.25rem', fontSize: '1rem' }}>
                    {feedback.name}
                  </h5>
                  {feedback.company && (
                    <p style={{ color: '#808080', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                      {feedback.company}
                    </p>
                  )}
                  <p style={{ color: '#606060', fontSize: '0.8rem', margin: 0 }}>
                    {new Date(feedback.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}