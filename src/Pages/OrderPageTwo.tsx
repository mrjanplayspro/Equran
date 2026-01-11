
import "./OrderPageTwo.scss";
import Logo from "../images/Group 1000015646.png"
import Pagination from "../Components/Pagination";
import { useState } from "react";

const OrderPageTwo = () => {

      const [] = useState(false);
     const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 16;
  return (

    <div className="order-details-page">
      <h2>Order Details</h2>

      <div className="card items-card">
        <h4>Items</h4>
        <table>
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Item Type</th>
              <th>Title</th>
              <th>Purchase Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2kg Dumbbells Resistance Bands</td>
              <td>Product Name</td>
              <td>5kg Plates</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2kg Dumbbells Resistance Bands</td>
              <td>Product Name</td>
              <td>Resistence Bands</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>

        <div className="totals">
          <div>
            <strong>Price</strong>
            <span>70</span>
          </div>
          <div>
            <strong>Sales Price</strong>
            <span>50</span>
          </div>
          <div>
            <strong>Date</strong>
            <span>Feb 7, 2024</span>
          </div>
        </div>
      </div>

      <div className="bottom-details">
<div className="card user-card">
  <div className="main">
    <div className="one">
 <p>User</p>
    <p>Profile</p>
    </div>
    <div className="two">
   <div className="user-avatar">
      <img src={Logo}alt="User" />
    </div>
    </div>
  </div>
  <div className="user-content">
    <div className="user-info">
      <p><strong>Full Name</strong><span>Sindhu Kashyap</span></p>
      <p><strong>Email Address</strong><span>Kashyapp.sindhu@gmail.com</span></p>
      <p><strong>Phone Number</strong><span>544988488</span></p>
    </div>
  </div>
</div>

        <div className="card description-card">
          <h4>Order Description</h4>
          <p>
            <strong>Shipping Charges</strong>
            <span>-</span>
          </p>
          <p>
            <strong>Sub Total</strong>
            <span>125</span>
          </p>
          <p>
            <strong>Total Price</strong>
            <span>125</span>
          </p>
          <p>
            <strong>Status</strong>
            <span>Unpaid</span>
          </p>
          <p>
            <strong>Date</strong>
            <span>Apr 18, 2024</span>
          </p>
        </div>
      </div>
      <Pagination
           currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}/>
    </div>
  );
};

export default OrderPageTwo;
