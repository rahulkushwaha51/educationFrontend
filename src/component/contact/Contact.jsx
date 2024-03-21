import React, { useState, useEffect } from "react";
import "./Contact.css";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../redux/actions/otherAction";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Locate, Mail, MapPin, Phone } from "lucide-react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const { contactmessage, error } = useSelector((state) => state.other);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    } else {
      toast.success(contactmessage);
      dispatch({ type: "clearMessage" });
    }
  };
  return (
    <div id="contact">
      <div className="header">
        <h1> Contact Us</h1>
        <span>
          {" "}
          <Link to="/">Home</Link> <small>&#8250;</small> Contact Us
        </span>
      </div>
      <div className="contact">
        <div className="contact-form">
          <h2>Contact Us!</h2>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              id="name"
              name="user_name"
              value={name}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn-primary" type="submit">
              Submit
            </button>
            <p>
              Request a course? <Link to="/requestcourse">Click</Link> here
            </p>
          </form>
        </div>
        <div className="support">
          <h2 className="support-heading">Support Contact</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">
                <Phone />
              </span>
              <p className="contact-detail">Mobile: 8839423791</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <Mail />
              </span>
              <p className="contact-detail">Email: info@example.com</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <MapPin />
              </span>
              <p className="contact-detail">Location: Indore, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
