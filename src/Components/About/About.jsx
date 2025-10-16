import React, { useEffect, useRef } from 'react';
import './App.css';

// --- Data for the page (easy to update) ---
const teamData = [
  { name: 'Eleanor Vance', title: 'CEO & Founder', bio: 'With over 20 years of experience, Eleanor is a visionary in cybersecurity, dedicated to building a safer digital world.', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Marcus Thorne', title: 'Chief Technology Officer', bio: 'Marcus is the architectural genius behind our innovative security platform, constantly pushing the boundaries of what\'s possible.', image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Jenna Sterling', title: 'Head of Operations', bio: 'Jenna ensures that our world-class services are delivered flawlessly, managing our global team with precision and care.', image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600' }
];

const timelineData = [
  { year: '2015', title: 'Company Founded', description: 'Our journey began with a clear mission: to redefine digital security for the modern enterprise.' },
  { year: '2018', title: 'First 100 Clients', description: 'We celebrated a major milestone, earning the trust of one hundred innovative businesses.' },
  { year: '2021', title: 'Global Expansion', description: 'Opened our first international office, expanding our reach and threat intelligence capabilities.' },
  { year: '2024', title: 'Innovation Award', description: 'Recognized by the industry for our groundbreaking contributions to proactive threat detection.' }
];

const AboutPage = () => {
    const sectionRef = useRef(null);

    // --- JS for scroll-based animations ---
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = sectionRef.current.querySelectorAll('.about-us-page-animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div id="about-us-page-wrapper" ref={sectionRef}>

            {/* --- Section 1: Hero --- */}
            <section id="about-us-page-hero">
                <div className="about-us-page-hero-bg"></div>
                <div className="about-us-page-container">
                    <h1 className="about-us-page-hero-title">
                        <span>The Architects of Your</span>
                        <span>Digital Peace of Mind</span>
                    </h1>
                    <p className="about-us-page-hero-subtitle">We are more than a security company. We are a team of innovators, strategists, and partners dedicated to building a safer, more resilient digital world for everyone.</p>
                </div>
            </section>

            {/* --- Section 2: Mission & Vision --- */}
            <section id="about-us-page-mission" className="about-us-page-animate-on-scroll">
                <div className="about-us-page-container">
                    <div className="about-us-page-mission-grid">
                        <div className="about-us-page-mission-content">
                            <h3>Our Mission</h3>
                            <p>To provide the most advanced, proactive, and accessible cybersecurity solutions, empowering businesses of all sizes to grow fearlessly in an increasingly complex digital landscape.</p>
                        </div>
                        <div className="about-us-page-mission-content">
                            <h3>Our Vision</h3>
                            <p>To create a future where digital trust is absolute, where innovation can flourish without the threat of compromise, and where every organization is equipped to defend itself against any challenge.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 3: Meet the Team --- */}
            <section id="about-us-page-team">
                <div className="about-us-page-container about-us-page-animate-on-scroll">
                    <h2 className="about-us-page-section-title">The Minds Behind the Mission</h2>
                    <div id="about-us-page-team-grid">
                        {teamData.map((member, index) => (
                            <div className="about-us-page-team-card" key={index}>
                                <div className="about-us-page-team-card-inner">
                                    <div className="about-us-page-team-card-front">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <div className="about-us-page-team-card-back">
                                        <h4>{member.name}</h4>
                                        <h5>{member.title}</h5>
                                        <p>{member.bio}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Section 4: Our Journey (Timeline) --- */}
            <section id="about-us-page-journey">
                <div className="about-us-page-container about-us-page-animate-on-scroll">
                    <h2 className="about-us-page-section-title">Our Journey So Far</h2>
                    <div id="about-us-page-timeline">
                        {timelineData.map((item, index) => (
                            <div className="about-us-page-timeline-item" key={index}>
                                <div className="about-us-page-timeline-dot"></div>
                                <div className="about-us-page-timeline-content">
                                    <div className="about-us-page-timeline-year">{item.year}</div>
                                    <h4 className="about-us-page-timeline-title">{item.title}</h4>
                                    <p className="about-us-page-timeline-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Section 5: Call to Action --- */}
            <section id="about-us-page-cta">
                <div className="about-us-page-container about-us-page-animate-on-scroll">
                    <h2>Ready to Build a Secure Future?</h2>
                    <p>Become part of our story. Let's work together to create a safer digital environment for your business and your customers.</p>
                    <a href="#contact" className="about-us-page-cta-button">Partner With Us</a>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;