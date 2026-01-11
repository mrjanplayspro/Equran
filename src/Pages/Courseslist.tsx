
import "./course.scss"
import "./Courselist.scss"

import { NavLink} from "react-router-dom";
import AddCategoryModal from "../Components//Modals/AddCategoryModal";
import Pagination from "../Components/Pagination";
import { useState } from "react";



function Courseslist() {





   const [showModal, setShowModal] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 16;

  const courses = [
    {
      id: 1,
      shortCode: "RD",
      shortColor: "#7e57c2",
      title: "Responsive Design",
      category: "Web Development",
      instructor: "Alex Ashley",
      lessons: 32,
      enrolled: 25,
      status: "Active",
      price: "$30",
      deadline: "20.4.2021",
    },
    {
      id: 2,
      shortCode: "AD",
      shortColor: "#00bcd4",
      title: "Android Development",
      category: "Mobile Application",
      instructor: "Michael Wood",
      lessons: 11,
      enrolled: 7,
      status: "Pending",
      price: "$65",
      deadline: "10.5.2021",
    },
    {
      id: 3,
      shortCode: "UD",
      shortColor: "#ffc107",
      title: "UI/UX Design",
      category: "Graphics Design",
      instructor: "Abu Bin Istiak",
      lessons: 12,
      enrolled: 8,
      status: "Active",
      price: "$20",
      deadline: "15.4.2021",
    },
    {
      id: 4,
      shortCode: "WT",
      shortColor: "#8e24aa",
      title: "WordPress Theme Development",
      category: "Web Development",
      instructor: "Emily Smith",
      lessons: 24,
      enrolled: 3,
      status: "Active",
      price: "$50",
      deadline: "20.4.2021",
    },
    {
      id: 5,
      shortCode: "AD",
      shortColor: "#00bcd4",
      title: "Android Development",
      category: "Mobile Application",
      instructor: "Jhon Doe",
      lessons: 11,
      enrolled: 7,
      status: "Pending",
      price: "$65",
      deadline: "10.5.2021",
    },
    {
      id: 6,
      shortCode: "UD",
      shortColor: "#ffc107",
      title: "UI/UX Design",
      category: "Graphics Design",
      instructor: "Abu Bin Istiak",
      lessons: 12,
      enrolled: 8,
      status: "Active",
      price: "$20",
      deadline: "15.4.2021",
    },
    {
      id: 7,
      shortCode: "RD",
      shortColor: "#7e57c2",
      title: "Responsive Design",
      category: "Web Development",
      instructor: "Lara Ashley",
      lessons: 22,
      enrolled: 29,
      status: "Active",
      price: "$50",
      deadline: "22.5.2021",
    },
    {
      id: 8,
      shortCode: "AD",
      shortColor: "#00bcd4",
      title: "Android Development",
      category: "Mobile Application",
      instructor: "Michael Wood",
      lessons: 11,
      enrolled: 7,
      status: "Pending",
      price: "$65",
      deadline: "10.5.2021",
    },
    {
      id: 9,
      shortCode: "UD",
      shortColor: "#ffc107",
      title: "UI/UX Design",
      category: "Graphics Design",
      instructor: "Lara Watson",
      lessons: 22,
      enrolled: 17,
      status: "Active",
      price: "$20",
      deadline: "15.4.2021",
    },
    {
      id: 10,
      shortCode: "WT",
      shortColor: "#8e24aa",
      title: "WordPress Theme Development",
      category: "Web Development",
      instructor: "Mark Smith",
      lessons: 18,
      enrolled: 6,
      status: "Active",
      price: "$50",
      deadline: "20.4.2021",
    },
  ];




const handleChangePage = (newPage: number) => {
  if (newPage >= 1 && newPage <= totalPages) {
    setCurrentPage(newPage);
  }
};

  return (
    <div>
      <div className="course-category-page">
      <div className="header">
        <div className="kl">
        <h2>Courses List</h2>
        <p>You have total 20 Courses.</p>
        </div>
<div className="buttons">
 <div className="toggle-wrapper">
      <NavLink
        to="/courses"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Course Gatagories
      </NavLink>
      <NavLink
        to="/courses-list"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Course List
      </NavLink>
    </div>
        <div className="controls">
          <button className="filter">Filtered By ▼</button>
           <div>
      <button onClick={() => setShowModal(true)} className="add">
        + Add Category
      </button>

      <AddCategoryModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>

        </div>
      </div>
      </div>
    </div>
    

 <div className="courses-page">
      <table className="courses-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Course Name</th>
            <th>Category</th>
            <th>Instructor</th>
            <th>Lesson</th>
            <th>Enrole Student</th>
            <th>Status</th>
            <th>Price</th>
            <th>Deadline</th>
            <th>⋮</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td><input type="checkbox" /></td>
              <td className="course-name">
                <span
                  className="badge"
                  style={{ backgroundColor: course.shortColor }}
                >
                  {course.shortCode}
                </span>
                {course.title}
              </td>
              <td>{course.category}</td>
              <td>{course.instructor}</td>
              <td>Total lesson: {course.lessons}</td>
              <td>Total enrolment: {course.enrolled}</td>
              <td>
                <span className={`status ${course.status.toLowerCase()}`}>
                  {course.status}
                </span>
              </td>
              <td>{course.price}</td>
              <td>{course.deadline}</td>
              <td>⋮</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>




    <div className="pagination-container">
    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

  <div className="page-info">
    <span>PAGE</span>
    <select value={currentPage} onChange={(e) => handleChangePage(Number(e.target.value))}>
      {Array.from({ length: totalPages }).map((_, i) => (
        <option key={i} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
    <span>OF {totalPages}</span>
  </div>
</div>
    </div>
  )
}

export default Courseslist;
