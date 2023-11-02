import React from "react";
import image from "../Assets/img4.jpeg"; 
import hightPriority from "../Assets/high_pret.png";
import "../Style/Card.css";
import { BsFillCircleFill, BsExclamationSquareFill } from "react-icons/bs";
import { getPriorityName, userAvailabilityColor } from "../utils/mapping";
import { getPriorityIcon, getStatusIcon } from "../utils/getIcons";
import { getUserIcon } from "../utils/getUserProfile";
// import './Card.css';

const Card = ({ ticker, ordering, grouping, user }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "1rem 2rem",
        position: "relative",
        width: "20rem",
        borderRadius: "0.7rem",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      >
        <div
          style={{
            position: "relative",
            visibility: grouping === "userId" ? "hidden" : "visible",
          }}
        >
          {getUserIcon(user)}
        </div>
      </div>
      <div
        style={{
          color: "#6c7077",
        }}
      >
        {ticker.id}
      </div>
      <div
        style={{
          marginBottom: "0.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginRight: grouping === "userId" ? "1rem" : "3rem",
        }}
      >
        {grouping !== "status" ? getStatusIcon(ticker.status) : <></>}
        {ticker.title.substring(0, 60) +
          (ticker.title.length > 60 ? "..." : "")}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* <AiFillAlipayCircle
          color='#6c7077'
          style={{
            border: "1px #c3c3c3 solid",
            borderRadius: "0.4rem",
            padding: "0.2rem",
          }}
        /> */}
        {grouping !== "priority" ? getPriorityIcon(ticker.priority) : <></>}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            overflowX: "auto",
          }}
          className='scrollbar'
        >
          {ticker.tag.map((tag, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px #c3c3c3 solid",
                  borderRadius: "0.4rem",
                  padding: "0.2rem 0.6rem",
                  gap: "0.5rem",
                }}
                key={index}
              >
                <BsFillCircleFill color='#c3c3c3' />
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#6c7077",
                    marginBottom: "0.1rem",
                  }}
                >
                  {tag}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;




