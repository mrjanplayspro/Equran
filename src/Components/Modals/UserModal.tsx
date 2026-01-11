import React from "react";


interface FormModalProps {
  onClose: () => void;
}

const User: React.FC<FormModalProps> = ({ onClose }) => {
  return (
    <div className="form-modal">
      <div className="form-box">
        <h3>Form Fields</h3>
        <form className="form-grid">
          <div className="form-row">
            <label>Name</label>
            <input type="text" placeholder="Enter Name" />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" />
          </div>

          <div className="form-row">
            <label>Password</label>
            <input type="password"  placeholder="Enter Password"/>
          </div>

          <div className="form-row">
            <label>Role</label>
            <input type="text" placeholder="Enter Role" />
          </div>
    
          <div className="form-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default User;
