import React, { useState , useEffect} from 'react'
import img1 from '../assets/vite.png';
import { Link } from 'react-router-dom';
import { Phone, Mail,Instagram,Linkedin, MapPin, Send, MessageSquare } from 'lucide-react';


function Footer() {

  const [screenSize, setScreenSize] = useState({
      isMobile: false,
      isTablet: false
    });
  


    useEffect(() => {
        const handleResize = () => {
          setScreenSize({
            isMobile: window.innerWidth <= 768,
            isTablet: window.innerWidth <= 1024
          });
        };
    
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      const { isMobile, isTablet } = screenSize;

   const iconMap = {
  LinkedIn: <Linkedin size={isMobile ? 16 : 20} />,
  Instagram: <Instagram size={isMobile ? 16 : 20} />,
  Phone: <Phone size={isMobile ? 16 : 20} />,
  Email: <Mail size={isMobile ? 16 : 20} />
};

  const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/107492000/admin/dashboard/',
    color: '#0077B5'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/zetawadark?igsh=NXQ0dTdram83ejQx',
    color: '#E4405F'
  },
  {
    name: 'Phone',
    url: 'tel:7004265718',
    color: '#34A853'
  },
  {
    name: 'Email',
    url: 'mailto:director@zetawa.com',
    color: '#EA4335'
  }
  ];
  return (
     <>
        <div style={{ 
        backgroundColor: '#2d2d2d', 
        color: 'white', 
        padding: '3rem 0 2rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="logo-container" style={{
              width: '36px',
              height: '36px',
              // backgroundColor: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-red)',
              fontWeight: 'bold',
              fontSize: '1rem',
              marginRight: '12px'
            }}>
              <Link to="/">
                <img src={img1} alt="Logo" style={{ width: '48px', height: '48px' }} />
              </Link>
            </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>ZETAWA DARK</div>
                <div style={{ fontSize: '0.9rem', color: '#adb5bd' }}>PRIVATE LIMITED</div>
              </div>
            </div>
            <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      flexWrap: 'wrap',
                      justifyContent: isMobile ? 'center' : 'flex-start'
                    }}
                  >
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: isMobile ? '36px' : '40px',
                          height: isMobile ? '36px' : '40px',
                          borderRadius: '50%',
                          backgroundColor: social.color,
                          color: 'white',
                          textDecoration: 'none',
                          transition: 'transform 0.2s',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      >
                        {iconMap[social.name]}
                      </a>
                    ))}
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
      </div>
     </>
  )
}

export default Footer
