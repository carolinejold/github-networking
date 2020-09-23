import React, { useState } from "react";
import Select from "react-select";

const Dropdown = ({ setResultsData }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setResultsData([selectedLanguage.label, selectedLocation.label]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="dropdown-bar">
          <p>Select programming language:</p>
          <Select
            isSearchable
            defaultValue={selectedLanguage}
            onChange={setSelectedLanguage}
            options={languages}
          />
        </div>
        <div className="dropdown-bar">
          <p>Select location:</p>
          <Select
            isSearchable
            defaultValue={selectedLocation}
            onChange={setSelectedLocation}
            options={locations}
          />
        </div>
        <input className="dropdown-submit" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Dropdown;

// DATA
const languages = [
  { value: "c", label: "C" },
  { value: "c#", label: "C#" },
  { value: "c++", label: "C++" },
  { value: "go", label: "Go" },
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" },
  { value: "php", label: "PHP" },
  { value: "python", label: "Python" },
  { value: "r", label: "R" },
  { value: "ruby", label: "Ruby" },
  { value: "sql", label: "SQL" },
  { value: "swift", label: "Swift" },
  { value: "typescript", label: "Typescript" },
];

const locations = [
  { value: "stockholm", label: "Stockholm" },
  { value: "oslo", label: "Oslo" },
  { value: "copenhagen", label: "Copenhagen" },
];
