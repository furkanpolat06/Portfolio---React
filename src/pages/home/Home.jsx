import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homepng from "../../assets/img/home-main.svg";
import Type from "./Type";
import "./Home.scss"

import "swiper/css";
import "swiper/css/navigation";
import "../../App.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import htmlPng from "../../assets/img/html.png";
import cssPng from "../../assets/img/css.png";
import javascriptPng from "../../assets/img/javascript.png";
import reactPng from "../../assets/img/react.png";
import tailwindPng from "../../assets/img/tailwind.png";
import muiPng from "../../assets/img/mui.png";



function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
 
        <Container className="home-content  ">
          
          <Row className="flex flex-wrap justify-around  ">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>

              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Furkan Emin Polat</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <img width={"600px"} src={homepng} alt="homepng" />

          
          </Row>
         

        </Container>
      </Container>
      
      <Swiper
      className="container bg-opacity-25 bg-purple-950"
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="swiperSlide" ><img className="bg-purple-500 bg-opacity-10" src={htmlPng} alt="" /></SwiperSlide>
      <SwiperSlide  className="swiperSlide" ><img  className="bg-purple-500 bg-opacity-10" src={cssPng} alt="" /></SwiperSlide>
      <SwiperSlide  className="swiperSlide" ><img  className="bg-purple-500 bg-opacity-10" src={javascriptPng} alt="" /></SwiperSlide>
      <SwiperSlide  className="swiperSlide" ><img  className="bg-purple-500 bg-opacity-10" src={reactPng} alt="" /></SwiperSlide>
      <SwiperSlide  className="swiperSlide"><img  className="bg-purple-500 bg-opacity-10" src={tailwindPng} alt="" /></SwiperSlide>
      <SwiperSlide  className="swiperSlide" ><img  className="" src={muiPng} alt="" /></SwiperSlide>
  
      ...
    </Swiper>
    </section>
  );
}

export default Home;





// import React from 'react'
// import "./Home.scss"
// const Home = () => {
//   return (
//     <div className="home-bgImg-container">
//       <main className="home">
//         <h3>Hi! My name is</h3>
//         <h1 className="home__name"> <span className="home__name--last">Furkan </span> 
//           Emin <span className="home__name--last">Polat</span> 
//         </h1>
//         <h2>Frontend Web Developer</h2>
//       </main>
//     </div>
//   );
// }

// export default Home