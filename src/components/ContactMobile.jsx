import React from "react";
import Wrapper from "../assets/Wrappers/ContactMobile";
import { AiOutlineSend } from "react-icons/ai";

const ContactMobile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <div className="info-container">
        <p>
          If you need a modern and powerful website for your business, startup
          or personally, I am available for work. You can email me directly at:{" "}
          <br /> <span className="email-span">sudarshan@shwebdev.in</span>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mobile-form">
        <input placeholder="Name" className="name" type="text" name="name" />
        <input placeholder="Email" className="email" type="text" name="email" />
        <input
          placeholder="Subject"
          className="subject"
          type="text"
          name="subject"
        />
        <textarea
          placeholder="Your Message"
          className="mobile-text-area"
          name="mobile-text-area"
          id="mobile-text-area"
          cols="30"
          rows="10"
        ></textarea>
        <button className="send-btn">
          Send <AiOutlineSend className="send-icon" />
        </button>
      </form>
      <div className="blob-container">
        {/* <div className="blob">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF3CAC" transform="translate(100 100)">
              <animate
                attributeName="d"
                dur="9000ms"
                repeatCount="indefinite"
                values="M70.3,-23C79.7,6,68,41.7,43.1,60C18.1,78.3,-20,79.1,-40.6,62.6C-61.1,46.1,-64.1,12.1,-54.4,-17.3C-44.8,-46.7,-22.4,-71.5,4,-72.9C30.5,-74.2,61,-51.9,70.3,-23Z;
          
          M42.7,-11.3C51.7,13.9,52.9,44.1,37,57.2C21,70.2,-12,66.1,-31.6,50.3C-51.1,34.4,-57.2,6.9,-49.7,-16.1C-42.2,-39.1,-21.1,-57.7,-2.1,-57C16.8,-56.3,33.7,-36.4,42.7,-11.3Z;

          M42.7,-11.3C51.7,13.9,52.9,44.1,37,57.2C21,70.2,-12,66.1,-31.6,50.3C-51.1,34.4,-57.2,6.9,-49.7,-16.1C-42.2,-39.1,-21.1,-57.7,-2.1,-57C16.8,-56.3,33.7,-36.4,42.7,-11.3Z;

          M70.3,-23C79.7,6,68,41.7,43.1,60C18.1,78.3,-20,79.1,-40.6,62.6C-61.1,46.1,-64.1,12.1,-54.4,-17.3C-44.8,-46.7,-22.4,-71.5,4,-72.9C30.5,-74.2,61,-51.9,70.3,-23Z
          "
              ></animate>
            </path>
          </svg>
        </div> */}

        {/* glow */}
        {/* <div className="blob1">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#784BA0" transform="translate(100 100)">
              <animate
                attributeName="d"
                dur="9000ms"
                repeatCount="indefinite"
                values="M70.3,-23C79.7,6,68,41.7,43.1,60C18.1,78.3,-20,79.1,-40.6,62.6C-61.1,46.1,-64.1,12.1,-54.4,-17.3C-44.8,-46.7,-22.4,-71.5,4,-72.9C30.5,-74.2,61,-51.9,70.3,-23Z;
          
          M42.7,-11.3C51.7,13.9,52.9,44.1,37,57.2C21,70.2,-12,66.1,-31.6,50.3C-51.1,34.4,-57.2,6.9,-49.7,-16.1C-42.2,-39.1,-21.1,-57.7,-2.1,-57C16.8,-56.3,33.7,-36.4,42.7,-11.3Z;

          M42.7,-11.3C51.7,13.9,52.9,44.1,37,57.2C21,70.2,-12,66.1,-31.6,50.3C-51.1,34.4,-57.2,6.9,-49.7,-16.1C-42.2,-39.1,-21.1,-57.7,-2.1,-57C16.8,-56.3,33.7,-36.4,42.7,-11.3Z;

          M70.3,-23C79.7,6,68,41.7,43.1,60C18.1,78.3,-20,79.1,-40.6,62.6C-61.1,46.1,-64.1,12.1,-54.4,-17.3C-44.8,-46.7,-22.4,-71.5,4,-72.9C30.5,-74.2,61,-51.9,70.3,-23Z
          "
              ></animate>
            </path>
          </svg>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default ContactMobile;
