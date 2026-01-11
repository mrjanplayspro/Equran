import React from "react";


interface FormModalProps {
  onClose: () => void;
}

const NotificationModal: React.FC<FormModalProps> = ({ onClose }) => {
  return (
    <div className="form-modal">
      <div className="form-box">
        <h3>Form Fields</h3>
        <form className="form-grid">
          <div className="form-row">
            <label>Notification Title</label>
            <input type="text" placeholder="Enter Notification Title" />
          </div>

          <div className="form-row">
            <label>Description</label>
            <input type="text" placeholder="Enter Description" />
          </div>

          <div className="form-row">
            <label>User Type</label>
            <input type="text"  placeholder="Select Option"/>
          </div>

          <div className="form-row">
            <label>User</label>
            <input type="text" placeholder="Enter Search User" />
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

export default NotificationModal;
