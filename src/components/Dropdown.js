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
  { value: "amsterdam", label: "Amsterdam" },
  { value: "athens", label: "Athens" },
  { value: "baku", label: "Baku" },
  { value: "belgrade", label: "belgrade" },
  { value: "berlin", label: "Berlin" },
  { value: "bern", label: "Bern" },
  { value: "bratislava", label: "Bratislava" },
  { value: "brussels", label: "Brussels" },
  { value: "bucharest", label: "Bucharest" },
  { value: "budapest", label: "Budapest" },
  { value: "chisnau", label: "Chisnau" },
  { value: "copenhagen", label: "Copenhagen" },
  { value: "dublin", label: "Dublin" },
  { value: "edinburgh", label: "Edinburgh" },
  { value: "helsinki", label: "Helsinki" },
  { value: "kiev", label: "Kiev" },
  { value: "lisbon", label: "Lisbon" },
  { value: "ljubljana", label: "Ljubljana" },
  { value: "london", label: "London" },
  { value: "madrid", label: "Madrid" },
  { value: "minsk", label: "Minsk" },
  { value: "monaco", label: "Monaco" },
  { value: "oslo", label: "Oslo" },
  { value: "paris", label: "Paris" },
  { value: "podgorica", label: "Podgorica" },
  { value: "prague", label: "Prague" },
  { value: "pristina", label: "Pristina" },
  { value: "reykjavik", label: "Reykjavik" },
  { value: "riga", label: "Riga" },
  { value: "rome", label: "Rome" },
  { value: "sarajevo", label: "Sarajevo" },
  { value: "skopje", label: "Skopje" },
  { value: "sophia", label: "Sophia" },
  { value: "stockholm", label: "Stockholm" },
  { value: "tallinn", label: "Tallinn" },
  { value: "tbilisi", label: "Tbilisi" },
  { value: "tirana", label: "Tirana" },
  { value: "vaduz", label: "Vaduz" },
  { value: "valletta", label: "Valletta" },
  { value: "vienna", label: "Vienna" },
  { value: "vilnius", label: "Vilnius" },
  { value: "warsaw", label: "Warsaw" },
  { value: "zagreb", label: "Zagreb" }
];
