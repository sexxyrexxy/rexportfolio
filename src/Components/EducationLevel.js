import "./EducationLevel.css";
import Taylors from "../Assets/Image/Taylors.jpg";
import ISKL from "../Assets/Image/ISKL.jpeg";
import SinMin from "../Assets/Image/SinMin.jpeg";
function EducationLevel() {
  return (
    <>
      <div className="education-level">
        <div className="background-photo">
          <img src={Taylors} alt="Taylor's University" />
        </div>
        <div className="description">
          <h1>Taylor's University</h1>
          <h2>Bachelor of Computer Science</h2>
          <h2>2022-present</h2>
          <h3>Grade : 3.73 / 4.0 CGPA</h3>
          <p>Subjects Taken</p>
          <div className="list">
            <ul>
              <li>Object Oriented Programming</li>
              <li>Discrete Structure</li>
              <li>Computer Architecture and Organization</li>
              <li>Database Systems</li>
              <li>Internet of Things</li>
              <li>Software Engineering</li>
              <li>Data Structures and Algorithms</li>
              <li>Operating Systems and Computer Networks</li>
              <li>Advanced Programming</li>
              <li>Systems Fundamentals</li>
            </ul>
          </div>
          <p>Activities</p>
          <ol className="list">
            <li>Entrepreneurship and Intrapreneurship Club - Logistics Lead</li>
            <ul>
              <li>Handled Logistical Challenges for the club</li>
            </ul>
            <li>Sky Adventure Club - Masquerade of Truth</li>
            <ul>
              <li>
                Took part in planning an non-profit annual event that received
                mostly highly positive feedback.
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/155gIUiKA53unWyBE4TTXMP3ltQptyFAd/view?usp=share_link"
                  target="_blank"
                >
                  View Teaser
                </a>
              </li>
            </ul>            
          </ol>
        </div>
      </div>
      <div className="education-level-reverse">
        <div className="background-photo">
          <img src={ISKL} alt="ISKL" />
        </div>
        <div className="description">
          <h1>International School of Kuala Lumpur</h1>
          <h2>International Baccalaureate Diploma Programme (IB)</h2>
          <h2>2019-2022</h2>
          <h3>Grade : 43 / 45 points (99th percentile)</h3>
          <p>Subjects Taken</p>
          <div className="list">
            <ul>
              <li>Higher Level Mathematics : Application and Interpretation</li>
              <li>Higher Level Business and Administration</li>
              <li>Higher Level Computer Science</li>
              <li>Standard Level Psychology</li>
              <li>Standard Level English : Language and Literature</li>
              <li>Standard Level Spanish Ab Initio</li>
              <li>Theory of Knowledge</li>
            </ul>
          </div>
          <p>Activities</p>
          <ol className="list">
            <li>Cooking Club - Founder and President</li>
            <ul>
              <li>Founded Cooking Club to bring attention to an important yet overlooked skill to students</li>
              <li>Organized a charity event where we successfully collected approximately 400 plastic containers for recycling</li>
            </ul>
            <li>Robotics Club - Vice President</li>
            <ul>
              <li>
               Led a team of 5 to Taipei where we participated in a renowned international competition called Vex Tower Takeover.
              </li>            
            </ul>            
          </ol>
        </div>
      </div>
      <div className="education-level">
        <div className="background-photo">
          <img src={SinMin} alt="SMJK Sin Min" />
        </div>
        <div className="description">
          <h1>SMJK Sin Min</h1>
          <h2>Pentaksiran Tingakatn 3 (PT3)</h2>
          <h2>2016-2018</h2>
          <h3>Grade : 10 / 10 A's (Best Student Award 1/297)</h3>
          <p>Activities</p>
          <div className="list">
            <ul>
              <li>Ping Pong Team</li>
              <li>Debate Team</li>        
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationLevel;
