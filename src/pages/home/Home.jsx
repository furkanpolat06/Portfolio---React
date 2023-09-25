import React from 'react'
import "./Home.scss"
const Home = () => {
  return (
    <div className="home-bgImg-container">
      <main className="home">
        <h3>Hi! My name is</h3>
        <h1 className="home__name"> <span className="home__name--last">Furkan </span> 
          Emin <span className="home__name--last">Polat</span> 
        </h1>
        <h2>Frontend Web Developer</h2>
      </main>
    </div>
  );
}

export default Home