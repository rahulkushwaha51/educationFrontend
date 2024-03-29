import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import img from "../assets/about.png";
import Header from "../general/Header";
const About = () => {
  return (
    <div>
   <Header link={"Home"} to={""} title={"About Us"} />
      <div className="about-container">
        <div className="about-section">
          <h2 className="about-heading">About Gs Academy</h2>
          <p className="about-description">
            Welcome to Gs Academy - your pathway to success in the digital era.
            Founded in 2010, Gs Academy is a premier educational institution
            dedicated to providing top-notch training in computer science,
            coding, Tally, and spoken English. Our mission is to empower
            individuals with the skills and knowledge they need to thrive in
            today's competitive job market.
          </p>
          <p className="about-description">
            At Gs Academy, we are committed to excellence in education. Our team
            of experienced instructors brings a wealth of industry knowledge and
            expertise to the classroom, ensuring that our students receive
            high-quality instruction that is both relevant and practical.
            Whether you're a novice looking to kickstart your career or a
            seasoned professional seeking to upskill, we have courses tailored
            to meet your needs.
          </p>
          <p className="about-description">
            With a focus on hands-on learning and real-world applications, our
            courses provide students with the tools they need to succeed. From
            interactive coding projects to practical English communication
            exercises, our curriculum is designed to equip students with
            marketable skills that employers demand.
          </p>
          <p className="about-description">
            Join us at Gs Academy and unlock your potential. Let us help you
            achieve your goals and realize your dreams. Your journey to success
            starts here.
          </p>
          <Link to="/courses" className="btn-primary">
            Explore Courses
          </Link>
        </div>
        <div className="image-section">
          <img
            src={img}
            alt="About Us"
            className="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
