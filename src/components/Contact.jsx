import React, { forwardRef } from "react";
import Wrapper from "../assets/Wrappers/Contact";

const Contact = forwardRef((props, ref) => {
  return <Wrapper ref={ref}>Contact</Wrapper>;
});

// export default forwardRef(Contact);
export default Contact;
