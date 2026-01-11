import { IoClose } from "react-icons/io5";
import "./ChangePasswordModal.scss"

const ChangePasswordModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
<div className="password-modal-backdrop">
      <div className="password-modal">
        <div className="password-modal__header">
          <h2>Change Password</h2>
          <button className="close-btn" onClick={onClose}>
            <IoClose size={20} />
          </button>
        </div>

        <div className="password-modal__body">
          <div className="form-group">
            <label htmlFor="currentPassword">
              Current Password:<span className="required">*</span>
            </label>
            <input type="password" id="currentPassword" placeholder="Enter Name" />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">
              New Password:<span className="required">*</span>
            </label>
            <input type="password" id="newPassword" placeholder="Enter" />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password:<span className="required">*</span>
            </label>
            <input type="password" id="confirmPassword" placeholder="Enter" />
          </div>
        </div>

        <div className="password-modal__footer">
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
);
export default ChangePasswordModal;
