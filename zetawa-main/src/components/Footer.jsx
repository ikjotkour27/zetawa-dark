import React from 'react'
import img1 from '../assets/vite.png';
import { Link } from 'react-router-dom';
function Footer() {
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
