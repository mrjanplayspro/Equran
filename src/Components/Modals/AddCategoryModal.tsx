import React from "react";
import "./AddCategoryModal.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddCategoryModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Add Category</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-body">
          <label>
            Category Name
            <input type="text" placeholder="e.g. Web Development" />
          </label>

          <label>
            Description
            <textarea placeholder="Write Category Description" />
          </label>

          <label>
            Category thumbnail
            <input type="file" />
          </label>

          <label>
            Subcategorys
            <div className="subcategory-input">
              <input type="text" placeholder="e.g. Web Development" />
              <button className="plus-btn">+</button>
            </div>
          </label>
        </div>

        <div className="modal-footer">
          <button className="add">Save information</button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
