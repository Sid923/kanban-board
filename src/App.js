import React, { useEffect, useState } from "react";
import KanbanBoard from "./KanbanBoard";
import Header from "./Header";
import axios from "axios";

import './App.css'; // Create a CSS file for styling

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState("priority");
  const [ordering, setOrdering] = useState("priority");

  useEffect(() => {
    // Fetch tickets
    axios.get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        setTickets(response.data.tickets);
      })
      .catch((error) => console.error("Error fetching data:", error));
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

export default App;