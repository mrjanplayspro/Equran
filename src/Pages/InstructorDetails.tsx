import {  useState } from 'react';
import "./InstructorDetails.scss";
import { FaBook, FaEye, FaUserCircle } from 'react-icons/fa';
import { GrLike } from 'react-icons/gr';
import { MdEditSquare } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {  MoreVertical, Star, Trash2 } from 'lucide-react';
import  Big1  from "../images/ft.png"
import Chart2 from "../images/image (6).png"
import Chart3 from "../images/image (7).png"




const reviews = Array(6).fill({
  student: "Abu Bin Ishtiyak",
  email: "Admin@Developercluix.Com",
  course: "UI/UX Design With Adobe XD",
  rating: 5,
  review: "The Instructor Was Very Knowledgeable..",
});

const courses = [
  {
    name: "Learn Android Development With Project",
    status: "Active",
  },
  {
    name: "Learn Android Development With Project",
    status: "Pending",
  },
  {
    name: "Learn Android Development With Project",
    status: "Cancelled",
  },
];

const InstructorDetails = () => {
  const [activeTab, setActiveTab] = useState('personal');


  

  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="profile-details">
            <div className="profile-container">
              {/* --- Profile Rows --- */}
              <div className="profile-row">
                <div className="profile-label">Title</div>
                <div className="profile-value">Mr.</div>

                <div className="profile-label">Full Name</div>
                <div className="profile-value">Abu Bin Ishtiyak</div>
              </div>

              <div className="profile-row">
                <div className="profile-label">Date of Birth</div>
                <div className="profile-value">10 Aug, 1980</div>

                <div className="profile-label">Surname</div>
                <div className="profile-value">IO</div>
              </div>

              <div className="profile-row">
                <div className="profile-label">Mobile Number</div>
                <div className="profile-value">+811 758-756433</div>

                <div className="profile-label">Email Address</div>
                <div className="profile-value">info@softnio.com</div>
              </div>

              <div className="profile-section-heading">Additional Information</div>

              <div className="profile-row">
                <div className="profile-label">Joining Date</div>
                <div className="profile-value">08-16-2018 09:04PM</div>

                <div className="profile-label">Reg Method</div>
                <div className="profile-value">Email</div>
              </div>

              <div className="profile-row">
                <div className="profile-label">Country</div>
                <div className="profile-value">United State</div>

                <div className="profile-label">Nationality</div>
                <div className="profile-value">United State</div>
              </div>
            </div>

            {/* --- Admin Notes --- */}
            <div className="admin-notes">
              <h4>Admin Note</h4>
              {[1, 2].map((_, i) => (
                <div className="note" key={i}>
                  <p>
                    Aproin at metus et dolor tincidunt feugiat eu id quam.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aenean sollicitudin non
                    nunc vel pharetra.
                  </p>
                  <div className="note-footer">
                    <span>Added on November 18, 2019 at 5:34 PM</span>
                    <button className="delete-note">Delete Note</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        case 'overview':
          return <div className="tab-content">   <div className="dashboard">
      <div className="dashboard__header">
        <h2>Profile Overview</h2>
        <button className="dashboard__date-selector">
          <i className="calendar-icon" /> Last 30 Days ▸
        </button>
      </div>

      <div className="dashboard__earning-card">
        <div className="dashboard__earning-stats">
          <div>
            <p>Monthly</p>
            <h3>9.28K</h3>
            <span className="positive">↑ 4.63%</span>
          </div>
          <div>
            <p>Weekly</p>
            <h3>2.69K</h3>
            <span className="negative">↓ 1.92%</span>
          </div>
          <div>
            <p>Daily (Avg)</p>
            <h3>0.94K</h3>
            <span className="positive">↑ 3.45%</span>
          </div>
        </div>

        <div className="dashboard__chart-placeholder">
          {/* Chart image placeholder */}
          <img src={Big1} alt="Line chart" />
        </div>
      </div>

      <div className="dashboard__bottom-stats">
        <div className="dashboard__stat-box">
          <h4>Active Students</h4>
          <h3>329</h3>
          <span className="positive">↑ 4.63% vs. last week</span>
          <div className="dashboard__chart-small">  
            <img src={Chart2} alt="Small chart 1" />  
          </div>
        </div>
        <div className="dashboard__stat-box">
          <h4>New Enrolment</h4>
          <h3>194</h3>
          <span className="positive">↑ 4.63% vs. Yesterday</span>
          <div className="dashboard__chart-small">
            <img src={Chart3}alt="Small chart 2" />
          </div>
        </div>
      </div>
    </div></div>;
      case 'courses':
        return  <div className="course-list">
      <table>
        <thead>
          <tr>
            <th>Course List</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, idx) => (
            <tr key={idx}>
              <td>{course.name}</td>
              <td>
                <span className={`status ${course.status.toLowerCase()}`}>
                  {course.status}
                </span>
              </td>
              <td>
                <button className="delete-btn" title="Delete">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      case 'review':
        return  <div className="review-list">
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Course name</th>
            <th>Rating</th>
            <th>Review</th>
            <th>
              <MoreVertical />
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="student-info">
                  <div className="name">{item.student}</div>
                  <div className="email">{item.email}</div>
                </div>
              </td>
              <td>{item.course}</td>
              <td>
                <div className="stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} fill="gold" color="gold" size={16} />
                  ))}
                </div>
              </td>
              <td>{item.review}</td>
              <td>
                <button className="delete-btn" title="Delete">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      default:
        return null;
    }
  };

  return (
    <>
    <div className="instructor-details-wrapper">
      {/* Page Header - OUTSIDE card */}
          <div className="instructor-dashboard">
            <div className="f">
              <div className="she">
      <h2>Instructor Overview  /         <span className='gr'>Abu Bin Ishtiyak</span></h2>
              </div>

      {/* Top Navigation Tabs */}
<div className="tabs-container">
  <div className="tabs">
    <NavLink to="/instructors" className={({ isActive }) => isActive ? "tab active" : "tab"}>Overview</NavLink>
    <NavLink to="/list" className={({ isActive }) => isActive ? "tab active" : "tab"}>List</NavLink>
    <NavLink to="/details" className={({ isActive }) => isActive ? "tab active" : "tab"}>Details</NavLink>
    <NavLink to="/payment" className={({ isActive }) => isActive ? "tab active" : "tab"}>Payment</NavLink>
  </div>
</div>
  </div>

    
    </div>

      {/* Inside Card */}
      <div className="profile-card">
        <div className="tabs">
          <button
            onClick={() => setActiveTab('personal')}
            className={activeTab === 'personal' ? 'active' : ''}
          >
            <FaUserCircle /> Personal information
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={activeTab === 'overview' ? 'active' : ''}
          >
            <FaEye /> Overview
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={activeTab === 'courses' ? 'active' : ''}
          >
            <FaBook /> Courses
          </button>
          <button
            onClick={() => setActiveTab('review')}
            className={activeTab === 'review' ? 'active' : ''}
          >
            <GrLike /> Review
          </button>
          <button className="edit-btn">
            <MdEditSquare />
          </button>
        </div>

        <div className="tab-panel">{renderContent()}</div>
      </div>
    </div>
    </>
  );
};

export default InstructorDetails;
