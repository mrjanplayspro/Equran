import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Navbar";
import "./DashboardLayout.scss";
import Footer from "../Components/Footer";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="page-content">{children}</div>
        <Footer/>
      </div>
    </div>
  );
};

export default DashboardLayout;
