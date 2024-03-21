// import React, { useState } from "react";
// import "../auth/SignUp.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { tableRequest } from "../../redux/actions/otherAction";
// import Table from "./Table";
// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     age: "",
//     gender: "",
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // console.log(formData)

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     dispatch(tableRequest(formData))
   
//   };

//   const {formdata}=useSelector((state)=>state.other)

//   console.log(formdata)
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="signup-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="address"
//           value={formData.address}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="age"
//           placeholder="age"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <select name="gender" id="gender" value={formData.gender} onChange={handleChange}>
//           <option value="male">male</option>
//           <option value="female">female</option>
//           <option value="other">other</option>
//         </select>

//         <button type="submit" className="btn-primary">
//           submit
//         </button>
//         <p>
//           Already Have an account? <Link to="/login">Login</Link>
//         </p>
//       </form>

//       <Table data={formdata}/>
//     </div>


   
//   );
// };

// export default SignUp;
