import React from "react";
import Group from "./Group";

const KanbanBoard = ({ tickets, grouping, ordering }) => {
  const groupTickets = (tickets) => {
    const grouped = {};
    tickets.forEach((ticket) => {
      const key = ticket[grouping] || "Unassigned";
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(ticket);
    });
    return grouped;
  };

  const sortTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (ordering === "priority") return b.priority - a.priority;
      if (ordering === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  };

  const groupedTickets = groupTickets(tickets);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <Group key={group} title={group} tickets={sortTickets(groupedTickets[group])} />
      ))}
    </div>
  );
};

export default KanbanBoard;