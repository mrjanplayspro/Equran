// ✅ CORRECT
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Login';
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Courses from './Pages/Courses';
import Courseslist from './Pages/Courseslist';
import Instructor from './Pages/Instructor';
import InstructorList from './Pages/InstructorList';
import InstructorDetails from './Pages/InstructorDetails';
import PaymentsPage from './Pages/PaymentPage';
import StudentsPage from './Pages/Students';
import StudentProfile from './Pages/StudentProfile';
import ChatPage from './Pages/ChatPage';
import OrderPage from './Pages/OrderPage';
import OrderPageTwo from './Pages/OrderPageTwo';
import ProductsPage from './Pages/ProductsPage';
import Banner from './Pages/Banner';
import User from './Pages/User';
import NotificationPage from './Pages/NotificationPage';
import RolePage from './Pages/RolePage';
import ProfilePage from './Pages/ProfilePage';
import EditProfile from './Pages/EditProfile';
import TermsAndConditions from './Pages/TermsAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/login-layout" element={<Login/>} />
          <Route path="/dashboar-layout" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/courses" element={<DashboardLayout><Courses /></DashboardLayout>} />
          <Route path="/courses-list" element={<DashboardLayout><Courseslist /></DashboardLayout>} />
    </Routes>

    <Routes>
          <Route path="/instructors" element={<DashboardLayout><Instructor /></DashboardLayout>} />
          <Route path="/list" element={<DashboardLayout><InstructorList /></DashboardLayout>} />
          <Route path="/details" element={<DashboardLayout><InstructorDetails /></DashboardLayout>} />
          <Route path="/payment" element={<DashboardLayout><PaymentsPage /></DashboardLayout>} />
    </Routes>


    <Routes>
          <Route path="/students" element={<DashboardLayout><StudentsPage /></DashboardLayout>} />
          <Route path="/Studentinfo" element={<DashboardLayout><StudentProfile /></DashboardLayout>} />
    </Routes>
    <Routes>
          <Route path="/messages" element={<DashboardLayout><ChatPage /></DashboardLayout>} />
    </Routes>
    <Routes>
          <Route path="/orders" element={<DashboardLayout><OrderPage /></DashboardLayout>} />
          <Route path="/OrderDetails" element={<DashboardLayout><OrderPageTwo /></DashboardLayout>} />
    </Routes>
    <Routes>
          <Route path="/products" element={<DashboardLayout><ProductsPage /></DashboardLayout>} />
    </Routes>
    <Routes>
          <Route path="/banner-listing" element={<DashboardLayout><Banner /></DashboardLayout>} />
    </Routes>
    <Routes>
          <Route path="/users" element={<DashboardLayout><User /></DashboardLayout>} />
    </Routes>
    <Routes>
          <Route path="/notifications" element={<DashboardLayout><NotificationPage /></DashboardLayout>} />
    </Routes>
    <Routes>
          <Route path="/role-management" element={<DashboardLayout><RolePage /></DashboardLayout>} />
    </Routes>
    <Routes>
          <Route path="/my-account" element={<DashboardLayout><ProfilePage /></DashboardLayout>} />
          <Route path="/edit-profile" element={<DashboardLayout><EditProfile /></DashboardLayout>} />
          <Route path="/terms" element={<DashboardLayout><TermsAndConditions /></DashboardLayout>} />
          <Route path="/privacy" element={<DashboardLayout><PrivacyPolicy /></DashboardLayout>} />
    </Routes>
  </>
  );
}

export default App;
