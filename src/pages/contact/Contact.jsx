import "./Contact.scss"


//function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div name="contact" className="contacts text-white">
      <div className="contacts-bgImg-container">
        <main className="contact">
          <h3 className="text-6xl m-8 font-bold ">Contact Details</h3>
          <div className="contacts__list">
            <div className="contacts__item">
              <i className="fas fa-envelope"></i> Email
              <div className="text-secondary">emnplt_06@outlook.com</div>
            </div>
            <div className="contacts__item">
              <i className="fas fa-mobile-alt"></i> Phone
              <div className="text-secondary">+90 555 555 55 55</div>
            </div>
            <div className="contacts__item">
              <i className="fas fa-map-marker-alt"></i> Address
              <div className="text-secondary">
                Kaletepe Mahallesi 875. Sokak Yenimahalle/Ankara
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="flex flex-col p-4 justify-center m-4 ">
        <div className="pb-2">
          <h3 className="text-4xl m-2  ">
            Contact Forms
          </h3>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-purple-500 to-white-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;






// import React from 'react'
// import "./Contact.scss"
// const Contact = () => {
//   return (
//     <div className="contact-bgImg-container">
//       <main className="contact">
//         <h2>Contact Me ...</h2>
//         <div className="contact__list">
//           <div className="contact__item">
//             <i className="fas fa-envelope"></i> Email
//             <div className="text-secondary">emnplt_06@outlook.com</div>
//           </div>
//           <div className="contact__item">
//             <i className="fas fa-mobile-alt"></i> Phone
//             <div className="text-secondary">+90 555 555 55 55</div>
//           </div>
//           <div className="contact__item">
//             <i className="fas fa-map-marker-alt"></i> Address
//             <div className="text-secondary">
//               Kaletepe Mahallesi 875. Sokak Yenimahalle/Ankara
//             </div>
//           </div>
//         </div>

//       </main>
//     </div>
//   );
// }

// export default Contact
