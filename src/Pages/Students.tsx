
import { NavLink } from 'react-router-dom';
import './Students.scss';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import AddStudentModal from "../Components/Modals/AddStudentModal"

const StudentsPage = () => {

      const [isModalOpen, setModalOpen] = useState(false);
  const students = [
    {
      name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', initials: 'AB', color: '#7B61FF',
      course: 'Font-end Development', phone: '+811 847-4958', country: 'United State',
      payment: 'Due', status: 'Active'
    },
    {
      name: 'Ashley Lawson', email: 'ashley@softnio.com', initials: 'AL', color: '#10b981',
      course: 'Responsive Design', phone: '+124 394-1787', country: 'United Kingdom',
      payment: 'Paid', status: 'Inactive'
    },
    {
      name: 'Joe Larson', email: 'larson@example.com', initials: 'JL', color: '#0ea5e9',
      course: 'Mobile Application', phone: '+168 603-2320', country: 'India',
      payment: 'Paid', status: 'Active'
    },
    {
      name: 'Jane Montgomery', email: 'jane@xd.com', initials: 'JM', color: '#dc2626',
      course: 'UI/UX Design with Adobe XD', phone: '+439 271-5360', country: 'Canada',
      payment: 'Cancelled', status: 'Suspend'
    },
    {
      name: 'Frances Burns', email: 'frances@example.com', initials: 'FB', color: '#fb923c',
      course: 'Application Management', phone: '+639 130-3150', country: 'Australia',
      payment: 'Paid', status: 'Active'
    },
    // duplicate entries for demo consistency
    {
      name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', initials: 'AB', color: '#7B61FF',
      course: 'Font-end Development', phone: '+811 847-4958', country: 'United State',
      payment: 'Due', status: 'Active'
    },
    {
      name: 'Ashley Lawson', email: 'ashley@softnio.com', initials: 'AL', color: '#10b981',
      course: 'Learn Android Development with project', phone: '+124 394-1787', country: 'United Kingdom',
      payment: 'Paid', status: 'Inactive'
    },
    {
      name: 'Joe Larson', email: 'larson@example.com', initials: 'JL', color: '#0ea5e9',
      course: 'SEO Optimization', phone: '+168 603-2320', country: 'India',
      payment: 'Paid', status: 'Active'
    },
    {
      name: 'Jane Montgomery', email: 'jane@xd.com', initials: 'JM', color: '#dc2626',
      course: 'Responsive Design', phone: '+439 271-5360', country: 'Canada',
      payment: 'Cancelled', status: 'Suspend'
    },
    {
      name: 'Frances Burns', email: 'frances@example.com', initials: 'FB', color: '#fb923c',
      course: 'Android Development', phone: '+639 130-3150', country: 'Australia',
      payment: 'Paid', status: 'Active'
    },
  ];

  return (

    <>
          <div className="top-bar">
        <h2>Students</h2>
        <div className="controls">
 <div className="search-wrapper">
  <input type="text" placeholder="Search by name" />
  <span className="search-icon"><FaSearch />

</span>
</div>
          <select>
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Suspend</option>
          </select>

              <div>
     <button className="add-btn" onClick={() => setModalOpen(true)} >+ Add</button>
      <AddStudentModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
        </div>
      </div>
    <div className="students-wrapper">

      <table className="students-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>User</th>
            <th>Enrolled Courses</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Payment</th>
            <th>Status</th>
            <th>⋯</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td><input type="checkbox" /></td>
              <td>
                <div className="user-info">
                    <NavLink to={'/Studentinfo'} className="Link1">
                  <div className="avatar" style={{ backgroundColor: s.color }}>{s.initials}</div>
                  </NavLink>
                  <div>
                    <div className="name">{s.name}</div>
                    <div className="email">{s.email}</div>
                  </div>
                </div>
              </td>
              <td>
                {s.course}
                <div className="view-more">View More</div>
              </td>
              <td className='grey'>{s.phone}</td>
              <td className='grey'>{s.country}</td>
              <td><span className={`badge ${s.payment.toLowerCase()}`}>{s.payment}</span></td>
              <td><span className={`status ${s.status.toLowerCase()}`}>{s.status}</span></td>
              <td>⋯</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button>{'<'}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>15</button>
        <button>16</button>
        <button>{'>'}</button>
      </div>
    </div>
    </>
  );
};

export default StudentsPage;
