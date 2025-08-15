import React, { useState } from 'react';
import { SiGmail } from "react-icons/si";
import image from '../assets/image.png';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase,  
  Award, 
  Users, 
  Target,
  ArrowLeft,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from 'lucide-react';

const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const adminData = {
    name: "Tabrez Alam",
    position: "Chief Executive Officer",
    department: "Executive Leadership",
    email: "tabrez.zeta@gmail.com",
    phone: "+91 70042 65718",
    location: " Dhaka Champaran district , Bihar, India",
    joinDate: "January 2023",
    // employeeId: "ZD001",
    profileImage: image, // Assuming you have an image in your assets folder
    bio: "Tabrez Alam: The Rising Star of NIT Srinagar and a Beacon of Generosity . In a world where personal achievements often take center stage, Tabrez Alam, an 8th-semester student from the Department of Information Technology at NIT Srinagar, is making headlines for not just his success but his selflessness. Hailing from Dhaka Champaran district in Bihar, Tabrez has become an inspiration for his peers with his extraordinary achievements and his commitment to giving back to society.",
    experience: [
      {
        title: "Chief Executive Officer",
        company: "ZETAWA DARK PRIVATE LIMITED",
        period: "Nov 2024 - Present",
        description: "Leading the company's strategic vision and overseeing all operations, driving growth and innovation across all business units."
      }
      // {
      //   title: "Senior Vice President",
      //   company: "TechVision Solutions",
      //   period: "Mar 2015 - Dec 2019",
      //   description: "Managed multiple product lines and led cross-functional teams to deliver cutting-edge technology solutions."
      // },
      // {
      //   title: "Director of Operations",
      //   company: "InnovateTech Corp",
      //   period: "Jun 2012 - Feb 2015",
      //   description: "Streamlined operations and implemented process improvements that resulted in 40% efficiency gains."
      // }
    ],
    qualifications: [
      "National Institute of Technology, Srinagar - B.Tech in Information Technology",
      "Resonance Eduventures Limited ",
      "W3webschool",
      // "Six Sigma Black Belt Certification"
    ],
    achievements:[
    "Identified a critical bug in the MobiKwik digital payment application",
    "Earned a ₹1 lakh cash prize under the Responsible Disclosure Program",
    "Received a certificate of appreciation from MobiKwik"
  ],
    responsibilities: [
      "Strategic planning and business development",
      "Board relations and investor communications",
      "Executive team leadership and mentoring",
      "Corporate governance and compliance oversight",
      "Public relations and stakeholder management"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/tabrez-alam-59b6b61b3/"
      // twitter: "https://twitter.com/johndanderson",
      // github: "https://github.com/johndanderson"
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'responsibilities', label: 'Responsibilities', icon: Target },
    { id: 'achievements', label: 'Achievements', icon: Award }
  ];

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#ffffffff',
      minHeight: '100vh',
      // padding: '2rem 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0.25rem' }}>
        {/* <button 
          onClick={() => window.history.back()}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#7e3a41ff',
            backgroundColor: 'transparent',
            border: 'none',
            marginBottom: '2rem',
            fontWeight: '500',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.color = '#884a51ff'}
          onMouseOut={(e) => e.target.style.color = '#7e3a41ff'}
        >
          <ArrowLeft size={20} />
          ZETAWA DARK
        </button> */}
        
        {/* Profile Header */}
        <div style={{
          background: 'linear-gradient(135deg, #7e3a41ff, #884a51ff)',
          borderRadius: '12px',
          padding: '3rem 2rem',
          marginBottom: '4rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><defs><pattern id=\'grain\' width=\'100\' height=\'100\' patternUnits=\'userSpaceOnUse\'><circle cx=\'50\' cy=\'50\' r=\'0.5\' fill=\'rgba(255,255,255,0.1)\'/></pattern></defs><rect width=\'100\' height=\'100\' fill=\'url(%23grain)\'/></svg>")',
            opacity: 0.1
          }} />
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'auto 1fr', 
            gap: '2rem', 
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}>
           <div
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '4px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden' // important to make the image stay inside the circle
          }}
        >
          <img
            src={adminData.profileImage} // "/image.png" from your public folder
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

            
            <div>
              <h1 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                {adminData.name}
              </h1>
              <p style={{ 
                fontSize: '1.25rem', 
                marginBottom: '0.5rem',
                opacity: '0.9'
              }}>
                {adminData.position}
              </p>
              <p style={{ 
                marginBottom: '1.5rem',
                opacity: '0.8'
              }}>
                Employee ID: {adminData.employeeId}
              </p>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} />
                  <span>{adminData.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} />
                  <span>{adminData.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} />
                  <span>{adminData.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} />
                  <span>Joined {adminData.joinDate}</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[
                  { icon: <Linkedin size={20} />, link: adminData.socialLinks.linkedin },
                  { icon: <Instagram size={20} />, link: adminData.socialLinks.twitter },
                 { icon: <SiGmail size={20} />, link: adminData.socialLinks.gmail }

                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        transition: 'transform 0.3s ease, color 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        // e.target.style.color = '#000000ff'; // Example: change icon color
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      {item.icon}
                    </span>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          {/* Tab Buttons */}
          <div style={{ 
            display: 'flex', 
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #e9ecef'
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  padding: '1.5rem 0.3rem',
                  backgroundColor: activeTab === tab.id ? '#7e3a41ff' : 'transparent',
                  border: 'none',
                  color: activeTab === tab.id ? 'white' : '#666',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontWeight: '500',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.backgroundColor = '#e9ecef';
                    e.target.style.color = '#2d2d2d';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#666';
                  }
                }}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div style={{ padding: '3rem 2rem' }}>
            {activeTab === 'overview' && (
              <div>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '600', 
                  marginBottom: '2rem',
                  color: '#2d2d2d'
                }}>
                  Professional Overview
                </h2>
                <div style={{ marginBottom: '3rem' }}>
                  <p style={{ 
                    lineHeight: '1.7', 
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    {adminData.bio}
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
                    border: '1px solid #e9ecef'
                  }}>
                    <h3 style={{ 
                      color: '#7e3a41ff', 
                      marginBottom: '1.5rem',
                      fontSize: '1.3rem',
                      fontWeight: '600'
                    }}>
                      Contact Information
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div>
                        <strong style={{ color: '#2d2d2d' }}>Email:</strong> {adminData.email}
                      </div>
                      <div>
                        <strong style={{ color: '#2d2d2d' }}>Phone:</strong> {adminData.phone}
                      </div>
                      <div>
                        <strong style={{ color: '#2d2d2d' }}>Location:</strong> {adminData.location}
                      </div>
                      <div>
                        <strong style={{ color: '#2d2d2d' }}>Department:</strong> {adminData.department}
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '2rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    border: '1px solid #e9ecef'
                  }}>
                    <h3 style={{ 
                      color: '#7e3a41ff', 
                      marginBottom: '1.5rem',
                      fontSize: '1.3rem',
                      fontWeight: '600'
                    }}>
                      Qualifications
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {adminData.qualifications.map((qual, index) => (
                        <div key={index} style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '0.5rem',
                          color: '#666'
                        }}>
                          <span style={{ color: '#7e3a41ff', fontWeight: 'bold' }}>•</span>
                          {qual}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'experience' && (
              <div>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '600', 
                  marginBottom: '2rem',
                  color: '#2d2d2d'
                }}>
                  Professional Experience
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {adminData.experience.map((exp, index) => (
                    <div key={index} style={{
                      padding: '2rem',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      border: '1px solid #e9ecef',
                      borderLeft: '4px solid #7e3a41ff'
                    }}>
                      <h3 style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: '600', 
                        marginBottom: '0.5rem',
                        color: '#2d2d2d'
                      }}>
                        {exp.title}
                      </h3>
                      <div style={{ 
                        color: '#7e3a41ff', 
                        fontWeight: '500', 
                        marginBottom: '0.25rem',
                        fontSize: '1.1rem'
                      }}>
                        {exp.company}
                      </div>
                      <div style={{ 
                        color: '#666', 
                        fontSize: '0.95rem', 
                        marginBottom: '1rem' 
                      }}>
                        {exp.period}
                      </div>
                      <p style={{ 
                        color: '#555', 
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'responsibilities' && (
              <div>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '600', 
                  marginBottom: '2rem',
                  color: '#2d2d2d'
                }}>
                  Key Responsibilities
                </h2>
                <div style={{
                  padding: '2rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{ 
                    color: '#7e3a41ff', 
                    marginBottom: '1.5rem',
                    fontSize: '1.3rem',
                    fontWeight: '600'
                  }}>
                    Primary Duties
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {adminData.responsibilities.map((resp, index) => (
                      <div key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '0.75rem',
                        color: '#666',
                        fontSize: '1.05rem'
                      }}>
                        <span style={{ 
                          color: '#7e3a41ff', 
                          fontWeight: 'bold',
                          fontSize: '1.2rem'
                        }}>
                          •
                        </span>
                        {resp}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'achievements' && (
              <div>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '600', 
                  marginBottom: '2rem',
                  color: '#2d2d2d'
                }}>
                  Key Achievements
                </h2>
                <div style={{
                  padding: '2rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{ 
                    color: '#7e3a41ff', 
                    marginBottom: '1.5rem',
                    fontSize: '1.3rem',
                    fontWeight: '600'
                  }}>
                    Notable Accomplishments
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {adminData.achievements.map((achievement, index) => (
                      <div key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '0.75rem',
                        color: '#666',
                        fontSize: '1.05rem'
                      }}>
                        <span style={{ 
                          color: '#7e3a41ff', 
                          fontWeight: 'bold',
                          fontSize: '1.2rem'
                        }}>
                          •
                        </span>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        @media (max-width: 768px) {
          .profile-header > div {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 1.5rem;
          }
          
          .profile-header h1 {
            font-size: 2rem !important;
          }
          
          .tab-buttons {
            flex-direction: column;
          }
          
          .tab-button {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminProfile;