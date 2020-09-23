import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">GitHub Networking</h1>
      <div className="header-description">
        <p>
          Looking for software development mentors or connections in your local
          area? This app enables you to search for GitHub users by location and
          programming language, so you can reach out to those who may be able to
          help you.
        </p>
        <small className="header-disclaimer">
          Disclaimer: User cooperation not guaranteed.
        </small>
      </div>
    </div>
  );
};

export default Header;
