import React, { forwardRef } from "react";
import ContactDesktop from "./ContactDesktop";
import ContactMobile from "./ContactMobile";
import Wrapper from "../assets/Wrappers/Contact";

const Contact = forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
<div className="heading-container">
<h2>Get In Touch</h2>
<div className="heading-underline" ></div>
</div>

      {/* Mobile */}
      <ContactMobile />
      {/* Desktop */}
      <ContactDesktop />
    </Wrapper>
  );
});

export default Contact;
