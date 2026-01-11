import React from "react";
import "./BannerModal.scss";

interface FormModalProps {
  onClose: () => void;
}

const BannerModal: React.FC<FormModalProps> = ({ onClose }) => {
  return (
    <div className="form-modal">
      <div className="form-box">
        <h3>Form Fields</h3>
        <form className="form-grid">
          <div className="form-row">
            <label>Photo Url</label>
            <div className="upload-box">+</div>
          </div>

          <div className="form-row">
            <label>Description</label>
            <input type="text" placeholder="Enter Description" />
          </div>
x
          <div className="form-row">
            <label>Banner Title</label>
            <input type="text" placeholder="Enter Banner Title" />
          </div>

          <div className="form-row">
            <label>Promo Code</label>
            <input type="text" />
          </div>

          <div className="form-row">
            <label>Type</label>
            <input type="text" />
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

export default BannerModal;
