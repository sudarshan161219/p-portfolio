import React, { useRef } from "react";
import Wrapper from "../assets/Wrappers/ContactMobile";
import { AiOutlineSend } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const ContactMobile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6mj0dld",
        "template_5h3ilvn",
        form.current,
        "O8sF330Ua3dS7GsTf"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
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
      <form ref={form} onSubmit={sendEmail} className="mobile-form">
        <input
          placeholder="Name"
          className="name"
          type="text"
          name="user_name"
        />
        <input
          placeholder="Email"
          className="email"
          type="text"
          name="user_email"
        />
        <input
          placeholder="Subject"
          className="subject"
          type="text"
          name="user_subject"
        />
        <textarea
          placeholder="Your Message"
          className="mobile-text-area"
          name="message"
          id="mobile-text-area"
          cols="30"
          rows="10"
        ></textarea>
        <button className="send-btn" type="submit" value="Send">
          Send <AiOutlineSend className="send-icon" />
        </button>
      </form>
    </Wrapper>
  );
};

export default ContactMobile;
