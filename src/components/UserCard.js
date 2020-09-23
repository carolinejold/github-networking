import React from "react";

const UserCard = ({ githubData }) => {
  const finalData = githubData.map((el) => {
    return (
      <div key={el.id} className="user-card">
        <img className="user-card-image" src={el.avatar_url} alt="avatar" />
        <p className="user-card-username">@{el.login}</p>
        <a
          className="user-card-link"
          href={el.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    );
  });
  return <div className="user-card-container">{finalData}</div>;
};

export default UserCard;
