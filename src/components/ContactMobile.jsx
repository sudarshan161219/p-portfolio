import React from "react";
import Wrapper from "../assets/Wrappers/ContactMobile";
import {AiOutlineSend} from "react-icons/ai"


const ContactMobile = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <Wrapper>
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
        <button className="send-btn">Send <AiOutlineSend className="send-icon" /></button>
      </form>
    </Wrapper>
  );
};

export default ContactMobile;
