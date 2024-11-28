import React from "react";
import UrgentIcon from "./assets/SVG - Urgent Priority colour.svg";
import HighIcon from "./assets/Img - High Priority.svg";
import MediumIcon from "./assets/Img - Medium Priority.svg";
import LowIcon from "./assets/No-priority.svg";

const Card = ({ ticket }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return UrgentIcon;
      case 3:
        return HighIcon;
      case 2:
        return MediumIcon;
      default:
        return LowIcon;
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4>{ticket.title}</h4>
        <img src={getPriorityIcon(ticket.priority)} alt="Priority" />
      </div>
      <p>{ticket.tag[0]}</p>
      <p>User: {ticket.userId}</p>
    </div>
  );
};

export default Card;