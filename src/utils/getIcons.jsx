import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import { MdSignalCellular3Bar , MdSignalCellular2Bar , MdSignalCellular1Bar } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { PiCircleHalfFill } from "react-icons/pi";
import { MdCancel } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { BiCircle } from "react-icons/bi";

const getPriorityIcon = (priority) => {
  switch (priority) {
    case 4:
      return <BsExclamationSquareFill color='#ff4500' size={"1rem"} />;
    case 3:
      return <MdSignalCellular3Bar color='#374151' size={"1rem"} />;
    case 2:
      return <MdSignalCellular2Bar color='#374151' size={"1rem"} />;
    case 1:
      return <MdSignalCellular1Bar color='#374151' size={"1rem"} />;
    case 0:
      return <BiDotsHorizontalRounded color='#374151' size={"1rem"} />;
    default:
      return <BiDotsHorizontalRounded color='#374151' size={"1rem"} />;
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "Todo":
      return <BiCircle color="#dcdcdc" size={"1rem"} />;
    case "Done":
      return <AiFillCheckCircle color="#7b68ee" size={"1rem"} />;
    case "In progress":
      return <PiCircleHalfFill color="#ffd700" size={"1rem"} />;
    case "Backlog":
      return <MdCancel color="#7b68ee" size={"1rem"} />;
    default:
      return <IoPersonSharp color="#7b68ee" size={"1rem"} />;
  }
}

export { getPriorityIcon, getStatusIcon };