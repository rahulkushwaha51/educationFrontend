import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userAction";
import toast from "react-hot-toast";
import img from "../assets/login.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loading, error, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(formData.email, formData.password));
    navigate("/profile");
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  });

  return (
    <div>
      <div className="header">
        <h1> Login</h1>
        <span>
          {" "}
          <Link to="/">Home</Link> <small>&#8250;</small> Login
        </span>
      </div>
      <div className="login">
        <div className="login-intro">
          <h2>Login</h2>
          <img src={img} alt="login" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
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

          <button loading={loading} type="submit" className="btn-primary">
            Login
          </button>
          <div className="login-action">
            <p>
              Not a member?
              <Link to="/signup" className="signup-link">
                {" "}
                SignUp{" "}
              </Link>
              here
            </p>
            <p>
              <Link to="/forgetpassword" className="forgot-password-btn">
                Forgot Password?
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
