import React from "react";
import "./LoginLayout.scss";

interface LayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ leftContent, rightContent }) => {
  return (
    <div className="layout-container">
      <div className="layout-left">{leftContent}</div>
      <div className="layout-right">{rightContent}</div>
    </div>
  );
};

export default Layout;
