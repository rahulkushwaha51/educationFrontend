import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profileAction';
import './ChangePassword.css'; // Import your CSS file
import toast from 'react-hot-toast';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
    
    
  };
  
  const {error,message} = useSelector(state=>state.profile)

  useEffect(() => {
    
  if(error){
    toast.error(error)
    dispatch({type:'clearError'})
  }
  if(message){
    toast.success(message)
    dispatch({type:'clearMessage'})
  }
    
  }, [dispatch,error,message]);
 
  

  return (
    <div className="change-password-container">
      <form onSubmit={handleSubmit}>
        <h1 className="change-password-heading">Change Password</h1>
        <div className="input-container">
          <input
            required
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Old Password"
            className="password-input"
          />
          <input
            required
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className="password-input"
          />
          <button  type="submit" className="btn-primary change-password-button">
            Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
