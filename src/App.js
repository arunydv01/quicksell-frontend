import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Column from "./Components/Column";
import { getPriorityIcon, getStatusIcon } from "./utils/getIcons";
import { getUserIcon } from "./utils/getUserProfile";
import { getPriorityName } from "./utils/mapping";
import { storeData, fetchData } from "./utils/localStorage";

const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

function App() {
  const [data, setData] = useState({
    tickets: [],
    users: [],
  });
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("title");

  useEffect(() => {
    if (fetchData("grouping") !== null) {
      setGrouping(fetchData("grouping"));
    }
    if (fetchData("ordering") !== null) {
      setOrdering(fetchData("ordering"));
    }
  }, []);

  const setGroupingFunc = (val) => {
    setGrouping(val);
    storeData("grouping", val);
  }

  const setOrderingFunc = (val) => {
    setOrdering(val);
    storeData("ordering", val);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(API_URL);
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const columnDatas = useMemo(() => {
    let tmpVals = [];
    if (grouping === "userId") {
      tmpVals = data.users.map((user) => {
        return {
          name: user.name,
          id: user.id,
          symbol: getUserIcon(user),
        };
      });
    } else if (grouping === "status") {
      let allStatus = data.tickets.map((ticket) => {
        return {
          name: ticket.status
            .toString()
            .replace(/\b\w/g, (letter) => letter.toUpperCase()),
          id: ticket.status,
          symbol: getStatusIcon(ticket.status),
        };
      });
      let uniqueStatus = [];
      allStatus.forEach((status) => {
        if (!uniqueStatus.some((stat) => stat.id === status.id)) {
          uniqueStatus.push(status);
        }
      });
      tmpVals = uniqueStatus;
    } else if (grouping === "priority") {
      tmpVals = [0, 4, 3, 2, 1].map((priority) => {
        return {
          name: getPriorityName(priority),
          id: priority,
          symbol: getPriorityIcon(priority),
        };
      });
    }
    tmpVals.forEach((val) => {
      val["tickets"] = data.tickets
        .filter((ticket) => {
          return ticket[grouping] === val.id;
        })
        .sort((a, b) => {
          if (a[ordering] > b[ordering]) return 1;
          if (a[ordering] < b[ordering]) return -1;
          return 0;
        });
    });
    return tmpVals;
  }, [data, grouping, ordering]);
  return (
    <div
      style={{
        backgroundColor: "#f4f5f8",
        minHeight: "100vh",
      }}
    >
      <Navbar grpFunc={setGroupingFunc} ordFunc={setOrderingFunc} grouping={grouping} ordering={ordering}/>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(24rem, 1fr))",
          gridGap: 20,
          marginLeft: "5rem",
          marginRight: "5rem",
        }}
      >
        {columnDatas.map((coldata) => {
          return (
            <Column
              grouping={grouping}
              ordering={ordering}
              columnData={coldata}
              users={data.users}
            ></Column>
          );
        })}
      </div>
    </div>
  );
}

export default App;
