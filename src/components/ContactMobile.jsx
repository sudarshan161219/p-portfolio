import React, { useRef, useState } from "react";
import Wrapper from "../assets/Wrappers/ContactMobile";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { SuccessMsg } from "../components";
const ContactMobile = () => {
  const [loading, setLoading] = useState(false);
  const [success, setsuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const { user_name, user_email, user_subject, message } = data;

    if (!user_name || !user_email || !user_subject || !message) {
      toast.error(`Please provide all values`);
    } else {
      setLoading(true);
      emailjs
        .sendForm(
          "service_6mj0dld",
          "template_5h3ilvn",
          form.current,
          "O8sF330Ua3dS7GsTf"
        )
        .then(
          (result) => {
            setLoading(false);
            toast.success("Thank you for getting in touch!");
            console.log(result.text);
            e.target.reset();
            setTimeout(() => {
              setsuccess(true);
            }, 1000);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.currentTarget.reset();
    }
  };

  setTimeout(() => {
    setsuccess(false);
  }, 10000);

  if (success) {
    return <SuccessMsg />;
  }

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
          type="email"
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
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </Wrapper>
  );
};

export default ContactMobile;
