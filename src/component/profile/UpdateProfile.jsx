import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateprofile } from "../../redux/actions/profileAction";
import toast from "react-hot-toast";

import "./UpdateProfile.css";
const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState();

  const dispatch = useDispatch();

  const { error, message } = useSelector((state) => state.profile);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateprofile(name, email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  return (
    <div className="change-profile">
      <h2>Update Profile</h2>

      <form onSubmit={handleSubmit} className="profile-form">
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" Email"
        />
        <button type="submit" className="btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
