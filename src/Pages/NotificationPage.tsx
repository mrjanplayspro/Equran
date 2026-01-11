
import Pagination from "../Components/Pagination";
import { useState } from "react";
import "./NotificationPage.scss"
import NotificationModal from "../Components/Modals/NotificationModal";
const NotificationPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 16;
  return (
    <div className="products-page">
      <div className="header">
        <h2>Notification</h2>
        <div>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>Add Notification</button>
            {isModalOpen && <NotificationModal onClose={() => setIsModalOpen(false)} />}
              </div>
      </div>
      <table className="products-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Notification</th>
            <th>Notification Title</th>
            <th>Notification Description</th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Hello Sesodia</td>
            <td>Lorem ipsum@mail.com</td>
            <td>Sesodia</td>
          </tr>
           <tr>
            <td><input type="checkbox" /></td>
            <td>Bridge to progress</td>
            <td>Discipline is the bridge between goals and accomplishments</td>
            <td>Sara Aboelkher</td>
          </tr>
        <tr>
            <td><input type="checkbox" /></td>
            <td>Bridge to progress</td>
            <td>Discipline is the bridge between goals and accomplishments</td>
            <td>Khalifa</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Bridge to progress</td>
            <td>Discipline is the bridge between goals and accomplishments</td>
            <td>Asma al marzooqi</td>
          </tr>
           <tr>
            <td><input type="checkbox" /></td>
            <td>Bridge to progress</td>
            <td>Discipline is the bridge between goals and accomplishments</td>
            <td>Jad laoun</td>
          </tr>
           <tr>
            <td><input type="checkbox" /></td>
            <td>Bridge to progress</td>
            <td>Discipline is the bridge between goals and accomplishments</td>
            <td>Sesodia</td>
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

export default NotificationPage;
