import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MapPin, Clock, Users, Award, ArrowRight, Mail, Phone } from 'lucide-react';
import Nav from './Nav';
import img1 from '../assets/manjeet.jpg';
import img2 from '../assets/someone.jpg'

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [activeTab, setActiveTab] = useState('culture');

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Technology",
      location: "Remote",
     type: "Full-time / Intern",
      experience: "Freshers / 0-2 years",
      description: "Lead development of enterprise applications using modern technologies. Work with cross-functional teams to deliver high-quality solutions.",
      requirements: ["Bachelor's in Computer Science", "Fresher", "Proficiency in React, Node.js", "Experience with cloud platforms"]
    },
    {
      id: 2,
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
    type: "Full-time / Intern",
      experience: "Freshers / 0-2 years",
      description: "Analyze complex datasets to drive business insights and develop machine learning models for predictive analytics.",
      requirements: ["Master's in Data Science/Statistics", "Python, R expertise", "ML/AI experience", "Strong analytical skills"]
    },
    {
      id: 3,
      title: "UX Designer",
      department: "Design",
      location: "Remote",
     type: "Full-time / Intern",
      experience: "Freshers / 0-2 years",
      description: "Design intuitive user experiences for digital products. Collaborate with product teams to create user-centered designs.",
      requirements: ["Bachelor's in Design", "Figma, Adobe Creative Suite", "User research experience", "Portfolio required"]
    },
    {
      id: 4,
      title: "Business Analyst",
      department: "Strategy",
      location: "Remote",
      type: "Full-time / Intern",
      experience: "Freshers / 0-2 years",
      description: "Analyze business processes and requirements to drive strategic initiatives and operational improvements.",
      requirements: ["MBA or equivalent", "Business analysis experience", "Strong communication skills", "Process improvement knowledge"]
    }
  ];

  const internships = [
    {
      title: "Software Development Intern",
      duration: "3-6 months",
      department: "Technology",
      description: "Work on real projects with mentorship from senior developers."
    },
    {
      title: "Data Analytics Intern",
      duration: "3-6 months", 
      department: "Analytics",
      description: "Gain hands-on experience with data analysis and visualization tools."
    },
    {
      title: "Digital Marketing Intern",
      duration: "3-6 months",
      department: "Marketing",
      description: "Support digital marketing campaigns and content creation initiatives."
    }
  ];

  const testimonials = [
    {
      name: "Manjeet Kumaar",
      role: "Robotics Engineer",
      department: "Technology",
      quote: "Zetawa Dark Private Limited, a company making a difference in the software industry. Founded by visionary Tabrej Zeta, it provides real-world project experience to new college students, nurturing young talent and empowering them to build innovative solutions. With a focus on innovation, teamwork, and mentorship, Zetawa Dark is shaping the next generation of tech leaders. I've seen its impact firsthand and can confidently say it's one of the best companies out there. Kudos to Tabrej Zeta and the team for creating an incredible opportunity for students and professionals alike!",
      image: img1
    },
    {
      name: "Rahul Mehta",
      role: "Data Scientist",
      department: "Analytics", 
      quote: "The unique vision and collective effort makes  this company a great place to work and very good for the personal and professional growth of an individual.",
      image: img2
    }
  ];

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
   <>
   
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#304356ff',
      minHeight: '100vh'
    }}>
      <Nav/>
      
      {/* Header */}
      <header style={{ 
        backgroundColor: 'var(--primary-red)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            Build Your Career With Us
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto' }}>
            Join a team of innovators, creators, and problem-solvers who are shaping the future of technology
          </p>
        </div>
      </header>

      {/* Company Culture Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              Our Culture & Values
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              We believe in fostering an environment where innovation thrives, diversity is celebrated, and every voice matters.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['culture', 'benefits', 'growth'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '50px',
                  backgroundColor: activeTab === tab ? 'var(--primary-red)' : '#f1f3f4',
                  color: activeTab === tab ? 'white' : '#666',
                  cursor: 'pointer',
                  fontWeight: '500',
                  textTransform: 'capitalize',
                  transition: 'all 0.3s ease'
                }}
              >
                {tab === 'culture' ? 'Our Culture' : tab === 'benefits' ? 'Benefits' : 'Growth'}
              </button>
            ))}
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {activeTab === 'culture' && (
              <>
                <div style={{ 
                  padding: '2rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <Users size={40} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2d2d2d' }}>
                    Collaborative Environment
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Work alongside talented professionals in cross-functional teams that encourage knowledge sharing and collective problem-solving.
                  </p>
                </div>
                <div style={{ 
                  padding: '2rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <Award size={40} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2d2d2d' }}>
                    Innovation First
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    We encourage creative thinking and provide resources to turn innovative ideas into reality through dedicated innovation time and hackathons.
                  </p>
                </div>
              </>
            )}
            
            {activeTab === 'benefits' && (
              <>
                <div style={{ 
                  padding: '2rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2d2d2d' }}>
                    Health & Wellness
                  </h3>
                  <ul style={{ color: '#666', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                    <li>Comprehensive health insurance</li>
                    <li>Mental health support programs</li>
                    <li>On-site fitness facilities</li>
                    <li>Flexible working arrangements</li>
                  </ul>
                </div>
                <div style={{ 
                  padding: '2rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2d2d2d' }}>
                    Financial Benefits
                  </h3>
                  <ul style={{ color: '#666', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                    <li>Competitive salary packages</li>
                    <li>Performance-based bonuses</li>
                    <li>Employee stock options</li>
                    <li>Retirement savings plans</li>
                  </ul>
                </div>
              </>
            )}
            
            {activeTab === 'growth' && (
              <>
                <div style={{ 
                  padding: '2rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2d2d2d' }}>
                    Learning & Development
                  </h3>
                  <ul style={{ color: '#666', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                    <li>Annual learning budget</li>
                    <li>Certification programs</li>
                    <li>Internal training workshops</li>
                    <li>Conference attendance support</li>
                  </ul>
                </div>
                <div style={{ 
                  padding: '2rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2d2d2d' }}>
                    Career Progression
                  </h3>
                  <ul style={{ color: '#666', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                    <li>Clear career pathways</li>
                    <li>Mentorship programs</li>
                    <li>Leadership development</li>
                    <li>Cross-functional opportunities</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              Current Job Openings
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Discover opportunities that match your skills and passion
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: expandedJob === job.id ? '0 8px 25px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)'
                }}
              >
                <div
                  style={{
                    padding: '2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                  onClick={() => toggleJob(job.id)}
                >
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '0.5rem' }}>
                      {job.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666' }}>
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666' }}>
                        <Clock size={16} />
                        {job.type}
                      </span>
                      <span style={{ color: 'var(--primary-red)', fontWeight: '500' }}>
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <div style={{ color: 'var(--primary-red)' }}>
                    {expandedJob === job.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                  </div>
                </div>

                {expandedJob === job.id && (
                  <div style={{ 
                    padding: '0 2rem 2rem 2rem',
                    borderTop: '1px solid #e9ecef',
                    backgroundColor: '#f8f9fa'
                  }}>
                    <div style={{ paddingTop: '2rem' }}>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: '#2d2d2d' }}>
                        Job Description
                      </h4>
                      <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '2rem' }}>
                        {job.description}
                      </p>
                      
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: '#2d2d2d' }}>
                        Requirements
                      </h4>
                      <ul style={{ color: '#666', lineHeight: '1.8', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                      
                      <button
                        style={{
                          backgroundColor: 'var(--primary-red)',
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
                        onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-red-hover)'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-red)'}
                      >
                        Apply Now
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              Internship Opportunities
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Kickstart your career with hands-on experience and mentorship
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {internships.map((internship, index) => (
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
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
                  {internship.title}
                </h3>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ 
                    backgroundColor: 'var(--primary-red)', 
                    color: 'white', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '20px', 
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {internship.department}
                  </span>
                  <span style={{ 
                    backgroundColor: '#e9ecef', 
                    color: '#666', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '20px', 
                    fontSize: '0.9rem'
                  }}>
                    {internship.duration}
                  </span>
                </div>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '2rem' }}>
                  {internship.description}
                </p>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--primary-red)',
                    border: '2px solid var(--primary-red)',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
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
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              What Our Team Says
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Hear from our employees about their experiences working with us
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}
              >
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: '#2d2d2d', 
                  lineHeight: '1.6', 
                  marginBottom: '2rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '0.25rem' }}>
                      {testimonial.name}
                    </h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>
                      {testimonial.role} • {testimonial.department}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              Application Process
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Simple steps to join our team
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              { step: '01', title: 'Submit Application', description: 'Apply online with your resume and cover letter' },
              { step: '02', title: 'Initial Screening', description: 'HR review and initial phone/video screening' },
              { step: '03', title: 'Technical Assessment', description: 'Skills-based evaluation relevant to the position' },
              { step: '04', title: 'Final Interview', description: 'Meet the team and discuss role expectations' },
              { step: '05', title: 'Offer & Onboarding', description: 'Welcome to the team! Complete onboarding process' }
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'var(--primary-red)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  margin: '0 auto 1rem auto'
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.5', fontSize: '0.95rem' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '3rem', 
            borderRadius: '12px', 
            textAlign: 'center',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              Ready to Apply?
            </h3>
            <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Take the first step towards an exciting career with us
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                style={{
                  backgroundColor: 'var(--primary-red)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-red-hover)'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-red)'}
              >
                <Mail size={20} />
                hr@dark.zetawa.com
              </button>
              <button
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--primary-red)',
                  border: '2px solid var(--primary-red)',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
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
                <Phone size={20} />
                +91 70042 65718
              </button>
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
            Equal opportunity employer committed to diversity and inclusion.
          </p>
        </div>
      </footer>

      <style jsx>{`
        *{
          margin:0px  ;      
          backgroundColor: #7e3a41ff
        }
        :root {
          --primary-red: #7e3a41ff;
          --primary-red-hover: #884a51ff;
          --dark-bg: #b9adadff;
          --dark-card: #2d2d2d;
          --dark-border: #404040;
        }
      `}</style>
    </div>
   </>
  );
};

export default Careers;