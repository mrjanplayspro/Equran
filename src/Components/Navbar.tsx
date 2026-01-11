
import styles from "./Navabar.module.scss";
import { FiSearch,  FiChevronDown } from "react-icons/fi";
import Msg from "../images/Item → Link → Emphasis.png"
import Bell from "../images/Bell.png"
import User from "../images/Background.png"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* Search Bar */}
      <div className={styles.searchBar}>
        <FiSearch />
        <input type="text" placeholder="Search" />
      </div>

      {/* Right Side: Language, Notification, User */}
      <div className={styles.right}>
        <div className={styles.language}>
        <img src={Msg} alt="" />
        </div>
        <div className={styles.notification}>
        <img src={Bell} alt="" />
        </div>
        <div className={styles.profile}>
          <img src={User} alt="User" />
          <div>
            <span className={styles.role}>Administrator</span>
            <div className={styles.last}>
            <p className={styles.name}>Abu Bin Ishiyk</p>       <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
