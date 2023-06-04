import React, { forwardRef } from "react";
import Wrapper from "../assets/Wrappers/Works";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Works =  forwardRef((props, Pref) => {
  return (
    <Wrapper ref={Pref}>
      <Mobile />
      <Desktop />
    </Wrapper>
  );
});

// export default forwardRef(Works);
export default Works;
