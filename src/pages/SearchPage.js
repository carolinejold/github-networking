import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import UserList from "../components/UserList";
import axios from "axios";

const SearchPage = () => {
  const [resultsData, setResultsData] = useState([]);
  const [githubData, setGithubData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await axios(
        `https://api.github.com/search/users?q=language:${resultsData[0]}+location:${resultsData[1]},
        `
      );
      let result = await response.data.items;
      setGithubData(result);
    }
    fetchData();
  }, [resultsData]);

  return (
    <div>
      <Dropdown setResultsData={setResultsData} />
      <UserList resultsData={resultsData} githubData={githubData} />
    </div>
  );
};

export default SearchPage;
