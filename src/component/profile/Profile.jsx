import React, { useState, useEffect } from "react";
import "./Profile.css"; // You can create a new CSS file for styling
import ChangePassword from "./ChangePassword";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateprofilepicture } from "../../redux/actions/profileAction";
import { getMyProfile } from "../../redux/actions/userAction";
import UpdateProfile from "./UpdateProfile";

import toast from "react-hot-toast";
import {
  Image,
  LayoutDashboard,
  LockKeyhole,
  User,
  UserRoundCog,
} from "lucide-react";
import { FaClock } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

function Profile(props) {
  const user = props.user;
  const { name, email, createdAt, role, purchasedcourse, subscription } = user;

  console.log(purchasedcourse);

  const dispatch = useDispatch();
  const changeImageSubmitHandler = async (e, image) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("file", image);

    dispatch(updateprofilepicture(myForm));
    dispatch(getMyProfile());
  };

  const { error, message } = useSelector((state) => state.profile);
  const { error: subscriptionerror, message: subscriptionmessage } =
    useSelector((state) => state.subscription);

  useEffect(() => {
    dispatch(getMyProfile());

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (subscriptionerror) {
      toast.error(subscriptionerror);
      dispatch({ type: "clearError" });
    }
    if (subscriptionmessage) {
      toast.success(subscriptionmessage);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  const [isActive, setIsActive] = useState("dashboard");

  return (
    <>
      <div className="profile">
        <div className="header">
          <h1> Profile</h1>
          <span>
            {" "}
            <Link to="/">Home</Link> <small>&#8250;</small> Profile
          </span>
        </div>
        <div className="profile-image">
          <img src={user.avatar.url} alt="Profile" loading="lazy" />
          <div className="username">
            <span>Hello,</span>
            <h2>{name}</h2>
          </div>
        </div>
        <div className="profile-section">
          <div className="profile-menu">
            <menu>
              <li onClick={() => setIsActive("dashboard")}>
                <LayoutDashboard className="icon" />
                Dashboard
              </li>
              <li onClick={() => setIsActive("profile")}>
                <User className="icon" /> My Profile
              </li>
              <li onClick={() => setIsActive("updateprofile")}>
                <UserRoundCog className="icon" />
                Update Profile{" "}
              </li>
              <li onClick={() => setIsActive("changepassword")}>
                <LockKeyhole className="icon" />
                Change Password
              </li>
              <li onClick={() => setIsActive("changeimage")}>
                <Image className="icon" />
                Change Image{" "}
              </li>
            </menu>
          </div>
          <div className="profile-content">
            {isActive === "profile" && (
              <div className="userInfo">
                <span className="entryText">
                  <b>CreatedAt:</b> {createdAt.split("T")[0]}
                </span>
                <span className="entryText">
                  <b>Name:</b>
                  {name}
                </span>
                <span className="entryText">
                  <b>Email:</b> {email}
                </span>

                <span className="entryText">
                  <b>Role:</b> {role}
                </span>
              </div>
            )}
            {isActive === "dashboard" && (
              <div>
                {purchasedcourse !== undefined ? (
                  <div className="course-stack">
                    <h2> Dashboard </h2>
                    {purchasedcourse.map((element, index) => (
                      <div key={index} className="course-card-dash">
                        <img
                          className="course-image"
                          src={element.course.poster.url}
                          alt={`Course ${element}`}
                          loading="lazy"
                        />
                        <div className="course-card-info">
                          <h2>{element.course.title}</h2>
                          <p>{element.course.description} </p>
                          <div className="course-level">
                            <span>
                              <FaClock fill="gray" /> {element.course.duration}{" "}
                              month{" "}
                            </span>
                            <span>
                              <GiNetworkBars fill="gray" />{" "}
                              {element.course.level}{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <h2>Please purchase course</h2>
                )}
              </div>
            )}
            {isActive === "changepassword" && <ChangePassword />}
            {isActive === "changeimage" && (
              <ChangePhotoBox
                changeImageSubmitHandler={changeImageSubmitHandler}
              />
            )}
            {isActive === "updateprofile" && <UpdateProfile />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

function ChangePhotoBox(changeImageSubmitHandler) {
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const changeImage = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="change-image">
      <h2>Change Profile Image</h2>
      <form
        action="submit"
        onClick={(e) => changeImageSubmitHandler(e, image)}
        className="image-form"
      >
        {imagePrev && <img src={imagePrev} alt="preview" />}
        <input type="file" placeholder="enter image" onChange={changeImage} />
        <button type="submit" className="btn-primary">
          change Image
        </button>
      </form>
    </div>
  );
}
