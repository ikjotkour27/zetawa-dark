import React, { useState } from 'react';
import { ArrowLeft, Download, FileText, Calendar, Users, Bell, TrendingUp, Globe, Award } from 'lucide-react';
import Nav from './Nav';

const PressRelease = () => {
  const [selectedYear, setSelectedYear] = useState('FY2026');

  const pressReleases = {
    'FY2026': [
      {
        id: 1,
        title: 'Action by ED concluded at all locations',
        date: 'July 25, 2025',
        type: 'Official Announcement'
      },
      {
        id: 2,
        title: 'Recent Action by the enforcement agency - No Impact on Reliance Power, its business operations, financial performance, shareholders, employees, or any other stakeholders',
        date: 'July 20, 2025',
        type: 'Business Update'
      },
      {
        id: 3,
        title: '1st Quarter Results FY26',
        date: 'July 15, 2025',
        type: 'Financial Results'
      },
      {
        id: 4,
        title: 'SBI\'s Action on Reliance Communications has No Impact on Reliance Power Limited - July 3, 2025',
        date: 'July 3, 2025',
        type: 'Clarification'
      },
      {
        id: 5,
        title: 'Reliance NU Energies Receives Letter of Award (LOA) from SJVN Limited, a leading Navratna public sector enterprise for ISTS - Connected Solar + Battery Energy Storage System (BESS) Project - May 28, 2025',
        date: 'May 28, 2025',
        type: 'Project Award'
      },
      {
        id: 6,
        title: 'Reliance Power Signs Commercial Term Sheet For Long-term Power Purchase Agreement (PPA) With Green Digital Private Limited (GDL), Bhutan - May 19, 2025',
        date: 'May 19, 2025',
        type: 'Partnership'
      },
      {
        id: 7,
        title: 'Reliance Power Subsidiary, Reliance Nu Energies, Wins Largest Allocation In ISTS-Connected Solar + Battery Energy Storage System (BESS) Tender Issued By Sjvn, A Leading Navratna Public Sector Enterprise - May 12, 2025',
        date: 'May 12, 2025',
        type: 'Tender Win'
      },
      {
        id: 8,
        title: 'Media Release - 4th Quarter Results FY25',
        date: 'April 30, 2025',
        type: 'Financial Results'
      }
    ],
    'FY2025': [
      {
        id: 9,
        title: 'Annual Report FY2025 Released',
        date: 'March 31, 2025',
        type: 'Annual Report'
      },
      {
        id: 10,
        title: 'Board Meeting Announcement for Q4 Results',
        date: 'March 15, 2025',
        type: 'Board Meeting'
      }
    ],
    'FY2024': [
      {
        id: 11,
        title: 'Strategic Partnership Announcement',
        date: 'December 20, 2024',
        type: 'Partnership'
      }
    ],
    'FY2023': [
      {
        id: 12,
        title: 'Major Infrastructure Development Update',
        date: 'November 15, 2023',
        type: 'Development Update'
      }
    ]
  };

  const getTypeColor = (type) => {
    const colors = {
      'Official Announcement': '#7e3a41ff',
      'Business Update': '#4a5568',
      'Financial Results': '#2d3748',
      'Clarification': '#553c9a',
      'Project Award': '#38a169',
      'Partnership': '#d69e2e',
      'Tender Win': '#e53e3e',
      'Annual Report': '#6c757d',
      'Board Meeting': '#ed8936',
      'Development Update': '#3182ce'
    };
    return colors[type] || '#6c757d';
  };

  const handleHomeClick = () => {
    console.log('Navigate to home');
  };

  const stats = [
    { value: Object.values(pressReleases).flat().length.toString(), label: "Total Releases", icon: FileText },
    { value: (pressReleases[selectedYear]?.length || 0).toString(), label: "This Year", icon: TrendingUp },
    { value: "8", label: "Categories", icon: Award },
    { value: "24/7", label: "Media Access", icon: Globe }
  ];

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#304356ff',
      minHeight: '100vh'
    }}>
      <Nav/>

      <style jsx>{`
        :root {
          --primary-red: #7e3a41ff;
          --primary-red-hover: #884a51ff;
          --dark-bg: #304356ff;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>

      {/* Header Section */}
      <header style={{ 
        backgroundColor: 'var(--primary-red)',
        color: 'white',
        padding: '2rem 0',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            Press Release <span style={{color: '#ffebee'}}>Center</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto' }}>
            Stay updated with our latest announcements, developments, and company news
          </p>
        </div>
      </header>

      {/* Stats Section */}
      <section style={{ padding: '3rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
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

      {/* Main Content Section */}
      <section style={{ padding: '3rem 0', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Year Selection Section */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e9ecef',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <h5 style={{ 
                color: '#2d2d2d', 
                marginBottom: '1.5rem', 
                display: 'flex', 
                alignItems: 'center',
                fontSize: '1.2rem',
                fontWeight: '700'
              }}>
                <div style={{
                  backgroundColor: 'rgba(126, 58, 65, 0.1)',
                  borderRadius: '8px',
                  padding: '8px',
                  marginRight: '12px'
                }}>
                  <FileText size={20} style={{ color: 'var(--primary-red)' }} />
                </div>
                Filter by Year
              </h5>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {Object.keys(pressReleases).map((year) => (
                  <div 
                    key={year}
                    style={{
                      padding: '16px 20px',
                      borderRadius: '12px',
                      backgroundColor: selectedYear === year ? 'var(--primary-red)' : 'transparent',
                      color: selectedYear === year ? 'white' : '#666',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: selectedYear === year ? 'none' : '2px solid #f1f3f4',
                      fontWeight: selectedYear === year ? '700' : '600',
                      fontSize: '0.95rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      boxShadow: selectedYear === year ? '0 4px 12px rgba(126, 58, 65, 0.3)' : 'none'
                    }}
                    onClick={() => setSelectedYear(year)}
                    onMouseOver={(e) => {
                      if (selectedYear !== year) {
                        e.currentTarget.style.backgroundColor = 'rgba(126, 58, 65, 0.05)';
                        e.currentTarget.style.borderColor = 'var(--primary-red)';
                        e.currentTarget.style.color = 'var(--primary-red)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (selectedYear !== year) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderColor = '#f1f3f4';
                        e.currentTarget.style.color = '#666';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '12px', fontSize: '1.1rem' }}>📁</span>
                      <span>{year}</span>
                    </div>
                    <span style={{
                      backgroundColor: selectedYear === year ? 'rgba(255, 255, 255, 0.2)' : 'rgba(126, 58, 65, 0.1)',
                      color: selectedYear === year ? 'white' : 'var(--primary-red)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      minWidth: '45px',
                      textAlign: 'center'
                    }}>
                      {pressReleases[year].length}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{
                padding: '16px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-red)', marginBottom: '4px' }}>
                  {Object.values(pressReleases).flat().length}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>
                  Total Press Releases
                </div>
              </div>
            </div>
          </div>

          {/* Press Releases Section */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            border: '1px solid #e9ecef',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{ 
              padding: '2.5rem 2rem',
              background: 'linear-gradient(135deg, var(--primary-red), #8b4049)',
              color: 'white',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="rgba(255,255,255,0.05)" fill-rule="evenodd"%3E%3Cpath d="m0 40l40-40h-40z"/%3E%3C/g%3E%3C/svg%3E")',
                opacity: 0.1
              }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '12px' }}>📋</span>
                  {selectedYear} Press Releases
                </h2>
                <p style={{ margin: '0', opacity: '0.9', fontSize: '1.1rem', fontWeight: '500' }}>
                  {pressReleases[selectedYear]?.length || 0} official announcements and updates
                </p>
              </div>
            </div>

            <div style={{ padding: '0' }}>
              {pressReleases[selectedYear]?.length > 0 ? (
                pressReleases[selectedYear].map((release, index) => (
                  <div 
                    key={release.id}
                    style={{
                      padding: '2rem',
                      borderBottom: index < pressReleases[selectedYear].length - 1 ? '1px solid #f1f3f4' : 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8f9fa';
                      e.currentTarget.style.transform = 'translateX(8px)';
                      const button = e.currentTarget.querySelector('.download-btn');
                      if (button) {
                        button.style.backgroundColor = 'var(--primary-red-hover)';
                        button.style.transform = 'translateY(-2px) scale(1.05)';
                      }
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.transform = 'translateX(0)';
                      const button = e.currentTarget.querySelector('.download-btn');
                      if (button) {
                        button.style.backgroundColor = 'var(--primary-red)';
                        button.style.transform = 'translateY(0) scale(1)';
                      }
                    }}
                  >
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '2rem'
                    }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{ 
                          color: '#2d2d2d', 
                          marginBottom: '1rem', 
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          lineHeight: '1.4',
                          wordWrap: 'break-word'
                        }}>
                          {release.title}
                        </h3>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '1rem', 
                          flexWrap: 'wrap',
                          marginBottom: '0.5rem'
                        }}>
                          <span 
                            style={{ 
                              backgroundColor: getTypeColor(release.type),
                              color: 'white',
                              padding: '6px 16px',
                              borderRadius: '25px',
                              fontSize: '0.8rem',
                              fontWeight: '600',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                            }}
                          >
                            {release.type}
                          </span>
                          <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            color: '#666', 
                            fontSize: '0.95rem',
                            fontWeight: '500'
                          }}>
                            <Calendar size={16} style={{ marginRight: '8px' }} />
                            {release.date}
                          </div>
                        </div>
                      </div>
                      <button 
                        className="download-btn"
                        style={{
                          backgroundColor: 'var(--primary-red)',
                          color: 'white',
                          border: 'none',
                          padding: '12px 24px',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          boxShadow: '0 4px 12px rgba(126, 58, 65, 0.3)',
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}
                      >
                        <Download size={18} />
                        Download PDF
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '5rem 2rem', 
                  color: '#666'
                }}>
                  <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}>
                    <FileText size={48} style={{ color: '#ccc' }} />
                  </div>
                  <h3 style={{ color: '#999', marginBottom: '0.75rem', fontSize: '1.3rem', fontWeight: '600' }}>
                    No releases available
                  </h3>
                  <p style={{ color: '#ccc', margin: '0', fontSize: '1rem' }}>
                    No press releases found for {selectedYear}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Responsive Styles */}
        <style jsx>{`
          @media (max-width: 768px) {
            .year-selection-grid {
              grid-template-columns: 1fr !important;
            }
            
            .release-item-flex {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 1.5rem !important;
            }
            
            .download-btn {
              align-self: flex-start !important;
            }
          }
          
          @media (max-width: 480px) {
            .year-selection-card {
              padding: 1.25rem !important;
            }
            
            .release-header {
              padding: 1.5rem 1rem !important;
            }
            
            .release-item {
              padding: 1.5rem !important;
            }
          }
        `}</style>
      </section>

      {/* Additional Information Section */}
      <section style={{ padding: '3rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              Media Resources
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Additional resources for media representatives and stakeholders
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
                <Bell size={24} style={{ color: 'var(--primary-red)', marginRight: '0.75rem' }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2d2d2d', margin: '0' }}>
                  Latest Release
                </h3>
              </div>
              <p style={{ color: '#2d2d2d', marginBottom: '0.75rem', fontWeight: '500' }}>
                Action by ED concluded at all locations
              </p>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Official announcements regarding recent enforcement directorate actions and their conclusions with no impact on business operations.
              </p>
              <button 
                style={{
                  backgroundColor: 'var(--primary-red)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '500'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--primary-red-hover)';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'var(--primary-red)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Download size={16} />
                Download PDF
              </button>
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
                <Users size={24} style={{ color: 'var(--primary-red)', marginRight: '0.75rem' }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2d2d2d', margin: '0' }}>
                  Media Kit
                </h3>
              </div>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Comprehensive resources including logos, company overview, executive bios, and press materials for media representatives.
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ color: '#666', marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--primary-red)', marginRight: '8px' }}>•</span>
                  Company Logos & Branding Guidelines
                </div>
                <div style={{ color: '#666', marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--primary-red)', marginRight: '8px' }}>•</span>
                  Executive Bios & High-Resolution Photos
                </div>
                <div style={{ color: '#666', marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--primary-red)', marginRight: '8px' }}>•</span>
                  Company Fact Sheets & Overview
                </div>
              </div>
              <button 
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--primary-red)',
                  border: '2px solid var(--primary-red)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: '500'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--primary-red)';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'var(--primary-red)';
                }}
              >
                Access Media Kit
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
                <div style={{ fontSize: '0.9rem', color: '#adb5bd' }}>Press Release Center</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                © 2025 ZETAWA DARK PRIVATE LIMITED. All rights reserved.
              </div>
              <div style={{ fontSize: '0.9rem', color: '#adb5bd' }}>
                Media inquiries: press@zetawadark.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PressRelease;