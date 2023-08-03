import "./WelcomePage.css";
import { TypeAnimation } from "react-type-animation";
import backgroundWelcome from "../Assets/Image/backgroundWelcome.mov";

function WelcomePage() {
  return (
    <div className="welcome">
        <div className='overlay'></div>
      <video src={backgroundWelcome} autoPlay loop muted/>
      <div className="welcomeText">
        <TypeAnimation
          sequence={[
            "Welcome to my Web Portfolio!", // Types 'One'
            500, // Waits 1s
            "Welcome to my Web Portfolio! This entire portfolio is made with React.js, a powerful framework of JavaScript.",
            1000, // Waits 2s
            "Welcome to my Web Portfolio! This entire portfolio is made with React.js, a powerful framework of JavaScript. Of course, I could have used tools such as Wix,",
            1000,
            "Welcome to my Web Portfolio! This entire portfolio is made with React.js, a powerful framework of JavaScript. Of course, I could have used tools such as Wix, but where is the challenge in that?",
            1000,
            "Welcome to my Web Portfolio! This entire portfolio is made with React.js, a powerful framework of JavaScript. Of course, I could have used tools such as Wix, but where is the challenge in that? Let my journey in web development inspire yours.",
            1000,
            "Welcome to my Web Portfolio! This entire portfolio is made with React.js, a powerful framework of JavaScript. Of course, I could have used tools such as Wix, but where is the challenge in that? Let my journey in web development inspire yours. Happy exploring!",
            1000,
            "Welcome to my Web Portfolio! This entire portfolio is made with React.js, a powerful framework of JavaScript. Of course, I could have used tools such as Wix, but where is the challenge in that? Let my journey in web development inspire yours. Happy browsing!",
            1000,
            "Welcome to my Web Portfolio! This entire portfolio is made with React.js, a powerful framework of JavaScript. Of course, I could have used tools such as Wix, but where is the challenge in that? Let my journey in web development inspire yours. Happy discovering!",
          ]}          
          speed={70}
          wrapper="span"
          cursor={true}
          deletionSpeed={40}
          
        />
      </div>
      <a href="/home">
        <button className="skip">Start exploring</button>
      </a>
    </div>
  );
}

export default WelcomePage;

// Welcome to my Web Portfolio! This entire portfolio is made with
//         React.js, a powerful framework of JavaScript. Of course, I could have
//         used tools such as Wix, but where is the challenge in that? Let my
//         journey in web development inspire yours. Happy exploring!
