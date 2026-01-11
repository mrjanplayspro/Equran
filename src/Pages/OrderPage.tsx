
import { NavLink } from "react-router-dom";
import "./OrderPage.scss";


const orders = Array(7).fill({
  productName: "2kg Dumbbells Resistance Bands",
  orderId: "1713459661827",
  status: "Unpaid",
  price: 125,
});

const OrderPage = () => {
  return (
    <>
    <div className="order-page">
      <div className="filter-section">
        <label htmlFor="status">Select Status</label>
        <div className="select-box">
          <span>All</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      <div className="order-card">
        <h3>Orders</h3>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Order ID</th>
              <th>Status</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.productName}</td>
                <td>{order.orderId}</td>
                <td>{order.status}</td>
                <td>{order.price}</td>
                <td>
                  <div className="actions">
                    <button className="view-btn">
                        <NavLink to="/OrderDetails" className="link2">
                      <i className="fas fa-eye"></i>
                        </NavLink>
                    </button>
                    <button className="chat-btn">Chat</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button>{"<"}</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>15</button>
          <button>16</button>
          <button>{">"}</button>
        </div>
      </div>
    </div>


</>
  );
};

export default OrderPage;
