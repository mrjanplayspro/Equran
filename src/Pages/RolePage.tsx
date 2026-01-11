
import { FaEdit, FaTrash } from "react-icons/fa";
import Pagination from "../Components/Pagination";
import { useState } from "react";
import "./RolePage.scss"
import { FaPlus } from "react-icons/fa6";
import PermissionModal from "../Components/Modals/PermissionModal";
const RolePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 16;
  return (
    <div className="products-page">
      <div className="header">
        <h2>Role Management</h2>
        <div>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}><FaPlus/> Add Rolesr</button>
            {isModalOpen && <PermissionModal onClose={() => setIsModalOpen(false)} />}
              </div>
      </div>
         <div className="role-table">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Role Name</th>
            <th>Access</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Admin</td>
            <td>
              Course Management - Add/Update/Delete<br />
              Instructor Management - Add/Update/Delete<br />
              +2
            </td>
            <td>
              <div className="actions">
                <button className="edit-btn"><FaEdit /></button>
                <button className="delete-btn"><FaTrash /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Admin</td>
            <td>
              Course Management - Add/Update/Delete<br />
              Instructor Management - Add/Update/Delete<br />
              +2
            </td>
            <td>
              <div className="actions">
                <button className="edit-btn"><FaEdit /></button>
                <button className="delete-btn"><FaTrash /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Admin</td>
            <td>
              Course Management - Add/Update/Delete<br />
              Instructor Management - Add/Update/Delete<br />
              +2
            </td>
            <td>
              <div className="actions">
                <button className="edit-btn"><FaEdit /></button>
                <button className="delete-btn"><FaTrash /></button>
              </div>
            </td>
          </tr>
              <tr>
            <td><input type="checkbox" /></td>
            <td>Admin</td>
            <td>
              Course Management - Add/Update/Delete<br />
              Instructor Management - Add/Update/Delete<br />
              +2
            </td>
            <td>
              <div className="actions">
                <button className="edit-btn"><FaEdit /></button>
                <button className="delete-btn"><FaTrash /></button>
              </div>
            </td>
          </tr>
              <tr>
            <td><input type="checkbox" /></td>
            <td>Admin</td>
            <td>
              Course Management - Add/Update/Delete<br />
              Instructor Management - Add/Update/Delete<br />
              +2
            </td>
            <td>
              <div className="actions">
                <button className="edit-btn"><FaEdit /></button>
                <button className="delete-btn"><FaTrash /></button>
              </div>
            </td>
          </tr>
              <tr>
            <td><input type="checkbox" /></td>
            <td>Admin</td>
            <td>
              Course Management - Add/Update/Delete<br />
              Instructor Management - Add/Update/Delete<br />
              +2
            </td>
            <td>
              <div className="actions">
                <button className="edit-btn"><FaEdit /></button>
                <button className="delete-btn"><FaTrash /></button>
              </div>
            </td>
          </tr>
          {/* You can copy-paste more <tr> rows like above */}
        </tbody>
      </table>
    </div>
      
    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RolePage;
