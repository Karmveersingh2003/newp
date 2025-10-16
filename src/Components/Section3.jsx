import React, { useEffect, useRef } from 'react';
import './Section3.css';

// --- Data for the six feature cards ---
const featuresData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2.25c2.625 1.875 5.25 2.25 7.875 2.25v6a9.75 9.75 0 11-15.75-7.5V4.5c2.625 0 5.25-.375 7.875-2.25z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 12.75l2.25 2.25 4.5-4.5"
        />
      </svg>
    ),
    title: "Real-Time Threat Detection",
    description:
      "Our AI-powered systems continuously monitor and neutralize threats before they can impact your operations.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-green-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15.75v2.25m0 0a2.25 2.25 0 002.25-2.25m-4.5 0A2.25 2.25 0 0012 18m0-13.5A6.75 6.75 0 005.25 11.25v3.75a6.75 6.75 0 0013.5 0v-3.75A6.75 6.75 0 0012 4.5z"
        />
      </svg>
    ),
    title: "Advanced Data Encryption",
    description:
      "We utilize end-to-end, military-grade encryption to ensure your sensitive data remains confidential and secure.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-yellow-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-9-9 9 9 0 019 9z"
        />
      </svg>
    ),
    title: "24/7 Proactive Monitoring",
    description:
      "Our dedicated security operations center (SOC) works around the clock to protect your digital assets.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-purple-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7.5A4.5 4.5 0 017.5 3h9A4.5 4.5 0 0121 7.5V9a9 9 0 01-18 0V7.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9A8.25 8.25 0 0012 17.25M12 17.25V21"
        />
      </svg>
    ),
    title: "Secure Cloud Infrastructure",
    description:
      "Benefit from our hardened cloud environments, designed for maximum security, scalability, and uptime.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75l2.25 2.25M21 12a9 9 0 11-9-9 9 9 0 019 9z"
        />
      </svg>
    ),
    title: "Rapid Incident Response",
    description:
      "In the event of a breach, our expert team is deployed instantly to mitigate damage and restore systems.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-indigo-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 3h6m-7.5 6h9A2.25 2.25 0 0018.75 18V6A2.25 2.25 0 0016.5 3h-9A2.25 2.25 0 005.25 6v12A2.25 2.25 0 007.5 21z"
        />
      </svg>
    ),
    title: "Compliance & Governance",
    description:
      "We help you navigate complex regulatory landscapes and maintain full compliance with industry standards.",
  },
];


// Helper to replace SVG placeholders
const getIcon = (title) => {
    // Icons sourced from 'lucide-react' - a great icon library
    switch(title) {
        case 'Real-Time Threat Detection': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>;
        case 'Advanced Data Encryption': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
        case '24/7 Proactive Monitoring': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>;
        case 'Secure Cloud Infrastructure': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>;
        case 'Rapid Incident Response': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
        case 'Compliance & Governance': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 15 2 5-7-7-5 2 5-7-5-2 7 5 2-5 7 7-2 5Z"></path></svg>;
        default: return null;
    }
}


const SecuritySection = () => {
    const sectionRef = useRef(null);

    // --- JS for the Parallax Effect ---
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!sectionRef.current) return;
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = sectionRef.current;
            const xPos = (clientX / offsetWidth - 0.5) * 40; // Multiplier controls intensity
            const yPos = (clientY / offsetHeight - 0.5) * 40;
            
            sectionRef.current.style.setProperty('--x', `${-xPos}px`);
            sectionRef.current.style.setProperty('--y', `${yPos}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="six-home-section-info" ref={sectionRef}>
            <div id="six-home-section-info-container">
                {/* --- Left Column: Interactive Visuals --- */}
                <div id="six-home-section-info-visuals">
                    <div className="six-home-section-info-shape six-home-section-info-shape1"></div>
                    <div className="six-home-section-info-shape six-home-section-info-shape2"></div>
                    <div className="six-home-section-info-shape six-home-section-info-shape3"></div>
                    <div className="six-home-section-info-main-graphic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>
                    <h2 id="six-home-section-info-main-heading">
                        We Are Here to Grow Your Security Exponentially
                    </h2>
                    <p id="six-home-section-info-main-description">
                        In an evolving digital landscape, passive security is a liability. We provide dynamic, proactive, and intelligent security solutions that don't just protect your business—they empower it to grow safely and without limits.
                    </p>
                </div>

                {/* --- Right Column: Feature Grid --- */}
                <div id="six-home-section-info-grid">
                    {featuresData.map((feature, index) => (
                        <div className="six-home-section-info-feature-card" key={index} style={{ '--delay': index }}>
                            <div className="six-home-section-info-icon-wrapper">
                                {getIcon(feature.title)}
                            </div>
                            <h3 className="six-home-section-info-feature-title">{feature.title}</h3>
                            <p className="six-home-section-info-feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;