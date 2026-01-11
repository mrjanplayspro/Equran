
import "./ProductsPage.scss";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import Mafe from "../images/Public examination preparation concept.png"
import Pagination from "../Components/Pagination";
import { useState } from "react";
import FormModal from "../Components/Modals/FormModal";
const ProductsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 16;
  return (
    <div className="products-page">
      <div className="header">
        <h2>Products</h2>
        <div>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>Add Product</button>
            {isModalOpen && <FormModal onClose={() => setIsModalOpen(false)} />}
              </div>
      </div>
      <div className="controls">
        <span>Show Entries</span>
          <div className="search-input-wrapper">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search..." />
    </div>
      </div>

      <table className="products-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Photo</th>
            <th>Product Name</th>
            <th>Product Name AR</th>
            <th>Brands</th>
            <th>Brands AR</th>
            <th>Price</th>
            <th>Sale Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td><img src={Mafe} alt="product" /></td>
            <td><strong>Responsive Design</strong><div>Web Development</div></td>
            <td>Alex Ashley</td>
            <td>Total lesson: 32</td>
            <td>Total enrolment: 25</td>
            <td>$30</td>
            <td>20.4.2021</td>
            <td className="actions">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
    <td><img src={Mafe} alt="product" /></td>
                <td><strong>Responsive Design</strong><div>Web Development</div></td>
            <td>Alex Ashley</td>
            <td>Total lesson: 32</td>
            <td>Total enrolment: 25</td>
            <td>$30</td>
            <td>20.4.2021</td>
            <td className="actions">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
    <td><img src={Mafe} alt="product" /></td>
                <td><strong>Responsive Design</strong><div>Web Development</div></td>
            <td>Alex Ashley</td>
            <td>Total lesson: 32</td>
            <td>Total enrolment: 25</td>
            <td>$30</td>
            <td>20.4.2021</td>
            <td className="actions">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
    <td><img src={Mafe} alt="product" /></td>
                <td><strong>Responsive Design</strong><div>Web Development</div></td>
            <td>Alex Ashley</td>
            <td>Total lesson: 32</td>
            <td>Total enrolment: 25</td>
            <td>$30</td>
            <td>20.4.2021</td>
            <td className="actions">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
    <td><img src={Mafe} alt="product" /></td>
                <td><strong>Responsive Design</strong><div>Web Development</div></td>
            <td>Alex Ashley</td>
            <td>Total lesson: 32</td>
            <td>Total enrolment: 25</td>
            <td>$30</td>
            <td>20.4.2021</td>
            <td className="actions">
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

export default ProductsPage;
