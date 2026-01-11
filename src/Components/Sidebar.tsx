import Logo from "../images/WhatsApp Image 2024-08-02 at 18.39.36_5327e5b2 2.png"
import styles from "./Sidebar.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiBook,
  FiUsers,
  FiMessageCircle,
  FiVolume2,
  FiBox,
  FiHelpCircle,
  FiUser,
  FiBell,
  FiSettings,
  FiFileText,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login-layout');
  };

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img onClick={handleClick} src={Logo} alt="E-Quran Logo" />
      </div>
      <nav className={styles.nav}>
        <NavLink to="/dashboard" className={getLinkClass}><FiGrid /> Dashboard</NavLink>
        <NavLink to="/courses" className={getLinkClass}><FiBook /> Courses</NavLink>
        <NavLink to="/instructors" className={getLinkClass}><FiUsers /> Instructors</NavLink>
        <NavLink to="/students" className={getLinkClass}><FiUsers /> Students</NavLink>
        <NavLink to="/messages" className={getLinkClass}><FiMessageCircle /> Messages</NavLink>
        <NavLink to="/banner-listing" className={getLinkClass}><FiVolume2 /> Banner Listing</NavLink>
        <NavLink to="/products" className={getLinkClass}><FiBox /> Products</NavLink>
        <NavLink to="/question-bank" className={getLinkClass}><FiHelpCircle /> Question Bank</NavLink>
        <NavLink to="/my-account" className={getLinkClass}><FiUser /> My Account</NavLink>
        <NavLink to="/users" className={getLinkClass}><FiUsers /> Users</NavLink>
        <NavLink to="/notifications" className={getLinkClass}><FiBell /> Notification</NavLink>
        <NavLink to="/role-management" className={getLinkClass}><FiSettings /> Role Management</NavLink>
        <NavLink to="/orders" className={getLinkClass}><FiFileText /> Orders</NavLink>
      </nav>
      <div className={styles.logout}>
        <NavLink to="/logout" className={getLinkClass}><FiLogOut /> Logout</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
