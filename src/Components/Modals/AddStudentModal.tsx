import React from 'react';
import './AddStudentModal.scss';

interface AddStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add Student</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-tabs">
          <span className="active-tab">Student Information</span>
          <span>Address</span>
        </div>
        <form className="modal-form">
          <div className="form-row">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="UI/UX Design with Adobe XD" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="+880" />
            <input type="date" placeholder="Date of Birth" />
          </div>
          <div className="payment-methods">
            <label>Payment Methods</label>
            <div className="checkboxes">
              <label><input type="checkbox" /> Card</label>
              <label><input type="checkbox" /> Bitcoin</label>
              <label><input type="checkbox" /> Cash</label>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="add-btn">Add Student</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;
