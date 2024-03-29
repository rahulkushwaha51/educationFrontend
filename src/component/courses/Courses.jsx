// Courses.jsx
import React, { useEffect, useState } from "react";
import "./Courses.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/courseAction";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import Loader from "../loader/Loader";
import { CiStar } from "react-icons/ci";
import { FaFilter, FaRegStar } from "react-icons/fa";
import { addToCart } from "../../redux/actions/cartAction";

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.course);
  const { message, error } = useSelector((state) => state.cart);
  const categories = [
    "Web development",
    "Artificial",
    "english",
    "Mathmatics",
    "Engineering",
  ];
  const ratings = [5, 4, 3, 2, 1];
  const prices = ["All", "free", "paid"];
  const handleSearch = (e) => {
    e.preventdefault;
    setKeyword(e.target.value);
  };
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const addtocartHandler = (courseId) => {
    dispatch(addToCart(courseId));
  };
  {
    useEffect(() => {
      {
        if (courses.length === 0) {
          dispatch(getAllCourses());
        }
        if (error) {
          toast.error(error);
          dispatch({ type: "clearError" });
        }
        if (message) {
          toast.success(message);
          dispatch({ type: "clearMessage" });
        }
      }
    }, [keyword, category, price, rating, message, error]);
  }

  const HandleSearch = (e) => {
    e.preventdefault;
    dispatch(getAllCourses(category, keyword, price, rating));

    setKeyword("");
    setCategory("");
    setPrice("");
    setRating("");
  };

  return (
    <div className="course-container">
      <div className="header">
        <h1> Courses</h1>
        <span>
          {" "}
          <Link to="/">Home</Link> <small>&#8250;</small> Courses
        </span>
      </div>
      <div className="search">
        <h1>
          {" "}
          <span>
            <FaFilter />
          </span>
          Filter
        </h1>
        <input
          type="search"
          value={keyword}
          onChange={(e) => handleSearch(e)}
          placeholder="Search Here"
        />
        <div className="search-action">
          <span>{`Showing ${courses.length} result `} </span>
          <button className="btn-primary" onClick={(e) => HandleSearch(e)}>
            Search
          </button>
        </div>
      </div>
      <div className="content-box">
        <div className="filter">
          <div className={`dropdown ${isOpen1 ? "active" : ""}`}>
            <div className="filter-option">
              <h1 className="title">Categories</h1>
              <button className="dropdown-btn" onClick={toggleDropdown1}>
                {isOpen1 ? "▲" : "▼"}
              </button>
            </div>
            <div className="dropdown-content">
              {categories.map((item, index) => (
                <label key={index} className="label">
                  <input
                    type="radio"
                    name="category"
                    onChange={() => setCategory(item)}
                    checked={category === item}
                  />
                  <span className="checkmark"></span>
                  {item}
                </label>
              ))}
            </div>
          </div>
          <div className={`dropdown ${isOpen2 ? "active" : ""}`}>
            <div className="filter-option">
              <h1 className="title">Ratings</h1>
              <button className="dropdown-btn" onClick={toggleDropdown2}>
                {isOpen2 ? "▲" : "▼"}
              </button>
            </div>
            <div className="dropdown-content">
              {ratings.map((item, index) => (
                <label key={index} className="label">
                  <input
                    type="radio"
                    name="rating"
                    onChange={() => setRating(item)}
                    checked={rating === item}
                  />
                  <span className="checkmark"></span>
                  <div key={index} className="star">
                    {Array.from({ length: item }, (_, starIndex) => (
                      <span key={starIndex} className="icon">
                        <CiStar size={"1.5rem"} />
                      </span>
                    ))}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className={`dropdown ${isOpen3 ? "active" : ""}`}>
            <div className="filter-option">
              <h1 className="title">Price</h1>
              <button className="dropdown-btn" onClick={toggleDropdown3}>
                {isOpen3 ? "▲" : "▼"}
              </button>
            </div>
            <div className="dropdown-content">
              {prices.map((item, index) => (
                <label key={index} className="label">
                  <input
                    type="radio"
                    name="price"
                    onChange={() => setPrice(item)}
                    checked={price === item}
                  />
                  <span className="checkmark"></span>
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="course-card">
          {courses && courses.length > 0 ? (
            courses.map((item) => (
              <div key={item._id} className="course-card-row">
                <CourseCard
                  courseId={item._id}
                  image={item.poster.url}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  level={item.level}
                  price={item.price}
                  duration={item.duration}
                  addtocartHandler={addtocartHandler}
                />
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
