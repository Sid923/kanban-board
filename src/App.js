import React, { useEffect, useState } from "react";
import KanbanBoard from "./KanbanBoard";
import Header from "./Header";
import apiData from './data.js'; // Import the local data file
import './App.css'; // Ensure this file contains your styling

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState("priority");
  const [ordering, setOrdering] = useState("priority");

  useEffect(() => {
    // Use local data file instead of API call
    setTickets(apiData.tickets);
  }, []);

  return (
    <div className="app">
      <Header
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      <KanbanBoard tickets={tickets} grouping={grouping} ordering={ordering} />
    </div>
  );
};

export default App;
