import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import "./course.scss"
import { useState } from 'react';
import { NavLink} from "react-router-dom";
import AddCategoryModal from "../Components//Modals/AddCategoryModal";
const Course = () => {
  const categories = [
  {
    code: 'GD',
    name: 'Graphics Design',
    subCount: 4,
    color: '#7D55FF',
    subCategories: [
      { name: 'Photoshop', color: '#d6c5f0' },
      { name: 'Adobe Illustrator', color: '#f5b5b5' },
      { name: 'Logo Design', color: '#addcf7' },
      { name: 'Drawing', color: '#ffe399' },
      { name: 'Figma', color: '#dadada' },
    ],
  },
  {
    code: 'WD',
    name: 'Web Development',
    subCount: 5,
    color: '#FDCB45',
    subCategories: [
      { name: 'Responsive Design', color: '#d1c9fc' },
      { name: 'Wordpress Customization', color: '#ffcbcb' },
      { name: 'Theme Development', color: '#d3f3f3' },
      { name: 'Bootstrap', color: '#fce79d' },
      { name: 'HTML & CSS Grid', color: '#e4e4e4' },
    ],
  },
  {
    code: 'MA',
    name: 'Mobile Application',
    subCount: 4,
    color: '#00C9E0',
    subCategories: [
      { name: 'Mobile App Design', color: '#dccbfd' },
      { name: 'User Interface', color: '#ffcfcf' },
      { name: 'Design Thinking', color: '#bff2f2' },
      { name: 'Prototyping', color: '#ffe59f' },
    ],
  },
];
  const repeated = Array(4).fill(categories).flat();





   const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className="course-category-page">
      <div className="header">
        <div className="kl">
        <h2>Course Category</h2>
        <p>You have total {categories.length} Categories</p>
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
      <div className="grid">
        {repeated.map((cat, i) => (
          <div className="card" key={i}>
            <div className="top">
              <div className="badge" style={{ backgroundColor: cat.color }}>
                {cat.code}
              </div>
              <div className="info">
                <h3>{cat.name}</h3>
                <p>{cat.subCount} SubCategories</p>
              </div>
              <div className="dots">⋯</div>
            </div>
            <div className="description">
              Website Design & Develop the website with web applications
            </div>
      <div className="tags">
  {cat.subCategories.map((sub: { color: any; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, j: Key | null | undefined) => (
    <span key={j} style={{ backgroundColor: sub.color }}>
      {sub.name}
    </span>
  ))}
</div>

          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Course;
