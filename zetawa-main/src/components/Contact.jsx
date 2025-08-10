import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
      try {
        const response = await fetch('https://zetawa-dark-backend.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

        const result = await response.json();

        if (response.ok) {
          alert(result.message);
          setFormData({
            name: '',
            email: '',
            phone: '',
            inquiryType: '',
            message: ''
          });
        } else {
          alert('Failed to send message. Please try again later.');
        }
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      }
    };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        { label: 'Main Office', value: '+1 (555) 123-4567' },
        { label: 'Customer Support', value: '+1 (555) 123-4568' },
        { label: 'Sales Inquiries', value: '+1 (555) 123-4569' }
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        { label: 'General Inquiries', value: 'info@zetawadark.com' },
        { label: 'Support', value: 'support@zetawadark.com' },
        { label: 'Sales', value: 'sales@zetawadark.com' },
        { label: 'Careers', value: 'careers@zetawadark.com' }
      ]
    },
    {
      icon: MapPin,
      title: 'Company Address',
      details: [
        { label: 'Headquarters', value: '123 Business District, Suite 456' },
        { label: 'City', value: 'New York, NY 10001' },
        { label: 'Country', value: 'United States' }
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        { label: 'Monday - Friday', value: '9:00 AM - 6:00 PM' },
        { label: 'Saturday', value: '10:00 AM - 4:00 PM' },
        { label: 'Sunday', value: 'Closed' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#', color: '#0077B5' },
    { name: 'Twitter', url: '#', color: '#1DA1F2' },
    { name: 'Facebook', url: '#', color: '#1877F2' },
    { name: 'Instagram', url: '#', color: '#E4405F' }
  ];

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#304356ff',
      minHeight: '100vh'
    }}>
      
      {/* Header */}
      <header style={{ 
        backgroundColor: '#7e3a41ff',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <Link 
            to="/" 
            style={{
              backgroundColor: '#884a51ff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
              marginBottom: '2rem',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#884a51ff'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#884a51ff'}
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto' }}>
            Get in touch with our team - we're here to help!
          </p>
        </div>
      </header>

      {/* Contact Info Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <info.icon size={24} style={{ color: '#7e3a41ff', marginRight: '0.5rem' }} />
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '600', margin: '0', color: '#2d2d2d' }}>
                    {info.title}
                  </h3>
                </div>
                {info.details.map((detail, detailIndex) => (
                  <div key={detailIndex} style={{ 
                    marginBottom: '1rem',
                    paddingBottom: '1rem',
                    borderBottom: detailIndex < info.details.length - 1 ? '1px solid #e9ecef' : 'none'
                  }}>
                    <div style={{ fontWeight: '600', color: '#2d2d2d', marginBottom: '0.25rem' }}>
                      {detail.label}
                    </div>
                    <div style={{ color: '#666' }}>
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}>
            
            {/* Contact Form */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              padding: '2rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <MessageSquare size={24} style={{ color: '#7e3a41ff', marginRight: '0.5rem' }} />
                <h3 style={{ fontSize: '1.8rem', fontWeight: '600', margin: '0', color: '#2d2d2d' }}>
                  Send us a Message
                </h3>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      color: '#666', 
                      fontWeight: '500', 
                      marginBottom: '0.5rem' 
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        backgroundColor: 'white',
                        color: '#2d2d2d',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#7e3a41ff'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                  </div>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      color: '#666', 
                      fontWeight: '500', 
                      marginBottom: '0.5rem' 
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        backgroundColor: 'white',
                        color: '#2d2d2d',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#7e3a41ff'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      color: '#666', 
                      fontWeight: '500', 
                      marginBottom: '0.5rem' 
                    }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        backgroundColor: 'white',
                        color: '#2d2d2d',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#7e3a41ff'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                  </div>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      color: '#666', 
                      fontWeight: '500', 
                      marginBottom: '0.5rem' 
                    }}>
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        backgroundColor: 'white',
                        color: '#2d2d2d',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#7e3a41ff'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    >
                      <option value="">Select inquiry type</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block', 
                    color: '#666', 
                    fontWeight: '500', 
                    marginBottom: '0.5rem' 
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your inquiry in detail..."
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #e9ecef',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      backgroundColor: 'white',
                      color: '#2d2d2d',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#7e3a41ff'}
                    onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  style={{
                    backgroundColor: '#7e3a41ff',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#884a51ff'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#7e3a41ff'}
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e9ecef',
                padding: '2rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#2d2d2d' }}>
                  Connect with Us
                </h3>
                <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Follow us on social media for the latest updates and news.
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: social.color,
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'transform 0.2s',
                        fontWeight: '600'
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      {social.name.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e9ecef',
                padding: '2rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#2d2d2d' }}>
                  Quick Response
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontWeight: '600', color: '#2d2d2d', marginBottom: '0.25rem' }}>
                    General Inquiries
                  </div>
                  <div style={{ color: '#666' }}>Within 24 hours</div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontWeight: '600', color: '#2d2d2d', marginBottom: '0.25rem' }}>
                    Support Requests
                  </div>
                  <div style={{ color: '#666' }}>Within 4 hours</div>
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#2d2d2d', marginBottom: '0.25rem' }}>
                    Sales Inquiries
                  </div>
                  <div style={{ color: '#666' }}>Within 2 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#2d2d2d', 
        color: 'white', 
        padding: '2rem 0', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            © 2025 Your Company Name. All rights reserved.
          </p>
          <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
            We're committed to protecting your privacy and data.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;