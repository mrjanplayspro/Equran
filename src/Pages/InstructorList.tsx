
import "./InstructorList.scss";
import { NavLink } from "react-router-dom";
import serach from "../images/Emphasis (1).png"





const InstructorList = () => {
interface Instructor {
  id: number;
  name: string;
  email: string;
  phone: string;
  country: string;
  description: string;
  activeCourses: string;
  status: "Active" | "Pending" | "Inactive" | "Suspend";
  avatar?: string; // optional image
  initials?: string; // optional initials
  color?: string; // background color for initials
}


const instructors: Instructor[] = [
  {
    id: 1,
    name: "Abu Bin Ishtiyak",
    email: "info@softnio.com",
    phone: "+811 758-756343",
    country: "United State",
    description: "Lorem ipsum dolor sit amet.",
    activeCourses: "12 active courses",
    status: "Active",
    initials: "AB",
    color: "rgba(133, 79, 255, 1)",
  },
  {
    id: 2,
    name: "Ashley Lawson",
    email: "ashley@softnio.com",
    phone: "+811 534-98324",
    country: "United Kingdom",
    description: "Lorem ipsum dolor sit amet.",
    activeCourses: "24 active courses",
    status: "Pending",
    initials: "AL",
    color: "#A0AEC0",
  },
  {
    id: 3,
    name: "Joe Larson",
    email: "larson@example.com",
    phone: "+811 987-4958",
    country: "United State",
    description: "Lorem ipsum dolor sit amet.",
    activeCourses: "2 active courses",
    status: "Active",
    initials: "JL",
    color: "#0BC5EA",
  },
  {
    id: 4,
    name: "Jane Montgomery",
    email: "jane44@example.com",
    phone: "+811 765-4958",
    country: "Canada",
    description: "Lorem ipsum dolor sit amet.",
    activeCourses: "14 active courses",
    status: "Suspend",
    initials: "JM",
    color: "#F56565",
  },
  {
    id: 5,
    name: "Frances Burns",
    email: "frances@example.com",
    phone: "+811 987-9875",
    country: "Australia",
    description: "Lorem ipsum dolor sit amet.",
    activeCourses: "20 active courses",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg", // 👈 use your image URL
  },
  {
    id: 6,
    name: "Alan Butler",
    email: "butler@example.com",
    phone: "+811 847-4532",
    country: "Brazil",
    description: "Lorem ipsum dolor sit amet.",
    activeCourses: "3 active courses",
    status: "Inactive",
    avatar: "../images/b-sm.jpg.png",
  },
  {
    id: 7,
    name: "Victoria Lynch",
    email: "victoria@example.com",
    phone: "+811 231-5463",
    country: "India",
    description: "Lorem ipsum dolor sit amet.",
    activeCourses: "5 active courses",
    status: "Active",
    initials: "VL",
    color: "#F6AD55",
  },
  {
    id: 8,
    name: "Patrick Newman",
    email: "patrick@example.com",
    phone: "+811 347-4958",
    country: "Bangladesh",
    description: "Lorem ipsum dolor sit amet.",
    activeCourses: "29 active courses",
    status: "Active",
    initials: "PN",
    color: "#38B2AC",
  },
  {
    id: 9,
    name: "Jane Harris",
    email: "harris@example.com",
    phone: "+811 816-4958",
    country: "India",
    description: "Lorem ipsum dolor sit amet.",
    activeCourses: "6 active courses",
    status: "Pending",
    avatar: "https://randomuser.me/api/portraits/women/58.jpg",
  },
  {
    id: 10,
    name: "Emma Walker",
    email: "walker@example.com",
    phone: "+811 162-5647",
    country: "Brazil",
    description: "Lorem ipsum dolor sit amet.",
    activeCourses: "10 active courses",
    status: "Active",
    initials: "EW",
    color: "#805AD5",
  },
];

  return (
    <>


    
          <div className="instructor-dashboard">
            <div className="f">
              <div className="he">
      <h2>Instructor Overview</h2>
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
 <div className="search-header">
      <div className="search-box">
        <input type="text" placeholder="Search by name" />
        <span className="search-icon"><img src={serach} alt="" /></span>
      </div>

      <select className="status-dropdown">
        <option>Status</option>
        <option>Active</option>
        <option>Pending</option>
        <option>Inactive</option>
      </select>

      <button className="add-button">
        <span className="plus">＋</span> Add
      </button>
    </div>
  </div>

    
    </div>
    <div className="instructor-list">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Instructor</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Description</th>
            <th>Active Courses</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>
                <div className="instructor-info">
              <td className="avatar-cell">
  {instructor.avatar ? (
    <img src={instructor.avatar} alt={instructor.name} className="avatar-img" />
  ) : (
    <div
      className="avatar-initials"
      style={{ backgroundColor: instructor.color || "#ccc" }}
    >
      {instructor.initials}
    </div>
  )}
</td>
                  <div>
                    <div className="name">{instructor.name}</div>
                    <div className="email">{instructor.email}</div>
                  </div>
                </div>
              </td>
              <td>{instructor.phone}</td>
              <td>{instructor.country}</td>
              <td>{instructor.description}</td>
              <td>
                <span className={`status ${instructor.status.toLowerCase()}`}>
                  {instructor.status}
                </span>
              </td>
              <td>⋯</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default InstructorList;
