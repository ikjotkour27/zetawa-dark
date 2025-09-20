import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, X, Users, Phone, Briefcase, Bell, User } from 'lucide-react';
import img1 from '../assets/vite.png';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', path: '/', icon: null },
    { name: 'About Us', path: '/aboutus', icon: null },
    { name: 'Admin Profile', path: '/admin-profile', icon: User },
    { name: 'Certifications', path: '/certifications', icon: Users },
    { name: 'Contact Us', path: '/contact', icon: Phone },
    { name: 'Careers', path: '/careers', icon: Briefcase },
    { name: 'Press Release', path: '/press-release', icon: Bell },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const handleMenuOpen = () => {
    setIsMenuAnimating(true);
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setTimeout(() => setIsMenuAnimating(false), 300);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        handleMenuClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <>
      <style jsx>{`
        :root {
          --primary-red: #7e3a41ff;
          --primary-red-hover: #884a51ff;
          --dark-bg: #304356ff;
          --dark-card: #2d2d2d;
          --dark-border: #404040;
        }
        
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .menu-item {
          transform: translateY(30px);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-overlay.active .menu-item {
          transform: translateY(0);
          opacity: 1;
        }

        .menu-overlay.active .menu-item:nth-child(1) { transition-delay: 0.1s; }
        .menu-overlay.active .menu-item:nth-child(2) { transition-delay: 0.15s; }
        .menu-overlay.active .menu-item:nth-child(3) { transition-delay: 0.2s; }
        .menu-overlay.active .menu-item:nth-child(4) { transition-delay: 0.25s; }
        .menu-overlay.active .menu-item:nth-child(5) { transition-delay: 0.3s; }
        .menu-overlay.active .menu-item:nth-child(6) { transition-delay: 0.35s; }

        .triangle-shape {
          position: absolute;
          top: 30%;
          right: 8%;
          width: 0;
          height: 0;
          border-left: 80px solid transparent;
          border-right: 80px solid transparent;
          border-bottom: 140px solid rgba(255, 255, 255, 0.08);
          transform: rotate(-15deg);
          animation: float 8s ease-in-out infinite;
        }

        .triangle-shape-2 {
          position: absolute;
          bottom: 20%;
          left: 6%;
          width: 0;
          height: 0;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
          border-bottom: 100px solid rgba(255, 255, 255, 0.05);
          transform: rotate(25deg);
          animation: float 10s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-15deg); }
          50% { transform: translateY(-15px) rotate(-15deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-header {
            padding: 1rem 0 !important;
          }
          
          .nav-content {
            padding: 0 1rem !important;
            margin-bottom: 0 !important;
          }
          
          .triangle-shape {
            border-left: 50px solid transparent !important;
            border-right: 50px solid transparent !important;
            border-bottom: 90px solid rgba(255, 255, 255, 0.08) !important;
            top: 25% !important;
            right: 5% !important;
          }
          
          .triangle-shape-2 {
            border-left: 40px solid transparent !important;
            border-right: 40px solid transparent !important;
            border-bottom: 70px solid rgba(255, 255, 255, 0.05) !important;
            bottom: 15% !important;
            left: 3% !important;
          }
          
          .menu-item {
            min-width: 260px !important;
            font-size: 1.1rem !important;
          }
          
          .nav-button-group {
            flex-direction: column !important;
            gap: 0.8rem !important;
          }
          
          .nav-button {
            width: 100% !important;
            max-width: 280px !important;
          }
        }

        @media (max-width: 480px) {
          .nav-header {
            padding: 0.8rem 0 !important;
          }
          
          .nav-content {
            padding: 0 0.8rem !important;
            margin-bottom: 0 !important;
          }
          
          .triangle-shape {
            border-left: 35px solid transparent !important;
            border-right: 35px solid transparent !important;
            border-bottom: 60px solid rgba(255, 255, 255, 0.08) !important;
            top: 20% !important;
            right: 3% !important;
          }
          
          .triangle-shape-2 {
            border-left: 30px solid transparent !important;
            border-right: 30px solid transparent !important;
            border-bottom: 50px solid rgba(255, 255, 255, 0.05) !important;
            bottom: 10% !important;
            left: 2% !important;
          }
          
          .menu-item {
            min-width: 240px !important;
            font-size: 1rem !important;
            padding: 0.8rem 2rem !important;
          }
          
          .company-name {
            font-size: 1rem !important;
          }
          
          .logo-container {
            width: 32px !important;
            height: 32px !important;
          }
        }
      `}</style>

      {/* Menu Overlay */}
      {(isMenuOpen || isMenuAnimating) && (
        <div 
          className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={handleMenuClose}
        >
          <button 
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'rgba(126, 58, 65, 0.1)',
              border: '2px solid var(--primary-red)',
              color: 'var(--primary-red)',
              padding: '12px',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onClick={handleMenuClose}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'var(--primary-red)';
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(126, 58, 65, 0.1)';
              e.target.style.color = 'var(--primary-red)';
            }}
          >
            <X size={24} />
          </button>

          <div style={{ textAlign: 'center' }}>
            {navigationItems.map((item, index) => (
              <div
                key={item.name}
                className="menu-item"
                style={{
                  padding: '1rem 2.5rem',
                  margin: '0.5rem 0',
                  color: 'var(--primary-red)',
                  cursor: 'pointer',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  background: 'rgba(126, 58, 65, 0.05)',
                  border: '1px solid rgba(126, 58, 65, 0.1)',
                  minWidth: '280px'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavClick(item.path);
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'rgba(126, 58, 65, 0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(126, 58, 65, 0.05)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {item.icon && <item.icon size={20} />}
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <header className="nav-header" style={{ 
        backgroundColor: 'var(--primary-red)',
        color: 'white',
        padding: '1.2rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Triangle decorative elements */}
        <div className="triangle-shape" />
        <div className="triangle-shape-2" />
        
        {/* Navigation */}
        <div className="nav-content" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
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
            <span className="company-name" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.15rem' }}>
              ZETAWA DARK
            </span>
          </div>
      
          <button 
            style={{
              background: 'none',
              border: '2px solid white',
              color: 'white',
              padding: '8px',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={handleMenuOpen}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = 'var(--primary-red)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
    </>
  );
}

export default Nav;