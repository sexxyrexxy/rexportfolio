import "./EducationLevel.css";
import Taylors from "../Assets/Image/Taylors.jpg";
function EducationLevel() {
  return (
    <div className="education-level">
      <div className="background-photo">
        <img src={Taylors} />
      </div>
      <div className="description">
        <h1>Taylor's University</h1>
        <h2>Bachelor of Computer Science</h2>
        <h2>2022-2023</h2>      
      </div>
    </div>
  );
}

export default EducationLevel;
