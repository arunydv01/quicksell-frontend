import React from "react";
import "../Style/Navbar.css";
import { useState, useRef, useEffect } from "react";
import disImage from "../Assets/display.png";
import { IoMdOptions } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import {FiChevronDown} from "react-icons/fi";

const Navbar = ({ grpFunc, ordFunc, grouping, ordering }) => {
  const [isHidden, setHidden] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHidden(true); // Hide the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='Navbar'>
      <button
        id='display-button'
        style={{
          border: "none",
          backgroundColor: "transparent",
          marginLeft: "4rem",
          position: "relative",
        }}
        ref={dropdownRef}
      >
        <div
          style={{
            backgroundColor: "white",
            border: "2px solid #d1d5db",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 20px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "0.4rem",
          }}
          onClick={(e) => {
            setHidden(!isHidden);
          }}
        >
          <IoMdOptions color='#374151' size={"1rem"} />
          <p
            style={{
              margin: "0 10px 0 10px",
              fontSize: "0.9rem",
            }}
          >
            Display
          </p>
          <RiArrowDropDownLine color='#374151' size={"1.5rem"} />
        </div>
        {isHidden ? (
          <></>
        ) : (
          <div className='hidden-box'>
            <div className='group'>
              <div className='grouping'>Grouping</div>
              <select
                className='select-grp'
                name='grouping'
                id='grouping'
                defaultValue={(grouping === "userId" && "user") || grouping}
                onChange={(e) => {
                  if (e.target.value === "user") grpFunc("userId");
                  else grpFunc(e.target.value);
                }}
              >
                <option value='status'>Status</option>
                <option value='user'>User</option>
                <option value='priority'>Priority</option>
              </select>
            </div>
            <div className='group'>
              <div className='ordering'>Ordering</div>
              <select
                className='select-grp'
                name='ordering'
                id='ordering'
                defaultValue={ordering}
                onChange={(e) => {
                  ordFunc(e.target.value);
                }}
              >
                <option value='priority'>Priotity</option>
                <option value='title'>Title</option>
              </select>
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default Navbar;
