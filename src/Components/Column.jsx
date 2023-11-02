import React from "react";
import Card from "./Card";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

function Column({ grouping, ordering, columnData, users }) {
  const getUserForTicket = (ticket) => {
    console.log('aman was ehere for tickets', ticket);
    console.log('aman was ehre for users', users);
    if (users === undefined || users === null || users.length === 0) {
      if (users === undefined) alert('users is undefined');
      if (users === null) alert('users is null');
      if (users.length === 0) alert('users is empty');
    }     
    for (let idx = 0; idx < users.length; idx++) {
      const user = users[idx];
      if (user.id === ticket.userId) {
        return user;
      }
    }
  }

  console.log(columnData);
  return (
    <div
      style={{
        marginBottom: "4rem",
        maxWidth: "24rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 0 0.5rem 0.2rem",
        }}
      >
        <div>
          {columnData.symbol}
          <span
            style={{
              marginLeft: "0.5rem",
            }}
          >
            {columnData.name}
          </span>
          <span
            style={{
              marginLeft: "0.5rem",
              color: "#9CA3AF",
            }}
          >
            {columnData.tickets.length}
          </span>
        </div>
        <div>
          <AiOutlinePlus
            color='#374151'
            size={"1rem"}
            style={{
              marginRight: "0.5rem",
            }}
          />
          <BsThreeDots color='#374151' size={"1rem"} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {columnData.tickets.map((ticket, index) => {
          return (
            <Card
              key={index}
              ticker={ticket}
              ordering={ordering}
              grouping={grouping}
              user = {getUserForTicket(ticket)}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default Column;
