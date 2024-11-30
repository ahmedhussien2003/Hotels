import photo from "../images/slider-1-1.jpg";
import "../App.css";
function About() {
  return (
    <div className="About-us">
      <div className="tour-grid mb-5 col-12">
        <img src={photo} alt="slider" className="img-fluid" />
        <h2>About Us</h2>
        <div className="tours bg-success text-white p-2 rounded-2 px-3">
          Home // About_us
        </div>
      </div>
    </div>
  );
}

export default About;
