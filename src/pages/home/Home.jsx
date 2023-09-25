import React from 'react'
import "./Home.scss"
const Home = () => {
  return (
    <div className="home-bgImg-container">
      <main className="home">
        <h2>Hi! My Name Is</h2>
        <h1 className="home__name">
          Furkan <span className="home__name--last">Emin</span> POLAT
        </h1>
        <h2>Frontend Web Developer</h2>
      </main>
    </div>
  );
}

export default Home