import ProfilePic from "../Assets/Image/ProfilePic.jpeg";
import "./Biography.css";
function Biography() {
  return (
    <div className="biography">
      <div className="profile-picture">
        <img src={ProfilePic} alt="ProfilePic" />
      </div>
      <div className="text">
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
        <button>Download Resume</button>
        <button>View Resume</button>
      </div>
      </div>
    </div>
  );
}

export default Biography;
