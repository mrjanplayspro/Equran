import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserEdit, FaFileAlt, FaGlobe, FaKey } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import './ProfilePage.scss';
import ChangePasswordModal from '../Components/Modals/ChangePasswordModal';
import ChangeLanguageModal from '../Components/Modals/ChangeLanguageModal';
import Profile from "../images/Group 1000003617.png"
const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  

  return (
    <div className="profile-container">
      <h4>My Account</h4>
      <div className="profile-header">
        <img src={Profile} alt="User" className="profile-avatar" />
        <div>
          <h3>Rayna Siphron</h3>
          <p>raynasiphron@gmail.com</p>
        </div>
      </div>

      <div className="profile-buttons">
        <button onClick={() => navigate('/edit-profile')}>
          <FaUserEdit /> Edit Profile <FiChevronRight className="arrow-icon" />
        </button>
        <button onClick={() => navigate('/terms')}>
          <FaFileAlt /> Terms & Conditions <FiChevronRight className="arrow-icon" />
        </button>
        <button onClick={() => navigate('/privacy')}>
          <FaFileAlt /> Privacy Policy <FiChevronRight className="arrow-icon" />
        </button>
        <button onClick={() => setShowPasswordModal(true)}>
          <FaKey /> Change Password <FiChevronRight className="arrow-icon" />
        </button>
        <button onClick={() => setShowLanguageModal(true)}>
          <FaGlobe /> Change Language <FiChevronRight className="arrow-icon" />
        </button>
      </div>

      {showPasswordModal && <ChangePasswordModal onClose={() => setShowPasswordModal(false)} />}
      {showLanguageModal && <ChangeLanguageModal onClose={() => setShowLanguageModal(false)} />}
    </div>
  );
};

export default ProfilePage;
