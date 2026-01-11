import { useState } from 'react';
import './PaymentPage.scss';
import { FaRegCheckCircle } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import "./Instructorr.scss"

const PaymentsPage = () => {
  const [activeTab, setActiveTab] = useState<'completed' | 'pending'>('completed');

  const payments = [
    { name: "Abu Bin Ishtiyak", email: "info@softnio.com", account: "9834/paypal", amount: "$7000", date: "10-01-21", initials: "AB", color: "#7B61FF" },
    { name: "Alan Butler", email: "butler@example.com", account: "7623/paypal", amount: "$2000", date: "10-01-21", initials: "AB", color: "#B4846C" },
    { name: "Victoria Lynch", email: "victoria@example.com", account: "98754/paypal", amount: "$2500", date: "10-01-21", initials: "VL", color: "#FFD43B" },
    { name: "Patrick Newman", email: "patrick@example.com", account: "7634/paypal", amount: "$5000", date: "12-01-21", initials: "PN", color: "#19C37D" },
    { name: "Jane Harris", email: "harris@example.com", account: "1245/paypal", amount: "$3000", date: "11-01-21", initials: "JH", color: "#C93C3C" },
    { name: "Emma Walker", email: "walker@example.com", account: "6675/paypal", amount: "$2100", date: "16-01-21", initials: "EW", color: "#A48FFF" },
    { name: "Alan Butler", email: "alan@example.com", account: "5623/paypal", amount: "$1500", date: "10-05-21", initials: "AB", color: "#8C8C8C" },
    { name: "Victoria Lynch", email: "victoria@example.com", account: "78754/paypal", amount: "$1978", date: "14-04-21", initials: "VL", color: "#FFD43B" },
    { name: "Patrick Newman", email: "patrick@example.com", account: "7634/paypal", amount: "$5000", date: "12-01-21", initials: "PN", color: "#19C37D" },
    { name: "Jane Harris", email: "harris@example.com", account: "1245/paypal", amount: "$3000", date: "11-01-21", initials: "JH", color: "#C93C3C" },
  ];

  return (
<>
<div className="instructor-dashboard">
            <div className="f">
      <h2>Instructor Overview</h2>

      {/* Top Navigation Tabs */}
<div className="tabs-container">
  <div className="tabs">
    <NavLink to="/instructors" className={({ isActive }) => isActive ? "tab active" : "tab"}>Overview</NavLink>
    <NavLink to="/list" className={({ isActive }) => isActive ? "tab active" : "tab"}>List</NavLink>
    <NavLink to="/details" className={({ isActive }) => isActive ? "tab active" : "tab"}>Details</NavLink>
    <NavLink to="/payment" className={({ isActive }) => isActive ? "tab active" : "tab"}>Payment</NavLink>
  </div>
</div>
  </div>
  </div>

    <div className="payments-wrapper">
      <div className="payments-box">
        <div className="tabss">
          <button className={activeTab === 'completed' ? 'active' : ''} onClick={() => setActiveTab('completed')}>
            <FaRegCheckCircle /> Completed payment
          </button>
          <button className={activeTab === 'pending' ? 'active' : ''} onClick={() => setActiveTab('pending')}>
            <AiOutlineLoading3Quarters />
 Pending payment
          </button>
        </div>

        <table className="payments-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Instructor</th>
              <th>Account Number</th>
              <th>Amount</th>
              <th>Payment date</th>
              <th>⋯</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i}>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="user-info">
                    <div className="avatar" style={{ backgroundColor: p.color }}>{p.initials}</div>
                    <div>
                      <div className="name">{p.name}</div>
                      <div className="email">{p.email}</div>
                    </div>
                  </div>
                </td>
                <td>{p.account}</td>
                <td>{p.amount}</td>
                <td>{p.date}</td>
                <td>⋯</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
            <div className="one">
          <button>{'«'}</button>
          <button className="active">1</button>
          <button>2</button>
          <button>...</button>
          <button>6</button>
          <button>7</button>
          <button>{'»'}</button>
          </div>
          <div className="page-info">PAGE <select><option>1</option></select> OF 102</div>
        </div>
      </div>
    </div>


    </>
  )
}

export default PaymentsPage;
