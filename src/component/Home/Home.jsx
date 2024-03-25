import React, { useEffect, useState } from "react";
// import ImageSlider from "./ImageSlider"
import "./Home.css";
// import Loader from "../loader/loader";
import { Link } from "react-router-dom";
import img from "../assets/intro.png";
import { useDispatch, useSelector } from "react-redux";
import { getTop3Courses } from "../../redux/actions/courseAction";
import { FaTv } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView();
  useEffect(() => {
    dispatch(getTop3Courses());
  }, [dispatch]);

  const { top3courses } = useSelector((state) => state.course);

  return (
    <>
      <div className="header">
        <div className="info">
          <h1>
            <strong> Build Your Dream With Gs Academy</strong>{" "}
          </h1>
          <Link to="/courses" className="btn-primary">
            Courses
          </Link>
          {/* <h3>Learn With Our World Class Courses</h3> */}
        </div>
      </div>
      <div ref={ref} className={`home-intro ${inView ? "active" : ""}`}>
        <h2>Welcome to Gs Academy Education Online Platform</h2>
        <p>
          Gs Academy helps you to develop essential education and your career of
          years experiences. Transform your life through education to make the
          most of each semester to choose the best major. Prepare for grad
          school. Whatever it is, you can do it here. Explore our igital
          viewbook. Your journey starts here.
        </p>
        <img src={img} alt="intro" />
      </div>
      <div className="home-courses">
        <div className="home-courses-heading">
          <h2>Most Popular Courses</h2>
          <Link to="/courses">
            View All
          </Link>
        </div>
        <div className="home-card">
          {top3courses &&
            top3courses.map((item) => (
              <div className="card" key={item._id}>
                <img src={item.poster.url} alt="poster" />
                <span>{item.category}</span>
                <h2 className="cutoff-text1">{item.title}</h2>
                <div className="course-price">
                  <small>{item.price}&#8377;</small>
                  <small>2999&#8377;</small>
                </div>
                <h3>
                  Author: <b>{item.CreatedBy}</b>
                </h3>
                <div className="home-card-action">
                  <span>
                    <FaTv /> {item.numofVideos} Lessons
                  </span>
                  <Link to={`/coursedetails/${item._id}`} className="link">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
