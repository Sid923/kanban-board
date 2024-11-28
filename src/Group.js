import React from "react";
import Card from "./Card";

const Group = ({ title, tickets }) => {
  return (
    <div className="group">
      <h3>{title}</h3>
      <div className="group-cards">
        {tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Group;