
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import Mafe from "../images/Public examination preparation concept.png"
import Pagination from "../Components/Pagination";
import { useState } from "react";
import "./Banner.scss"
import BannerModal from "../Components/Modals/BannerModal";
const Banner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 16;
  return (
    <div className="products-page">
      <div className="header">
        <h2>Banner</h2>
        <div>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>Add Banner</button>
            {isModalOpen && <BannerModal onClose={() => setIsModalOpen(false)} />}
              </div>
      </div>
      <div className="controls">
        <span>Show Entries</span>
          <div className="search-input-wrapper">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search..." />
    </div>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Photo</th>
            <th>Promo Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td><img src={Mafe} alt="product" /></td>
            <td>12345678</td>
            <td className="actio">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
                <tr>
            <td><input type="checkbox" /></td>
            <td><img src={Mafe} alt="product" /></td>
            <td>12345678</td>
            <td className="actio">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
                <tr>
            <td><input type="checkbox" /></td>
            <td><img src={Mafe} alt="product" /></td>
            <td>12345678</td>
            <td className="actio">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
                    <tr>
            <td><input type="checkbox" /></td>
            <td><img src={Mafe} alt="product" /></td>
            <td>12345678</td>
            <td className="actio">
              <button className="edit"><FaEdit /></button>
              <button className="delete"><FaTrash /></button>
            </td>
          </tr>
                    <tr>
            <td><input type="checkbox" /></td>
            <td><img src={Mafe} alt="product" /></td>
            <td>12345678</td>
            <td className="actio">
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

export default Banner;
