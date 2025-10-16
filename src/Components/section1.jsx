import React from 'react';
import './StorySection.css';

// Image URLs for the component
const restaurantImageUrl = 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const chefImageUrl = 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const StorySection = () => {
  return (
    <section id="ourstory-section">
      <div className="ourstory-container">
        {/* Left Column: Text Content */}
        <div className="ourstory-text-content">
          <div className="ourstory-animated-line">
            <p className="ourstory-subtitle">OUR STORY</p>
          </div>
          <div className="ourstory-decorator"></div>
          <h2 className="ourstory-title">
            <span className="ourstory-animated-line"><span>Every Flavor</span></span>
            <span className="ourstory-animated-line"><span>Tells a Story</span></span>
          </h2>
          <div className="ourstory-animated-line">
            <p className="ourstory-description">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type.
            </p>
          </div>
          <div className="ourstory-booking-info">
            <p className="ourstory-booking-title">Book Through Call</p>
            <p className="ourstory-phone-number">+80 (400) 123 4567</p>
          </div>
          <a href="#more" className="ourstory-read-more-btn">READ MORE</a>
        </div>

        {/* Right Column: Images and Badge */}
        <div className="ourstory-image-content">
          <div className="ourstory-image-wrapper">
            <img src={restaurantImageUrl} alt="Elegant restaurant interior" className="ourstory-main-image" />
            <img src={chefImageUrl} alt="Chef meticulously preparing a dish" className="ourstory-secondary-image" />
            <div className="ourstory-deco-pattern"></div>
          </div>

          {/* The Revolving Badge */}
          <div className="ourstory-badge">
            <div className="ourstory-badge-revolving-text">
              {/* SVG VIEWBOX IS NOW LARGER TO PREVENT CLIPPING */}
              <svg viewBox="0 0 120 120">
                  {/* Using a <circle> is cleaner and more reliable for the text path */}
                  <path id="circlePath" fill="none" d="M 60, 10 a 50,50 0 1,1 0,100 a 50,50 0 1,1 0,-100" />
                  <text>
                      <textPath href="#circlePath">
                          QUALITY FOOD • SINCE 1950 • FRESH ENVIRONMENT •
                      </textPath>
                  </text>
              </svg>
            </div>
            <div className="ourstory-badge-inner-circle">
              <span className="ourstory-badge-since">SINCE</span>
              <span className="ourstory-badge-year">1950</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;