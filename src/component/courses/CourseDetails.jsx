import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CourseDetails.css";
import { Link, useParams } from "react-router-dom";
import { getCourse } from "../../redux/actions/courseAction";
import { FaClock, FaShoppingCart, FaTv } from "react-icons/fa";
import Accordion from "./Accordion";
import { Globe, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { addToCart } from "../../redux/actions/cartAction";
import { CiBookmark } from "react-icons/ci";
const CourseDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const courseId = params.id;

  const addtocartHandler = (courseId) => {
    dispatch(addToCart(courseId));
  };

  useEffect(() => {
    dispatch(getCourse(courseId));
  }, [dispatch]);
  const { course } = useSelector((state) => state.course);

  console.log(course);

  const accordion = [
    {
      title: "lesson1",
      description:
        "This course has been designed by two professional Data Scientists so that we can share our knowledge and help you learn complex theory, algorithms, and coding libraries in a simple way. We will walk you step-by-step into the World of Machine Learning. With every tutorial, you will develop new skills and improve your understanding of this challenging yet lucrative sub-field of Data Science ",
    },
    {
      title: "lesson 2",
      description:
        "This course has been designed by two professional Data Scientists so that we can share our knowledge and help you learn complex theory, algorithms, and coding libraries in a simple way. We will walk you step-by-step into the World of Machine Learning. With every tutorial, you will develop new skills and improve your understanding of this challenging yet lucrative sub-field of Data Science ",
    },
    {
      title: "lesson 3",
      description:
        "This course has been designed by two professional Data Scientists so that we can share our knowledge and help you learn complex theory, algorithms, and coding libraries in a simple way. We will walk you step-by-step into the World of Machine Learning. With every tutorial, you will develop new skills and improve your understanding of this challenging yet lucrative sub-field of Data Science ",
    },
  ];

  return (
    <>
      <div className="course-header">
        <h1> Course Details</h1>
        <div className="course-header-nav">
          <span>
            <Link to="/course">Course</Link>
          </span>
          <span>
            <small>&#8250;</small>
          </span>
          <span> Course Details</span>
        </div>
      </div>
      {course && (
        <div className="course-details">
          <div className="course-details-deshboard">
            <h2>{course.title}</h2>
            <div className="course-description">
              <h3>Description</h3>
              <p>
                This course has been designed by two professional Data
                Scientists so that we can share our knowledge and help you learn
                complex theory, algorithms, and coding libraries in a simple
                way. We will walk you step-by-step into the World of Machine
                Learning. With every tutorial, you will develop new skills and
                improve your understanding of this challenging yet lucrative
                sub-field of Data Science
              </p>
            </div>
            <div className="course-learn">
              <div>
                <h3>What you'll learn</h3>
                <div className="course-learn-text">
                  <ul>
                    <li>
                      <b>✓</b>Handle advanced techniques like Dimensionality
                      Reduction
                    </li>
                    <li>
                      <b>✓</b>Handle advanced techniques like Dimensionality
                      Reduction
                    </li>
                    <li>
                      <b>✓</b>Handle advanced techniques like Dimensionality
                      Reduction
                    </li>
                    <li>
                      <b>✓</b>Handle advanced techniques like Dimensionality
                      Reduction
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <b>✓</b>Handle advanced techniques like Dimensionality
                      Reduction
                    </li>
                    <li>
                      <b>✓</b>Handle advanced techniques like Dimensionality
                      Reduction
                    </li>
                    <li>
                      <b>✓</b>Handle advanced techniques like Dimensionality
                      Reduction
                    </li>
                    <li>
                      <b>✓</b>Handle advanced techniques like Dimensionality
                      Reduction
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="course-requirements">
              <h3>Requirements</h3>
              <ul>
                <li>Prior Knowledge of English</li>
                <li>Prior Knowledge of English</li>
                <li>Prior Knowledge of English</li>
              </ul>
            </div>

            <div className="course-curriculam">
              <h3>Curriculam</h3>
              <p>12 Lessons</p>
              {accordion.map((item, index) => (
                <Accordion key={index} item={item} />
              ))}
            </div>
          </div>
          <div className="course-details-card" key={course._id}>
            <img src={course.poster.url} alt="poster" />
            <div className="course-details-price course-price">
              <div>
                <small>&#8377;{course.price}</small>
                <small>&#8377;2999</small>
              </div>
              <button onClick={() => addtocartHandler(course._id)}>
                <FaShoppingCart />
                Add to cart
              </button>
            </div>
            <div className="card-details">
              <span>
                <SlidersHorizontal className="level" /> Level
              </span>
              <span>{course.level} </span>
            </div>
            <div className="card-details">
              <span>
                <FaClock className="level" /> Duration
              </span>
              <span>{course.duration} month</span>
            </div>
            <div className="card-details">
              <span>
                <LayoutGrid className="level" /> Category
              </span>
              <span>{course.category}</span>
            </div>
            <div className="card-details">
              <span>
                <Globe className="level" /> Language
              </span>
              <span> English</span>
            </div>
            <div className="card-details">
              <span>
                <CiBookmark />
                Access
              </span>
              <span> Lifetime</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
