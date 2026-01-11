import  { useState } from 'react';
import './StudentProfile.scss';
import { FaBook, FaEdit } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { LuActivity } from 'react-icons/lu';
import { Trash2 } from 'lucide-react';

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="profile-details">
            <h2>Students Information</h2>
            <p className="subtext">Basic info, like students name and address, that you use on Nio Platform.</p>
            <div className="edit-icon"><FaEdit /></div>
              <div  className='back'><span>Basics</span></div>
            <div className="info-table">
              <div><span>Full Name</span><span>Abu Bin Ishtiyak</span></div>
              <div><span>Display Name</span><span>Ishtiyak</span></div>
              <div><span>Email</span><span>info@sofnio.com</span></div>
              <div><span>Phone Number</span><span>Not add yet</span></div>
              <div><span>Date of Birth</span><span>29 Feb, 1986</span></div>
              <div><span>Nationality</span><span>Canadian</span></div>
              <div><span>Address</span><span>2337 Kildeer Drive,<br />Kentucky, Canada</span></div>
            </div>
          </div>
        );
      case 'courses':
        return (
      <div className="enrolled-courses">
      <div className="header">
        <h2>Enrolled Courses</h2>
        <p>Basic info, like what Courses they Enrolled now.</p>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Courses List</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="course-name">Learn Android Development with project</td>
              <td>
                <span className="status active">
                  <span className="dot" /> Active
                </span>
              </td>
              <td>
                <button className="delete-btn">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td className="course-name">Learn Android Development with project</td>
              <td>
                <span className="status pending">
                  <span className="dot" /> Pending
                </span>
              </td>
              <td>
                <button className="delete-btn">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td className="course-name">Learn Android Development with project</td>
              <td>
                <span className="status canceled">
                  <span className="dot" /> Canceled
                </span>
              </td>
              <td>
                <button className="delete-btn">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        );
      case 'activity':
        return (
   <div className="login-activity">
      <div className="table-container">
        <div className="table-header">
          <div>BROWSER</div>
          <div>IP</div>
          <div>TIME</div>
          <div></div>
        </div>
        {[
          ['Chrome on Window', '192.149.122.128', '11:34 PM'],
          ['Mozilla on Window', '86.188.154.225', 'Nov 20, 2019 10:34 PM'],
          ['Chrome on iMac', '192.149.122.128', 'Nov 12, 2019 08:56 PM'],
          ['Chrome on Window', '192.149.122.128', 'Nov 03, 2019 04:29 PM'],
          ['Mozilla on Window', '86.188.154.225', 'Oct 29, 2019 09:38 AM'],
          ['Chrome on iMac', '192.149.122.128', 'Oct 23, 2019 04:16 PM'],
          ['Chrome on Window', '192.149.122.128', 'Oct 15, 2019 11:41 PM'],
          ['Mozilla on Window', '86.188.154.225', 'Oct 13, 2019 05:43 AM'],
          ['Chrome on iMac', '192.149.122.128', 'Oct 03, 2019 04:12 AM'],
        ].map(([browser, ip, time], index) => (
          <div className="table-row" key={index}>
            <div>{browser}</div>
            <div>{ip}</div>
            <div>{time}</div>
            <div className="cross">×</div>
          </div>
        ))}
      </div>
    </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="header">
    <div className="breadcrumb">
      <span>Students /</span> <span className="name">Abu Bin Ishtiyak</span>
    </div>
    <NavLink to={'/students'}>
    <button className="back-btn">← Back</button>
    </NavLink>
  </div>
   <div className="student-profile">

  <div className="body">
    <aside className="sidebar">
      <div className="user-card">
        <div className="avatar">AB</div>
        <div className="user-info">
          <h4>Abu Bin Ishtiyak</h4>
          <p>info@sofnio.com</p>
        </div>
      </div>

      <div className="billing-info">
        <p className='sub'>Total Bill</p>
        <p className="paid">Paid 19   USD</p>
        <p className="due">Due 10 USD</p>
      </div>

      <nav className="tabs">
        <div className={activeTab === 'personal' ? 'active' : ''} onClick={() => setActiveTab('personal')}>
        <FaCircleUser />
  Personal Information
        </div>
        <div className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>
         <FaBook />
 Courses
        </div>
        <div className={activeTab === 'activity' ? 'active' : ''} onClick={() => setActiveTab('activity')}>
          <LuActivity />
Account Activity
        </div>
      </nav>

      <div className="meta">
        <p><strong>Last Login</strong><br />06-29-2020 02:39pm</p>
        <p><strong>Login IP</strong><br />192.129.243.28</p>
      </div>
    </aside>

    <main className="content">
      {renderTabContent()}
    </main>
  </div>
</div>
</>
  );
};

export default StudentProfile;
