import React, { useState, useEffect } from "react";
import ProfilePic from "../Assets/Image/ProfilePic.jpeg";
import "./Biography.css";
import JuneCV from "../Assets/JuneCV.pdf";
import Image1 from "../Assets/Image/Image1.jpeg";
import Image2 from "../Assets/Image/Image2.jpeg";
import Image3 from "../Assets/Image/Image3.jpeg";
import Image4 from "../Assets/Image/Image4.jpeg";
import Image5 from "../Assets/Image/Image5.jpeg";
import { TypeAnimation } from "react-type-animation";

function Biography() {
  function viewCVHandler() {
    window.open(JuneCV, "_blank");
  }

  const images = [ProfilePic, Image1, Image2, Image3, Image4, Image5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(false); // Start the fade-out animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setShowImage(true); // Start the fade-in animation after the new image is loaded
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="biography">
      <div className={`profile-picture ${showImage ? "show" : ""}`}>
        <img
          className={`fade-in-out ${showImage ? "show" : ""}`}
          src={images[currentIndex]}
          alt="ProfilePic"
        />
      </div>
      <div className="text">
        <h2>Rex Lim</h2>
        <TypeAnimation
          sequence={[
            "Computer Science Student, Mobile Developer, Web Developer",
            1000,
            "Computer Science Student, Mobile Developer, Web Developer, Full Stack Developer?",
            2000,
          ]}
          speed={80}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          deletionSpeed={80}
          style={{ fontSize: "25px", display: "inline-block" }}
          preRenderFirstString={true}
        />
        <p>
          As a university student pursuing a Bachelor's degree in Computer
          Science, I have immersed myself in the ever-evolving world of
          technology. My passion for both web and mobile development has led me
          to explore various avenues to create user-friendly and dynamic digital
          experiences.
          <p />
          With a keen eye for design, I have delved into the realm of UI/UX
          design, striving to craft intuitive interfaces that enhance user
          interactions. Moreover, I have honed my skills in database
          administration, ensuring data efficiency and security in the
          applications I develop.
          <p />
          To build robust and versatile software solutions, I am proficient in a
          diverse range of programming languages. My repertoire includes
          Flutter, Java, and C++, enabling me to create native and
          cross-platform mobile applications. On the web front, I am well-versed
          in HTML, CSS, and JavaScript, allowing me to bring engaging and
          responsive web applications to life.
          <p />
          Throughout my academic journey, I have cultivated strong analytical
          skills and critical thinking, empowering me to tackle complex
          challenges with innovative solutions. Attention to detail is a
          hallmark of my work, as I strive to deliver polished and high-quality
          products. Eager to embrace new technologies and stay at the forefront
          of the industry, I am committed to continuous learning and
          professional growth. As I embark on my career, I look forward to
          contributing my expertise and passion to the ever-evolving landscape
          of computer science and software development.
        </p>

        <div className="button-row">
          <a href={JuneCV} download>
            <button>Download Resume</button>
          </a>
          <button onClick={viewCVHandler}>View Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Biography;
