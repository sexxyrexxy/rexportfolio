import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import "./ButtonToTop.css";

const MyComponent = () => {
  const clickHandler = () => {
    // Get the top-most element on the page (e.g., the <body> element)
    const topElement = document.body;

    // Scroll smoothly to the top of the page
    topElement.scrollIntoView({ behavior :"smooth" });
  };

  return (
    <div>
      <button className="circle-button" onClick={clickHandler}>
        <FaLongArrowAltUp size={30} />
      </button>
    </div>
  );
};

export default MyComponent;
