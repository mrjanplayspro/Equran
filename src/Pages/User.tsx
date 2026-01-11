
import { FaEdit, FaTrash } from "react-icons/fa";
import Pagination from "../Components/Pagination";
import { useState } from "react";
import "./User.scss"
import UserModal from "../Components/Modals/UserModal"
import { FaPlus } from "react-icons/fa6";
const User = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 16;
  return (
    <div className="products-page">
      <div className="header">
        <h2>User</h2>
        <div>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}><FaPlus/> Crete User</button>
            {isModalOpen && <UserModal onClose={() => setIsModalOpen(false)} />}
              </div>
      </div>
      <table className="products-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>Lorem ipsum@mail.com</td>
            <td>12345678</td>
            <td>Lorem ipsum</td>
            <td className="action">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
           <tr>
            <td><input type="checkbox" /></td>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>Lorem ipsum@mail.com</td>
            <td>12345678</td>
            <td>Lorem ipsum</td>
            <td className="action">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
           <tr>
            <td><input type="checkbox" /></td>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>Lorem ipsum@mail.com</td>
            <td>12345678</td>
            <td>Lorem ipsum</td>
            <td className="action">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
              <tr>
            <td><input type="checkbox" /></td>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>Lorem ipsum@mail.com</td>
            <td>12345678</td>
            <td>Lorem ipsum</td>
            <td className="action">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
            <tr>
            <td><input type="checkbox" /></td>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>Lorem ipsum@mail.com</td>
            <td>12345678</td>
            <td>Lorem ipsum</td>
            <td className="action">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
        </tbody>
      </table>
      
    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default User;
