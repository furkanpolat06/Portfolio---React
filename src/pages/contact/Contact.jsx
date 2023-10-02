import React from 'react'
import "./Contact.scss"
const Contact = () => {
  return (
    <div className="contact-bgImg-container">
      <main className="contact">
        <h2>Contact Me ...</h2>
        <div className="contact__list">
          <div className="contact__item">
            <i className="fas fa-envelope"></i> Email
            <div className="text-secondary">emnplt_06@outlook.com</div>
          </div>
          <div className="contact__item">
            <i className="fas fa-mobile-alt"></i> Phone
            <div className="text-secondary">+90 555 555 55 55</div>
          </div>
          <div className="contact__item">
            <i className="fas fa-map-marker-alt"></i> Address
            <div className="text-secondary">
              Kaletepe Mahallesi 875. Sokak Yenimahalle/Ankara
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact