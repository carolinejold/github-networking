import React from "react";
import UserCard from "./UserCard";

const UserList = ({ resultsData, githubData }) => {
  return (
    <div className="user-list-container">
      <p
        style={{ visibility: resultsData.length !== 0 ? "visible" : "hidden" }}
      >
        Results for {resultsData[0]} developers in {resultsData[1]}:
      </p>
      <UserCard githubData={githubData} />
    </div>
  );
};

export default UserList;
