import React, { useState } from "react";
import "./Accordion.css";


const Accordion = ( accordion ) => {
 const{item, index} = accordion;
  const [show, setShow] = useState(false);

  return (
    <div className="course-accordian">
        <div className="accordian-item" key={index}>
          <div className="accordian-heading">
            <button
              className={`toggle-button ${show ? "show" : ""}`}
              onClick={() => setShow(!show)}
            ><h3>{item.title}</h3></button>
            
          </div>
          <div
            className={`accordian-text ${show ? "show" : ""} `}
          >
            {show && <p>{item.description} </p>}
          </div>
        </div>
     
    </div>
  );
};

export default Accordion;
