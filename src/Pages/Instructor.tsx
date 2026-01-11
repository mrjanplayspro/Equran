
import Face1 from "../images/a-sm.jpg.png"
import Face2 from "../images/b-sm.jpg.png"
import "./Instructorr.scss"
import { NavLink } from "react-router-dom";

function Instructor() {


  return (
    <div>



          <div className="instructor-dashboard">
            <div className="f">
      <h2>Instructor Overview</h2>

      {/* Top Navigation Tabs */}
<div className="tabs-container">
  <div className="tabs">
    <NavLink to="/instructors" className={({ isActive }) => isActive ? "tab active" : "tab"}>Overview</NavLink>
    <NavLink to="/list" className={({ isActive }) => isActive ? "tab active" : "tab"}>List</NavLink>
    <NavLink to="/details" className={({ isActive }) => isActive ? "tab active" : "tab"}>Details</NavLink>
    <NavLink to="/payment" className={({ isActive }) => isActive ? "tab active" : "tab"}>Payment</NavLink>
  </div>
</div>
  <div className="calendar">
    <input type="date" defaultValue="2023-12-28" />
  </div>
  </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="main-card">
          <h4>Total Earning</h4>
          <div className="earning-stats">
            <div className="earning-block">
              <p>Monthly</p>
              <h2>9.28K</h2>
              <p className="green">↑ 4.63%</p>
            </div>
            <div className="earning-block">
              <p>Weekly</p>
              <h2>2.69K</h2>
              <p className="red">↓ 1.92%</p>
            </div>
          </div>
          <p className="date-label">01 Jul, 2020</p>
        </div>

        <div className="side-cards">
          <div className="side-card">
            <p className="label purple">Active Students</p>
            <h3>329</h3>
            <p className="green">↑ 4.63% <span>vs. last week</span></p>
          </div>
          <div className="side-card">
            <p className="label purple">New Enrolment</p>
            <h3>194</h3>
            <p className="green">↑ 4.63% <span>vs. Yesterday</span></p>
          </div>
        </div>
      </div>
    </div>
      
    <div className="dashboard-row">
      {/* Top Courses */}
      <div className="card top-courses">
        <div className="card-header">
          <h3>Top Courses</h3>
          <span className="tag">Weekly</span>
        </div>
        <ul className="course-list">
          <li className="course-item">
<span className="course-badge green">UI/UX</span>
            <div className="course-info">
              <p className="name">UI/UX Design with Adobe XD</p>
              <p className="price">$85.00</p>
            </div>
            <div className="course-sales">
              <p>$2,125.00</p>
              <span>25 Sold</span>
            </div>
          </li>
          <li className="course-item">
<span className="course-badge yellow">AD</span>

            <div className="course-info">
              <p className="name">Android App Development</p>
              <p className="price">$95.00</p>
            </div>
            <div className="course-sales">
              <p>$1,710.00</p>
              <span>19 Sold</span>
            </div>
          </li>
          <li className="course-item">
   <span className="course-badge red">WD</span>

            <div className="course-info">
              <p className="name">Wordpress Development</p>
              <p className="price">$72.00</p>
            </div>
            <div className="course-sales">
              <p>$1,050.00</p>
              <span>15 Sold</span>
            </div>
          </li>
          <li className="course-item">
            <span className="course-badge purple">ML</span>

            <div className="course-info">
              <p className="name">Machine Learning</p>
              <p className="price">$110.00</p>
            </div>
            <div className="course-sales">
              <p>$990.00</p>
              <span>10 Sold</span>
            </div>
          </li>
          <li className="course-item">
      <span className="course-badge blue">RD</span>

            <div className="course-info">
              <p className="name">Responsive Design</p>
              <p className="price">$88.00</p>
            </div>
            <div className="course-sales">
              <p>$960.00</p>
              <span>12 Sold</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Top Instructors */}
      <div className="card top-instructors">
        <div className="card-header">
          <h3>Top Instructors</h3>
          <a href="#">View All</a>
        </div>
        <ul className="instructor-list">
          <li className="instructor-item">
            <div className="avatar first">AB</div>
            <div className="info">
              <p className="name">Abu Bin Ishtiyak</p>
              <p className="email">info@softnio.com</p>
            </div>
            <div className="reviews">⭐ 25 Reviews</div>
          </li>
          <li className="instructor-item">
            <div className="avatar second">AL</div>
            <div className="info">
              <p className="name">Ashley Lawson</p>
              <p className="email">ashley@softnio.com</p>
            </div>
            <div className="reviews">⭐ 22 Reviews</div>
          </li>
          <li className="instructor-item">
            <div className="avatar third">JM</div>
            <div className="info">
              <p className="name">Jane Montgomery</p>
              <p className="email">jane84@example.com</p>
            </div>
            <div className="reviews">⭐ 19 Reviews</div>
          </li>
          <li className="instructor-item">
            <div className="avatar fourth">LH</div>
            <div className="info">
              <p className="name">Larry Henry</p>
              <p className="email">larry10@example.com</p>
            </div>
            <div className="reviews">⭐ 24 Reviews</div>
          </li>
        </ul>
      </div>

      {/* Support Requests */}
      <div className="card support-requests">
        <div className="card-header">
          <h3>Support Requests</h3>
          <a href="#">All Requests</a>
        </div>
        <ul className="support-list">
          <li className="support-item">
            <div className="avatar"><img src={Face1}alt="" /></div>
            <div className="info">
              <p className="name">Vincent Lopez</p>
              <p className="msg">Thanks for contact us with your issues...</p>
            <span className="time">6 min ago</span>
            </div>
          </li>
          <li className="support-item">
            <div className="avatar">DM</div>
            <div className="info">
              <p className="name">Daniel Moore</p>
              <p className="msg">Thanks for contact us with your issues...</p>
            <span className="time">2 hours ago</span>
            </div>
          </li>
          <li className="support-item">
            <div className="avatar"><img src={Face2}alt="" /></div>
            <div className="info">
              <p className="name">Larry Henry</p>
              <p className="msg">Thanks for contact us with your issues...</p>
            <span className="time">3 hours ago</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>




  )

}

export default Instructor;

