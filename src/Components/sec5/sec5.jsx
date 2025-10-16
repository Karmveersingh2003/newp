import React, { useEffect, useRef } from 'react';
import './PricingSection.css';

// --- Data for the six commitment cards ---
const commitmentsData = [
  {
    icon: 'ShieldCheck',
    title: 'Unyielding Protection',
    description: 'We build impenetrable digital fortresses, ensuring your assets are protected with the most advanced, proactive security protocols available today.'
  },
  {
    icon: 'Zap',
    title: 'Constant Innovation',
    description: 'The digital landscape evolves, and so do we. We are relentlessly committed to research and development, keeping you ahead of emerging threats.'
  },
  {
    icon: 'Users',
    title: 'Client Partnership',
    description: 'Your security is our mission. We work as an extension of your team, building transparent, long-term partnerships based on trust and mutual success.'
  },
  {
    icon: 'Globe',
    title: 'Global Intelligence',
    description: 'Our systems are powered by a global threat intelligence network, providing unparalleled insight and foresight into potential risks from around the world.'
  },
  {
    icon: 'TrendingUp',
    title: 'Enabling Growth',
    description: 'True security doesn\'t restrict; it empowers. Our solutions are designed to provide a secure foundation, allowing you to innovate and grow with confidence.'
  },
  {
    icon: 'Award',
    title: 'Pursuit of Excellence',
    description: 'We are dedicated to the highest standards of service and performance. Our commitment to excellence is unwavering and is reflected in everything we do.'
  }
];

// Helper to get SVG icons
const getIcon = (iconName) => {
    const icons = {
        ShieldCheck: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
        Zap: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
        Users: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>,
        Globe: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
        TrendingUp: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
        Award: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"/></svg>,
    };
    return icons[iconName] || null;
}

const CommitmentSection = () => {
    const sectionRef = useRef(null);

    // --- JS for Scroll & Parallax Effects ---
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleScroll = () => {
            const { top, height } = section.getBoundingClientRect();
            const scrollProgress = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
            section.style.setProperty('--sec-fivehome-scroll-progress', scrollProgress);

            // Activate cards on scroll
            const cards = section.querySelectorAll('.sec-fivehome-feature-card');
            cards.forEach(card => {
                if (card.getBoundingClientRect().top < window.innerHeight * 0.75) {
                    card.classList.add('is-active');
                }
            });
        };

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth: width, innerHeight: height } = window;
            const xPos = (clientX / width - 0.5) * -30;
            const yPos = (clientY / height - 0.5) * -30;
            section.style.setProperty('--sec-fivehome-mouse-x', `${xPos}px`);
            section.style.setProperty('--sec-fivehome-mouse-y', `${yPos}px`);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id="sec-fivehome-section" ref={sectionRef}>
            <div id="sec-fivehome-sticky-container">
                {/* --- The stunning central 3D Orb --- */}
                <div id="sec-fivehome-orb-visual">
                    <div className="sec-fivehome-orb">
                        <div className="sec-fivehome-orb-core"></div>
                        <div className="sec-fivehome-orb-particle p1"></div>
                        <div className="sec-fivehome-orb-particle p2"></div>
                        <div className="sec-fivehome-orb-particle p3"></div>
                    </div>
                </div>
            </div>

            <div id="sec-fivehome-scrolling-content">
                <div id="sec-fivehome-header">
                    <h2 id="sec-fivehome-title">Our Commitment to Your Security</h2>
                    <p id="sec-fivehome-description">
                        We don't just sell services; we deliver a promise. A promise of unwavering protection, constant innovation, and a true partnership dedicated to securing your digital future.
                    </p>
                </div>
                <div id="sec-fivehome-grid">
                    {commitmentsData.map((item, index) => (
                        <div className="sec-fivehome-feature-card" key={index}>
                            <div className="sec-fivehome-icon-wrapper">{getIcon(item.icon)}</div>
                            <h3 className="sec-fivehome-feature-title">{item.title}</h3>
                            <p className="sec-fivehome-feature-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommitmentSection;
