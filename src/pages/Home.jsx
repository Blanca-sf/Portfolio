import React from 'react';

import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home">
           <div className="profile-wrapper">
  <div className="animated-blur blur-left"></div>
  <div className="animated-blur blur-right"></div>
</div>
<div className="home-container">
    <div className="home-left">
      <h1>Hi! I'm<br />Blanca </h1>
    </div>

    <div className="home-right">
      <p>Frontend Developer focused on creating beautiful and functional web experiences.</p>
      <div className="buttons">
        <a href="/cv.pdf" download>Download CV</a>
        <a href="https://www.linkedin.com/in/blanca-sf/" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
      </div>
    </div>
  </div>
</section>
    );
};

export default Home;
