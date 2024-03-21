import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/actions/userAction";
import { Input } from "@chakra-ui/react";
import img from "../assets/login.png";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signedUp, setSignedUp] = useState(false);
  const [imagePrev, setImagePrev] = useState("");

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const updatedFormData = { ...formData };
      updatedFormData.image = file;
      setImagePrev(reader.result); // Set the image preview
      setFormData(updatedFormData); // Update the formData state
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.append("file", formData.image);
    myForm.append("name", formData.name);
    myForm.append("email", formData.email);
    myForm.append("password", formData.password);
    dispatch(signup(myForm));
    setSignedUp(true);
    if (signedUp) {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="header">
        <h1> Signup</h1>
        <span>
          {" "}
          <Link to="/">Home</Link> <small>&#8250;</small> Signup
        </span>
      </div>
      <div className="signup">
        <div className="signup-intro">
          <h2>Signup</h2>
          <img src={img} alt="Signup" />
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          {imagePrev && <img src={imagePrev} alt="avatar" />}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="file"
            name="chooseAvatar"
            placeholder="Upload Image"
            onChange={changeImageHandler}
          />

          <button type="submit" className="btn-primary">
            Sign Up
          </button>
          <p>
            Already Have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
