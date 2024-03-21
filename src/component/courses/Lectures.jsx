import { Link, useNavigate } from "react-router-dom";
import "./Lectures.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getLecture } from "../../redux/actions/courseAction";
const Lectures = ({ user }) => {
  //     window.addEventListener("contextmenu", (e) => {
  //         e.preventDefault();
  //     })
  const { purchasedcourse } = user;
  const params = useParams();

  const { lectures } = useSelector((state) => state.course);
  const [lectureNumber, setLectureNumber] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let isAllowed = false;
  for (const element of purchasedcourse) {
    if (element.course._id === params.id) {
      isAllowed = true;
    }
  }
  if (!isAllowed) {
    return (
      <div className="not-found">
        <h1>please buy course for access the lectures</h1>
        <Link to="/courses" className="btn-primary">
          Go To Courses
        </Link>
      </div>
    );
  }
  useEffect(() => {
    dispatch(getLecture(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      {lectures.length !== 0 && (
        <div className="lecture-container">
          <div className="lectures">
            {lectures &&
              lectures.map((item, index) => (
                <button
                  className="lecture-button"
                  key={item._id}
                  onClick={() => setLectureNumber(index)}
                >
                  {index + 1} {item.title}
                </button>
              ))}
          </div>
          {lectures[lectureNumber] && (
            <div className="video-container">
              <h1>{`${lectureNumber + 1}. ${
                lectures[lectureNumber].title
              }`}</h1>
              <p>{`${lectures[lectureNumber].description}`}</p>

              <video
                controls
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                src={lectures[lectureNumber].video.url}
              ></video>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Lectures;
