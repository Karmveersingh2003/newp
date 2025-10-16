import React from 'react';
import './FlavorsSection.css';

// --- Data for the six cards. Now with longer descriptions! ---
const cardData = [
  {
    title: 'Breakfast',
    description: 'Awaken your senses with our signature stack of buttermilk pancakes, drizzled with authentic maple syrup and topped with a medley of fresh, seasonal berries and a hint of mint.',
    imageSrc: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Appetizers',
    description: 'Begin your culinary journey with our perfectly seasoned, crispy chicken wings. They are served hot from the kitchen with our two most popular house-made dipping sauces.',
    imageSrc: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Drinks',
    description: 'Quench your thirst with our exclusive collection of artisanal cocktails. Each one is masterfully crafted by our expert mixologists using only premium spirits and the freshest ingredients.',
    imageSrc: 'https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Main Courses',
    description: 'Experience perfection with our pan-seared salmon, featuring a crispy skin and unbelievably flaky interior. It is served on a vibrant bed of fresh, locally-sourced garden greens.',
    imageSrc: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Desserts',
    description: 'Indulge in our decadent chocolate lava cake. A rich, molten core flows from this warm, freshly-baked delight, promising an unforgettable and sweet finish to your meal.',
    imageSrc: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Salads',
    description: 'Enjoy a refreshingly crisp and healthy option. Our salads are a vibrant mix of seasonal vegetables and organic microgreens, tossed in a light, zesty house vinaigrette dressing.',
    imageSrc: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const FlavorsSection = () => {
  return (
    <section id="home-services-section">
      <div id="home-services-container">
        {/* Section Header */}
        <div id="home-services-header">
          <p className="home-services-subtitle">FLAVORS FOR ROYALTY</p>
          <div className="home-services-decorator"></div>
          <h2 className="home-services-title">We Offer Top Notch</h2>
          <p className="home-services-description">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.
          </p>
        </div>

        {/* Grid of Cards */}
        <div id="home-services-grid">
          {cardData.map((card, index) => (
            <div className="home-services-card-wrapper" key={index} style={{ '--delay': index }}>
              <div className="home-services-card">
                <img src={card.imageSrc} alt={card.title} className="home-services-image" />
                <div className="home-services-hover-panel">
                  <h3 className="home-services-hover-title">{card.title}</h3>
                  <p className="home-services-hover-description">{card.description}</p>
                </div>
              </div>
              <h3 className="home-services-card-title">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;