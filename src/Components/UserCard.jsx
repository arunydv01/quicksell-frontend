import React from "react";
import hightPriority from "../Assets/high_pret.png"
import "../Style/Card.css"

const UserCard = ({card1}) => {
  return (
    <div className="card">
      <div className="cardRow1">
        <div className="card-id">{card1.id}</div>
        {/* <img className="profile-img" src={image} alt="img" /> */}
        {/* <div ></div> */}
      </div>
      <div>
        <div className="card-title">{card1.title}</div>
        <div className="tag-box">
          <div className="icon-box"><img className="signal-image" src={hightPriority} alt="" /></div>
          <div className="card-tag">
            <div className="circle"></div>
            <div className="tag-content">{card1.tag}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard