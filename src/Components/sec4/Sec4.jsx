import React, { useEffect, useRef } from 'react';
import './PricingSection.css';

const PricingSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    // --- JS for the Parallax Vector Effect ---
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!sectionRef.current) return;
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = sectionRef.current;
            const xPos = ((clientX - offsetLeft) / offsetWidth - 0.5) * -40; // Inverted for natural tilt
            const yPos = ((clientY - offsetTop) / offsetHeight - 0.5) * -40;
            
            sectionRef.current.style.setProperty('--sec-fourhome-mouse-x', `${xPos}px`);
            sectionRef.current.style.setProperty('--sec-fourhome-mouse-y', `${yPos}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // --- JS for the Text Scramble Effect ---
    useEffect(() => {
        const element = titleRef.current;
        if (!element) return;
        const originalText = element.innerText;
        let interval = null;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

        const scramble = () => {
            let iteration = 0;
            clearInterval(interval);
            interval = setInterval(() => {
                element.innerText = originalText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                }
                iteration += 1 / 3;
            }, 30);
        };
        
        // Trigger scramble after a short delay
        const timeout = setTimeout(scramble, 500);
        return () => clearTimeout(timeout);

    }, []);

    return (
        <section id="sec-fourhome-section" ref={sectionRef}>
            {/* SVG for the brush stroke clip-path */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
              <defs>
                <clipPath id="sec-fourhome-brush-path" clipPathUnits="objectBoundingBox">
                  <path d="M0,0.05 C0.05,0,0.15,0.03,0.2,0.04 C0.3,0.06,0.4,0,0.5,0.02 C0.6,0.04,0.7,0,0.8,0.02 C0.9,0.04,0.95,0.01,1,0.04 V0.95 C0.95,1,0.85,0.97,0.8,0.96 C0.7,0.94,0.6,1,0.5,0.98 C0.4,0.96,0.3,1,0.2,0.98 C0.1,0.96,0.05,0.99,0,0.95 V0.05 z"></path>
                </clipPath>
              </defs>
            </svg>

            <div id="sec-fourhome-container">
                {/* Left Column: Content */}
                <div id="sec-fourhome-content">
                    <h2 id="sec-fourhome-title" ref={titleRef}>PRICING PLANS</h2>
                    <p id="sec-fourhome-description">
                        We provide competitive prices and subscription-based vulnerability assessments. By choosing our subscription service, you can avoid paying more and gain <span className="sec-fourhome-highlight">peace of mind</span> by eliminating unnecessary headaches associated with cybersecurity concerns. We aim to make our services accessible and affordable to all.
                    </p>
                    <a href="#pricing" id="sec-fourhome-cta-button">Explore Subscriptions</a>
                </div>

                {/* Right Column: The stunning vector illustration */}
                <div id="sec-fourhome-visuals">
                    <div id="sec-fourhome-vector-container">
                        <svg id="sec-fourhome-main-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            {/* Layer 3: Farthest back elements */}
                            <g className="sec-fourhome-parallax-layer3">
                                <circle cx="200" cy="200" r="180" fill="url(#sec-fourhome-grid-pattern)" opacity="0.5"/>
                                <path d="M 50 150 Q 200 50 350 150" stroke="#dce4e9" strokeWidth="2" fill="none" className="sec-fourhome-swoosh"/>
                                <path d="M 50 250 Q 200 350 350 250" stroke="#dce4e9" strokeWidth="2" fill="none" className="sec-fourhome-swoosh" style={{animationDelay: '0.5s'}}/>
                            </g>
                             {/* Layer 2: Middle elements */}
                            <g className="sec-fourhome-parallax-layer2">
                                <path d="M 200 20 L 380 200 L 200 380 L 20 200 Z" fill="#ffffff" stroke="#e7eaee" strokeWidth="2"/>
                                <circle cx="200" cy="200" r="80" fill="none" stroke="url(#sec-fourhome-glow-gradient)" strokeWidth="4" className="sec-fourhome-pulsing-ring"/>
                            </g>
                             {/* Layer 1: Frontmost elements */}
                            <g className="sec-fourhome-parallax-layer1">
                                <path d="M120 220 L 200 140 L 280 220 L 200 300 Z" fill="var(--sec-fourhome-accent-color)" className="sec-fourhome-floating-arrow"/>
                                <path d="M120 180 L 200 100 L 280 180 L 200 260 Z" fill="rgba(255,255,255,0.5)" className="sec-fourhome-floating-arrow" style={{animationDelay: '1s'}}/>
                                <circle cx="200" cy="200" r="50" fill="var(--sec-fourhome-text-color)"/>
                                <path d="m185 200 10 10 20-20" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                             <defs>
                                <radialGradient id="sec-fourhome-glow-gradient">
                                    <stop offset="0%" stopColor={ `var(--sec-fourhome-accent-color)` } stopOpacity="0" />
                                    <stop offset="80%" stopColor={ `var(--sec-fourhome-accent-color)` } stopOpacity="1" />
                                    <stop offset="100%" stopColor={ `var(--sec-fourhome-accent-color)` } stopOpacity="0" />
                                </radialGradient>
                                <pattern id="sec-fourhome-grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1" fill="#dce4e9"/>
                                </pattern>
                             </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;