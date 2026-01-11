import React from "react";
import "./FormModal.scss";

interface FormModalProps {
  onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ onClose }) => {
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
            <label>Title</label>
            <input type="text" placeholder="Title" />
          </div>

          <div className="form-row">
            <label>Title Ar</label>
            <input type="text" placeholder="Title in Arabic" />
          </div>

          <div className="form-row">
            <label>Description</label>
            <input type="text" placeholder="Enter Your Service Name" />
          </div>

          <div className="form-row">
            <label>Description AR</label>
            <input type="text" placeholder="Enter Your Service Name In Arabic" />
          </div>

          <div className="form-row">
            <label>Brands</label>
            <input type="text" placeholder="Brands" />
          </div>

          <div className="form-row">
            <label>Brands AR</label>
            <input type="text" placeholder="Brands AR" />
          </div>

          <div className="form-row">
            <label>Product Type</label>
            <input type="text" placeholder="Product Type" />
          </div>

          <div className="form-row">
            <label>Original Price</label>
            <input type="number" placeholder="0" />
          </div>

          <div className="form-row">
            <label>Key Features AR</label>
            <input type="text" placeholder="Key features (Arabic)" />
          </div>

          <div className="form-row">
            <label>Processing Days</label>
            <input type="text" placeholder="Processing Days" />
          </div>

          <div className="form-row">
            <label>Key Features</label>
            <input type="text" placeholder="Key features" />
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

export default FormModal;
