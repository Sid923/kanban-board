import React from "react";
import LowIcon from "./assets/Display.svg";

const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {
  return (
    <div className="header">
      <div className="dropdown">
        {/* Display Icon and Label */}
        <div className="dropdown-label">
          <img
            src={LowIcon} // Path to your icon
            alt="Display"
            className="icon"
          />
          <label htmlFor="grouping">Display</label>
        </div>
        <select
          id="grouping"
          value={grouping}
          onChange={(e) => setGrouping(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="status">Status</option>
          <option value="user">User</option>
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="ordering">Ordering:</label>
        <select
          id="ordering"
          value={ordering}
          onChange={(e) => setOrdering(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Header;