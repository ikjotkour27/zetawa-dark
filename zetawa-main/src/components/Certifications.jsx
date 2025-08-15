import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Award, Shield, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const [searchCertNumber, setSearchCertNumber] = useState('');
  const [validationResult, setValidationResult] = useState(null);
  const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '' });
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  // Sample certificate data
  const certificates = [
    {
      id: 1,
      certificateNumber: 'ZD2025001',
      internName: 'John Doe',
      course: 'Full Stack Development',
      issueDate: '2025-01-15',
      completionDate: '2025-01-10',
      grade: 'A',
      status: 'Valid',
      mentor: 'Sarah Johnson',
      duration: '3 months'
    },
    {
      id: 2,
      certificateNumber: 'ZD2025002',
      internName: 'Jane Smith',
      course: 'Data Science & Analytics',
      issueDate: '2025-01-18',
      completionDate: '2025-01-12',
      grade: 'A+',
      status: 'Valid',
      mentor: 'Michael Chen',
      duration: '4 months'
    },
    {
      id: 3,
      certificateNumber: 'ZD2025003',
      internName: 'Alex Rodriguez',
      course: 'UI/UX Design',
      issueDate: '2025-01-20',
      completionDate: '2025-01-15',
      grade: 'B+',
      status: 'Valid',
      mentor: 'Emily Davis',
      duration: '3 months'
    },
    {
      id: 4,
      certificateNumber: 'ZD2024050',
      internName: 'Sam Wilson',
      course: 'Mobile App Development',
      issueDate: '2024-12-15',
      completionDate: '2024-12-10',
      grade: 'A',
      status: 'Expired',
      mentor: 'David Lee',
      duration: '3 months'
    }
  ];

  const handleValidation = () => {
    if (!searchCertNumber.trim()) {
      setValidationResult({
        type: 'error',
        message: 'Please enter a certificate number'
      });
      return;
    }

    const certificate = certificates.find(cert => 
      cert.certificateNumber.toLowerCase() === searchCertNumber.toLowerCase()
    );

    if (certificate) {
      setValidationResult({
        type: 'success',
        message: 'Certificate found and validated!',
        data: certificate
      });
    } else {
      setValidationResult({
        type: 'error',
        message: 'Certificate not found. Please check the certificate number.'
      });
    }
  };

  const handleAdminLogin = () => {
    if (adminCredentials.username === 'admin' && adminCredentials.password === 'admin123') {
      setIsAdminLoggedIn(true);
      setShowAdminLogin(false);
    } else {
      alert('Invalid credentials');
    }
  };

  const resetSearch = () => {
    setSearchCertNumber('');
    setValidationResult(null);
  };

  const CertificateImage = ({ certificate }) => (
    <div style={{
      background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
      border: '8px solid var(--primary-red)',
      borderRadius: '15px',
      padding: '40px',
      color: '#000',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
      boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
    }}>
      <div style={{ borderBottom: '3px solid var(--primary-red)', paddingBottom: '20px', marginBottom: '30px' }}>
        <h2 style={{ color: 'var(--primary-red)', fontWeight: 'bold', margin: '0' }}>ZETAWA DARK</h2>
        <p style={{ color: '#666', fontSize: '14px', margin: '15px 0 0 0' }}>Certificate of Completion</p>
      </div>
      
      <div style={{ margin: '30px 0' }}>
        <p style={{ fontSize: '16px', color: '#666', margin: '10px 0' }}>This is to certify that</p>
        <h3 style={{ fontSize: '2rem', color: '#333', fontWeight: 'bold', margin: '15px 0' }}>
          {certificate.internName}
        </h3>
        <p style={{ fontSize: '16px', color: '#666', margin: '10px 0' }}>has successfully completed</p>
        <h4 style={{ fontSize: '1.5rem', color: 'var(--primary-red)', fontWeight: '600', margin: '15px 0' }}>
          {certificate.course}
        </h4>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', fontSize: '14px', color: '#666' }}>
        <div>
          <p><strong>Certificate No:</strong> {certificate.certificateNumber}</p>
          <p><strong>Grade:</strong> {certificate.grade}</p>
        </div>
        <div>
          <p><strong>Date:</strong> {certificate.completionDate}</p>
          <p><strong>Duration:</strong> {certificate.duration}</p>
        </div>
      </div>

      <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #eee' }}>
        <p style={{ fontSize: '12px', color: '#999' }}>
          Mentor: {certificate.mentor} | Authorized by ZETAWA DARK
        </p>
      </div>
    </div>
  );

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#304356ff',
      minHeight: '100vh'
    }}>
      
      {/* Header */}
      <header style={{ 
        backgroundColor: 'var(--primary-red)',
        color: 'white',
        padding: '4rem 0',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* <button 
            onClick={() => window.history.back()}
            style={{
              position: 'absolute',
              top: '2rem',
              left: '2rem',
              backgroundColor: 'rgba(169, 104, 104, 0.2)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          >
            <ArrowLeft size={20} />
            Back to Home
          </button> */}

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              ZETAWA DARK
            </h1>
            <p style={{ fontSize: '1.5rem', opacity: '0.9', marginBottom: '0.5rem' }}>
              Certificate Verification Portal
            </p>
            <p style={{ fontSize: '1.1rem', opacity: '0.8', maxWidth: '600px', margin: '0 auto' }}>
              Validate your internship completion certificate with our secure verification system
            </p>
          </div>
        </div>
      </header>

      {/* Certificate Validation Section */}
      <section className="section-padding" style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏆</div>
            <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              Verify Your Certificate
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Enter your certificate number below to verify authenticity and view your official certificate
            </p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '3rem',
              borderRadius: '15px',
              border: '1px solid #e9ecef',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ 
                  display: 'block',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#2d2d2d',
                  marginBottom: '0.5rem'
                }}>
                  Certificate Number
                </label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    placeholder="Enter certificate number (e.g., ZD2025001)"
                    value={searchCertNumber}
                    onChange={(e) => setSearchCertNumber(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleValidation()}
                    style={{
                      flex: '1',
                      minWidth: '250px',
                      padding: '1rem 1.5rem',
                      border: '2px solid #e9ecef',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                    onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  />
                  <button
                    onClick={handleValidation}
                    style={{
                      backgroundColor: 'var(--primary-red)',
                      color: 'white',
                      border: 'none',
                      padding: '1rem 2rem',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-red-hover)'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-red)'}
                  >
                    <Shield size={20} />
                    Verify Certificate
                  </button>
                </div>
              </div>

              {validationResult && (
                <div style={{
                  padding: '1.5rem',
                  borderRadius: '10px',
                  border: `2px solid ${validationResult.type === 'success' ? '#28a745' : '#dc3545'}`,
                  backgroundColor: validationResult.type === 'success' ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {validationResult.type === 'success' ? 
                      <CheckCircle size={24} style={{ color: '#28a745' }} /> :
                      <MessageSquare size={24} style={{ color: '#dc3545' }} />
                    }
                    <span style={{ 
                      color: validationResult.type === 'success' ? '#28a745' : '#dc3545',
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      {validationResult.message}
                    </span>
                  </div>
                  <button 
                    onClick={resetSearch}
                    style={{ 
                      background: 'transparent', 
                      border: 'none', 
                      color: 'inherit',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      padding: '0.25rem',
                      borderRadius: '4px'
                    }}
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Display */}
      {validationResult?.data && validationResult.data.status === 'Valid' && (
        <section className="section-padding" style={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
                Your Official Certificate
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#666' }}>
                Congratulations! Your certificate has been successfully verified
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              padding: '3rem', 
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef'
            }}>
              <CertificateImage certificate={validationResult.data} />
            </div>
          </div>
        </section>
      )}

      {/* Admin Section */}
      <section className="section-padding" style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(126, 58, 65, 0.1), rgba(45, 45, 45, 0.05))',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid #e9ecef'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <User size={48} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
              <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
                Administrator Access
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Access the admin panel to manage certificates, view analytics, and oversee the verification system
              </p>
            </div>

            {!isAdminLoggedIn && !showAdminLogin && (
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => setShowAdminLogin(true)}
                  style={{
                    backgroundColor: 'var(--primary-red)',
                    color: 'white',
                    border: 'none',
                    padding: '1.25rem 2.5rem',
                    borderRadius: '10px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-red-hover)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-red)'}
                >
                  Admin Login
                </button>
              </div>
            )}

            {showAdminLogin && !isAdminLoggedIn && (
              <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '2.5rem',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '2rem' }}>
                    Admin Login
                  </h3>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <input
                      type="text"
                      placeholder="Username"
                      value={adminCredentials.username}
                      onChange={(e) => setAdminCredentials({...adminCredentials, username: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '1rem 1.5rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                  </div>
                  <div style={{ marginBottom: '2rem' }}>
                    <input
                      type="password"
                      placeholder="Password"
                      value={adminCredentials.password}
                      onChange={(e) => setAdminCredentials({...adminCredentials, password: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '1rem 1.5rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button 
                      onClick={handleAdminLogin}
                      style={{
                        flex: '1',
                        backgroundColor: 'var(--primary-red)',
                        color: 'white',
                        border: 'none',
                        padding: '1rem',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-red-hover)'}
                      onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-red)'}
                    >
                      Login
                    </button>
                    <button 
                      onClick={() => setShowAdminLogin(false)}
                      style={{
                        flex: '1',
                        backgroundColor: 'transparent',
                        color: '#666',
                        border: '2px solid #e9ecef',
                        padding: '1rem',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#f8f9fa';
                        e.target.style.borderColor = '#dee2e6';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderColor = '#e9ecef';
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <small style={{ color: '#888', fontSize: '0.9rem' }}>
                      Demo credentials: admin / admin123, Try: ZD2025001
                    </small>
                  </div>
                </div>
              </div>
            )}

            {isAdminLoggedIn && (
              <div>
                {/* Admin Statistics */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '2rem',
                  marginBottom: '3rem'
                }}>
                  {[
                    { value: certificates.length, label: 'Total Certificates', color: 'var(--primary-red)' },
                    { value: certificates.filter(c => c.status === 'Valid').length, label: 'Valid Certificates', color: '#28a745' },
                    { value: certificates.filter(c => c.status === 'Expired').length, label: 'Expired Certificates', color: '#ffc107' },
                    { value: new Set(certificates.map(c => c.course)).size, label: 'Active Courses', color: '#17a2b8' }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '15px',
                        textAlign: 'center',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                        border: '1px solid #e9ecef',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <div style={{ fontSize: '2.5rem', fontWeight: '700', color: stat.color, marginBottom: '0.5rem' }}>
                        {stat.value}
                      </div>
                      <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#2d2d2d', margin: '0' }}>
                        {stat.label}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Admin Table */}
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ 
                    backgroundColor: 'var(--primary-red)', 
                    color: 'white',
                    padding: '1.5rem 2rem'
                  }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', margin: '0' }}>
                      Certificate Management
                    </h2>
                  </div>
                  
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f8f9fa' }}>
                          {['Certificate #', 'Intern Name', 'Course', 'Completion Date', 'Grade', 'Mentor', 'Status'].map((header) => (
                            <th key={header} style={{
                              padding: '1rem',
                              textAlign: 'left',
                              fontWeight: '600',
                              color: '#2d2d2d',
                              borderBottom: '2px solid #e9ecef'
                            }}>
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {certificates.map((cert) => (
                          <tr key={cert.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                            <td style={{ padding: '1rem', color: 'var(--primary-red)', fontWeight: '600' }}>
                              {cert.certificateNumber}
                            </td>
                            <td style={{ padding: '1rem', color: '#2d2d2d', fontWeight: '500' }}>
                              {cert.internName}
                            </td>
                            <td style={{ padding: '1rem', color: '#666' }}>{cert.course}</td>
                            <td style={{ padding: '1rem', color: '#666' }}>{cert.completionDate}</td>
                            <td style={{ padding: '1rem', color: '#2d2d2d', fontWeight: '600' }}>{cert.grade}</td>
                            <td style={{ padding: '1rem', color: '#666' }}>{cert.mentor}</td>
                            <td style={{ padding: '1rem' }}>
                              <span style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                backgroundColor: cert.status === 'Valid' ? '#d4edda' : '#fff3cd',
                                color: cert.status === 'Valid' ? '#155724' : '#856404'
                              }}>
                                {cert.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                  <button 
                    onClick={() => {
                      setIsAdminLoggedIn(false);
                      setAdminCredentials({ username: '', password: '' });
                    }}
                    style={{
                      backgroundColor: 'transparent',
                      color: '#666',
                      border: '2px solid #e9ecef',
                      padding: '1rem 2rem',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#f8f9fa';
                      e.target.style.borderColor = '#dee2e6';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.borderColor = '#e9ecef';
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
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
          <p style={{ marginBottom: '1rem', fontSize: '1rem' }}>
            © 2025 ZETAWA DARK. All rights reserved.
          </p>
          <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
            Secure certificate verification system powered by advanced technology.
          </p>
        </div>
      </footer>

      <style>{`
        :root {
          --primary-red: #7e3a41ff;
          --primary-red-hover: #884a51ff;
        }
        
        * {
          box-sizing: border-box;
          margin:0px;
        }
        
        button:focus,
        input:focus {
          outline: none;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .section-padding {
            padding: 3rem 0 !important;
          }
          
          .section-title {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Certifications;