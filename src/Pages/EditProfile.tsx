
import './EditProfile.scss';
import { FaEnvelope, FaLock, FaPhone, FaCamera } from 'react-icons/fa';

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>

      <div className="profile-pic-wrapper">
        <div className="profile-pic">
          <FaCamera className="camera-icon" />
        </div>
      </div>

      <form className="edit-form">
        <div className="form-group">
          <label>Email</label>
          <div className="input-wrapper">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" />
          </div>
        </div>

        <div className="form-group">
          <label>Change Password</label>
          <div className="input-wrapper">
            <FaLock className="input-icon" />
            <input type="password" placeholder="New Password" />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Phone Number</label>
          <div className="input-wrapper">
            <FaPhone className="input-icon" />
            <input type="tel" placeholder="Phone Number" />
          </div>
        </div>

        <div className="form-buttons">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="save-btn">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
