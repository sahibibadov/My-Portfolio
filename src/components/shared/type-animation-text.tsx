"use client";

import { TypeAnimation } from "react-type-animation";

const Typeanimationtext = () => {
  return (
    <TypeAnimation
      sequence={[
        "Reactjs", // Types 'One'
        2000, // Waits 1s
        "Nextjs", // Deletes 'One' and types 'Two'
        2000,

        () => {},
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "inherit", display: "inline-block", color: "#0ea5e9" }}
    />
  );
};

export default Typeanimationtext;
