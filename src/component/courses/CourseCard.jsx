import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";
import { FaClock, FaShoppingCart } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
const CourseCard = ({
  title,
  image,
  duration,
  description,
  category,
  level,
  price,
  courseId,
  addtocartHandler,
}) => {
  return (
    <>
      <div className="course-card-container">
        <div className="thecard">
          <Link to={`/coursedetails/${courseId}`}>
            <div className="front-card">
              <img src={image} alt="thumbnail" className="course-img" />
              <div className="course-price">
                <span>&#8377;{price}</span>
              </div>
              <h1 className="title cutoff-text">{title}</h1>
              <div className="course-level">
                <span>
                  <FaClock /> {duration} month{" "}
                </span>
                <span>
                  <GiNetworkBars /> {level}{" "}
                </span>
              </div>
            </div>
          </Link>
          <div className="back-card">
            <div className="course-info-card">
              <span>{category}</span>
              <h2>{title}</h2>
              <h3>
                Level: <b>{level}</b>
              </h3>
              {/* <p className='cutoff-text'>{description}</p> */}
              <ul className="point">
                <li>Learn from scratch</li>
                <li>Practical guidence</li>
                <li>Great learning envirement</li>
                <li>After course support</li>
              </ul>
            </div>
            <div className="course-card-action">
              <Link to={`/coursedetails/${courseId}`} className="btn-primary">
                View Details
              </Link>
              <button
                className="btn-primary"
                onClick={() => addtocartHandler(courseId)}
              >
                <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
