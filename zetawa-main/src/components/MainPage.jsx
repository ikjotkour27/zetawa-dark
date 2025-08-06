import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, Users, Briefcase, Calendar, Bell, Phone, User, ArrowRight, Globe, Award, Star, TrendingUp } from 'lucide-react';

const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', path: '/', icon: null },
    { name: 'Admin Profile', path: '/admin-profile', icon: User },
    { name: 'Certifications', path: '/certifications', icon: Users },
    { name: 'Contact Us', path: '/contact', icon: Phone },
    { name: 'Careers', path: '/careers', icon: Briefcase },
    // { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Press Release', path: '/press-release', icon: Bell },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const stats = [
    { value: "500+", label: "Global Clients", icon: Globe },
    { value: "50+", label: "Countries", icon: Award },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "24/7", label: "Support", icon: TrendingUp }
  ];

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Intelligent automation and predictive analytics solutions",
      icon: "🤖"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      icon: "☁️"
    },
    {
      title: "Cybersecurity",
      description: "Advanced threat protection and risk management",
      icon: "🔒"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end modernization and optimization",
      icon: "🚀"
    }
  ];

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#304356ff',
      minHeight: '100vh'
    }}>
      <style jsx>{`
        :root {
          --primary-red: #7e3a41ff;
          --primary-red-hover: #884a51ff;
          --dark-bg: #304356ff;
          --dark-card: #2d2d2d;
          --dark-border: #404040;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>

      

      {/* Hero Section */}
     <header style={{ 
      backgroundColor: 'var(--primary-red)',
      color: 'white',
      padding: '2rem 0 4rem 0',
      textAlign: 'center',
      position: 'relative'
    }}>
      {/* Navigation in Hero */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        marginBottom: '4rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-red)',
            fontWeight: 'bold',
            fontSize: '1.125rem',
            marginRight: '12px'
          }}>
            Z
          </div>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>
            ZETAWA DARK
          </span>
        </div>
    
    <button 
      style={{
        background: 'none',
        border: '2px solid white',
        color: 'white',
        padding: '8px',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = 'white';
        e.target.style.color = 'var(--primary-red)';
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = 'white';
      }}
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
    
    {/* Mobile Menu */}
    {isMenuOpen && (
      <div style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: '0 0 12px 12px',
        padding: '1rem 0',
        zIndex: 1000
      }}>
        {navigationItems.map((item) => (
          <div
            key={item.name}
            style={{
              padding: '12px 2rem',
              color: 'var(--primary-red)',
              cursor: 'pointer',
              borderBottom: '1px solid rgba(126, 58, 65, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '500'
            }}
            onClick={() => handleNavClick(item.path)}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(126, 58, 65, 0.1)';
              e.target.style.color = '#2d2d2d';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'var(--primary-red)';
            }}
          >
            {item.icon && <item.icon size={18} />}
            {item.name}
          </div>
        ))}
      </div>
    )}
  </div>

  {/* Rest of hero content remains the same */}
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            Welcome to <span style={{color: '#ffebee'}}>ZETAWA DARK</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Your trusted partner in innovative solutions and exceptional service delivery
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              style={{
                backgroundColor: 'white',
                color: 'var(--primary-red)',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
              onClick={() => navigate('/contact')}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get Started
              <ArrowRight size={16} />
            </button>
            <button 
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => navigate('/careers')}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'var(--primary-red)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        </div>
      </header>

      {/* Stats Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              Our Impact in Numbers
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Trusted by organizations worldwide to deliver excellence
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <stat.icon size={40} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
                <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--primary-red)', marginBottom: '0.5rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '1.1rem', color: '#666', fontWeight: '500' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              Our Services
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Comprehensive solutions for your digital transformation journey
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              Latest Updates
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Stay informed about our latest developments and achievements
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{
              padding: '2rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <Bell size={20} style={{ color: 'var(--primary-red)', marginRight: '0.5rem' }} />
                <span style={{ color: 'var(--primary-red)', fontWeight: '600' }}>New Release</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
                Company Expansion
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                We're excited to announce our expansion into new markets and services.
              </p>
              <div 
                style={{ 
                  color: 'var(--primary-red)', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontWeight: '500'
                }}
                onClick={() => navigate('/press-release')}
              >
                Read more <ChevronRight size={16} />
              </div>
            </div>

            <div style={{
              padding: '2rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <Calendar size={20} style={{ color: 'var(--primary-red)', marginRight: '0.5rem' }} />
                <span style={{ color: 'var(--primary-red)', fontWeight: '600' }}>Upcoming Event</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
                Annual Conference 2025
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                Join us for our annual conference featuring industry leaders and innovation.
              </p>
              <div 
                style={{ 
                  color: 'var(--primary-red)', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontWeight: '500'
                }}
                onClick={() => navigate('/events')}
              >
                Learn more <ChevronRight size={16} />
              </div>
            </div>

            <div style={{
              padding: '2rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <Briefcase size={20} style={{ color: 'var(--primary-red)', marginRight: '0.5rem' }} />
                <span style={{ color: 'var(--primary-red)', fontWeight: '600' }}>Career Opportunity</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
                We're Hiring!
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                Discover exciting career opportunities and join our growing team.
              </p>
              <div 
                style={{ 
                  color: 'var(--primary-red)', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontWeight: '500'
                }}
                onClick={() => navigate('/careers')}
              >
                Apply now <ChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              Quick Access
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Easy access to our key services and information
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            <div
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #e9ecef',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textAlign: 'center'
              }}
              onClick={() => navigate('/admin-profile')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <User size={32} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
                Admin Profile
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                Meet our leadership team and administrators
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #e9ecef',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textAlign: 'center'
              }}
              onClick={() => navigate('/certifications')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Users size={32} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
                Certifications
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                Extract your certifications and credentials
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #e9ecef',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textAlign: 'center'
              }}
              onClick={() => navigate('/careers')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Briefcase size={32} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
                Careers
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                Join our team and grow your career
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #e9ecef',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textAlign: 'center'
              }}
              onClick={() => navigate('/contact')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Phone size={32} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
                Contact Us
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                Get in touch with our expert team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ 
            backgroundColor: 'var(--primary-red)', 
            padding: '4rem 2rem', 
            borderRadius: '20px', 
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Ready to Get Started?
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
              Discover how ZETAWA DARK can help you achieve your goals
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                style={{
                  backgroundColor: 'white',
                  color: 'var(--primary-red)',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => navigate('/contact')}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Contact Us Today
              </button>
              <button 
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => navigate('/careers')}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = 'var(--primary-red)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#2d2d2d', 
        color: 'white', 
        padding: '3rem 0 2rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--primary-red)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.125rem',
                marginRight: '12px'
              }}>
                Z
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>ZETAWA DARK</div>
                <div style={{ fontSize: '0.9rem', color: '#adb5bd' }}>PRIVATE LIMITED</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                © 2025 ZETAWA DARK PRIVATE LIMITED. All rights reserved.
              </div>
              <div style={{ fontSize: '0.9rem', color: '#adb5bd' }}>
                Equal opportunity employer committed to diversity and inclusion.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;