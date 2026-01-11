
import { FaCalendarAlt, FaFileAlt } from "react-icons/fa";
import "./Dashboard.scss";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Chart1 from "../images/image (1).png"
import Chart2 from "../images/image (2).png"
import Chart3 from "../images/image (3).png"
import Face1 from "../images/a-sm.jpg.png"
import Face2 from "../images/b-sm.jpg.png"
import { Bar } from 'react-chartjs-2';
import info from "../images/Emphasis.png"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';





type CategoryData = {
  name: string;
  color: string;
  value: number; // percentage (0-100)
};

const categories: CategoryData[] = [
  { name: "Web Development", color: "#f97316", value: 45 },
  { name: "Mobile Application", color: "#3b82f6", value: 35 },
  { name: "Graphics Design", color: "#34d399", value: 60 },
  { name: "Database", color: "#a78bfa", value: 90 },
  { name: "Marketing", color: "#6ee7b7", value: 50 },
  { name: "Machine Learning", color: "#ec4899", value: 55 },
  { name: "Data Science", color: "#c084fc", value: 65 },
];
 

const data = [
  { name: 'Organic Search', value: 4305 },
  { name: 'Referrals', value: 482 },
  { name: 'Social Media', value: 859 },
  { name: 'Others', value: 138 },
];

const COLORS = ['#C2A9FF', '#FFA9D4', '#A1A9FF', '#FFD873']; // Match from image

const Dashboard = () => {
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ArcElement);
    const barData = {
    labels: Array.from({ length: 30 }, (_, i) => `Jan ${i + 1}`),
    datasets: [
      {
        label: 'Active Students',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000 + 500)),
        backgroundColor: '#9BA3EB',
        borderRadius: 6,
      },
    ],
  };




  return (
    <>
    <div className="dashboard-header">
      <div className="header-text">
        <h1>Dashboard</h1>
        <p>Welcome to Learning Management Dashboard.</p>
      </div>
      <div className="header-actions">
        <div className="dropdown">
          <FaCalendarAlt className="icon" />
          <span>Last 30 Days</span>
          <select aria-label="Select date range">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
        <button className="reports-button">
          <FaFileAlt className="icon" />
          Reports
        </button>
      </div>
    </div>
 <div className="dashboard">
  <div className="first-lane">
    <div className="main-two">
      <div className="enrollment">
        <div className="enrollment-header">
          <h2>Students Enrolment</h2>
          <p>In last 30 days enrolment of students</p>
        </div>
        <div className="enrollment-stats">
          <div className="stat-box">
            <p className="stat-value">5490</p>
            <p className="stat-change negative">↓ 16.93%</p>
            <span>This Month</span>
          </div>
          <div className="stat-box">
            <p className="stat-value">1480</p>
            <p className="stat-change positive">↑ 4.26%</p>
            <span>This Week</span>
          </div>
          <div className="chart-area">
            <img src={Chart1} alt="Enrollment Chart" />
          </div>
        </div>
         </div>

              <div className="sales-section">
        <div className="sales-box">
          <div className="text">
            <div className="l">
          <h3>Total Sales</h3>
          <p className="sales-value">$9,495.20</p>
            </div>
            <div className="m">
          <p className="stat-change positive">↑ 4.63%</p>
          <span>vs. last month</span>
            </div>
          </div>
          <div className="chart-area">
            <img src={Chart2} alt="Total Sales Chart" />
          </div>
        </div>

        <div className="sales-box">
          <div className="text">
            <div className="l">
  <h3>This week so far</h3>
          <p className="sales-value">$2,995.81</p>
            </div>
            <div className="m">
          <p className="stat-change positive">↑ 7.13%</p>
          <span>vs. last week</span>
          </div>
          </div>
          <div className="chart-area">
            <img src={Chart3} alt="Weekly Sales Chart" />
          </div>
          </div>
        </div>
      </div>

  <div className="top-categories">
      <div className="top-categories-header">
        <h2>Top Categories</h2>
        <p>In last 15 days buy and sells overview.</p>
      </div>
      <div className="top-categories-content">
        <div className="chart">
          {categories.map((cat, index) => (
            <div className="bar-row" key={index}>
              <div
                className="bar"
                style={{
                  width: `${cat.value}%`,
                  backgroundColor: cat.color,
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className="legend">
          {categories.map((cat, index) => (
            <div className="legend-item" key={index}>
              <span
                className="color-box"
                style={{ backgroundColor: cat.color }}
              ></span>
              <span className="label">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
  </div>





    <div className="dashboard-row">
      {/* Top Courses */}
      <div className="card top-courses">
        <div className="card-header">
          <h3>Top Courses</h3>
          <span className="tag">Weekly</span>
        </div>
        <ul className="course-list">
          <li className="course-item">
<span className="course-badge green">UI/UX</span>
            <div className="course-info">
              <p className="name">UI/UX Design with Adobe XD</p>
              <p className="price">$85.00</p>
            </div>
            <div className="course-sales">
              <p>$2,125.00</p>
              <span>25 Sold</span>
            </div>
          </li>
          <li className="course-item">
<span className="course-badge yellow">AD</span>

            <div className="course-info">
              <p className="name">Android App Development</p>
              <p className="price">$95.00</p>
            </div>
            <div className="course-sales">
              <p>$1,710.00</p>
              <span>19 Sold</span>
            </div>
          </li>
          <li className="course-item">
   <span className="course-badge red">WD</span>

            <div className="course-info">
              <p className="name">Wordpress Development</p>
              <p className="price">$72.00</p>
            </div>
            <div className="course-sales">
              <p>$1,050.00</p>
              <span>15 Sold</span>
            </div>
          </li>
          <li className="course-item">
            <span className="course-badge purple">ML</span>

            <div className="course-info">
              <p className="name">Machine Learning</p>
              <p className="price">$110.00</p>
            </div>
            <div className="course-sales">
              <p>$990.00</p>
              <span>10 Sold</span>
            </div>
          </li>
          <li className="course-item">
      <span className="course-badge blue">RD</span>

            <div className="course-info">
              <p className="name">Responsive Design</p>
              <p className="price">$88.00</p>
            </div>
            <div className="course-sales">
              <p>$960.00</p>
              <span>12 Sold</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Top Instructors */}
      <div className="card top-instructors">
        <div className="card-header">
          <h3>Top Instructors</h3>
          <a href="#">View All</a>
        </div>
        <ul className="instructor-list">
          <li className="instructor-item">
            <div className="avatar first">AB</div>
            <div className="info">
              <p className="name">Abu Bin Ishtiyak</p>
              <p className="email">info@softnio.com</p>
            </div>
            <div className="reviews">⭐ 25 Reviews</div>
          </li>
          <li className="instructor-item">
            <div className="avatar second">AL</div>
            <div className="info">
              <p className="name">Ashley Lawson</p>
              <p className="email">ashley@softnio.com</p>
            </div>
            <div className="reviews">⭐ 22 Reviews</div>
          </li>
          <li className="instructor-item">
            <div className="avatar third">JM</div>
            <div className="info">
              <p className="name">Jane Montgomery</p>
              <p className="email">jane84@example.com</p>
            </div>
            <div className="reviews">⭐ 19 Reviews</div>
          </li>
          <li className="instructor-item">
            <div className="avatar fourth">LH</div>
            <div className="info">
              <p className="name">Larry Henry</p>
              <p className="email">larry10@example.com</p>
            </div>
            <div className="reviews">⭐ 24 Reviews</div>
          </li>
        </ul>
      </div>

      {/* Support Requests */}
      <div className="card support-requests">
        <div className="card-header">
          <h3>Support Requests</h3>
          <a href="#">All Requests</a>
        </div>
        <ul className="support-list">
          <li className="support-item">
            <div className="avatar"><img src={Face1}alt="" /></div>
            <div className="info">
              <p className="name">Vincent Lopez</p>
              <p className="msg">Thanks for contact us with your issues...</p>
            <span className="time">6 min ago</span>
            </div>
          </li>
          <li className="support-item">
            <div className="avatar">DM</div>
            <div className="info">
              <p className="name">Daniel Moore</p>
              <p className="msg">Thanks for contact us with your issues...</p>
            <span className="time">2 hours ago</span>
            </div>
          </li>
          <li className="support-item">
            <div className="avatar"><img src={Face2}alt="" /></div>
            <div className="info">
              <p className="name">Larry Henry</p>
              <p className="msg">Thanks for contact us with your issues...</p>
            <span className="time">3 hours ago</span>
            </div>
          </li>
        </ul>
      </div>
    </div>



 <div className="dashboard">

  <div className="main">

<div className="second-main">
      <div className="dashboard__bar-chart">
          <div className="enrollment-header">
          <h2>Active Students</h2>
          <p>How do your students visited in the time.</p>
        </div> 
              <div className="dashboard__stats">
        <div className="dashboard__metric">
          <h3>Monthly</h3>
          <p className="value">9.28K</p>
          <p className="increase">↑ 4.63%</p>
        </div>
        <div className="dashboard__metric">
          <h3>Weekly</h3>
          <p className="value">2.69K</p>
          <p className="decrease">↓ 1.92%</p>
        </div>
        <div className="dashboard__metric">
          <h3>Daily (Avg)</h3>
          <p className="value">0.94K</p>
          <p className="increase">↑ 3.45%</p>
        </div>
      </div>
        <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        <div className="dashboard__bar-dates">
          <span>01 Jan, 2020</span>
          <span>30 Jan, 2020</span>
        </div>
      </div>
      </div>


  <div className="traffic-sources-card">
      <div className="header">
        <h3>Traffic Sources</h3>
        <span className="days">30 Days ▾</span>
      </div>

      <div className="chart-and-legend">
        <ResponsiveContainer width="50%" height={200}>
          <PieChart>
            <Pie
 data={data}
  dataKey="value"
  innerRadius={60}
  outerRadius={100}
  paddingAngle={2}
  stroke="none"
  startAngle={90}
  endAngle={-270}
            >
              {data.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <ul className="legend">
          {data.map((entry, index) => (
            <li key={index}>
              <span className="dot" style={{ backgroundColor: COLORS[index] }}></span>
              <span className="left">{entry.name}</span>
              <span className="value">{entry.value.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="info-note">
        <img src={info} alt="" />
        <span>Traffic channels have beed generating the most traffics over past days.</span>
      </div>
    </div>
  </div>
    </div>


 

    </>
  );
};

export default Dashboard;
