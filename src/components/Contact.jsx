import React, { forwardRef } from "react";
import ContactDesktop from "./ContactDesktop";
import ContactMobile from "./ContactMobile";
import Wrapper from "../assets/Wrappers/Contact";

const Contact = forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <h2>Get In Touch</h2>

      {/* Mobile */}
      <ContactMobile />
      {/* Desktop */}
      <ContactDesktop />
    </Wrapper>
  );
});

export default Contact;
