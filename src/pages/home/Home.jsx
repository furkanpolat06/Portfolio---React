import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homepng from "../../assets/img/home-main.svg";
import Type from "./Type";
import "./Home.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../App.scss";
import { Navigation } from "swiper";
import { Pagination } from "swiper";

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
          <p align="left"><img src="https://github-readme-stats.vercel.app/api?username=MuratGumus&theme=chartreuse-dark&show_icons=true" alt="my github stats" width="49%"/>&nbsp;</p>

        </Container>
      </Container>
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