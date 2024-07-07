import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

// DB Helpers
import { deleteDocument } from "../../helpers";

// Styling
import "./Admin.css";

// Export data
import * as XLSX from "xlsx";
import { CSVLink } from "react-csv";

const Admin = () => {
  const [messageList, setMessageList] = useState();
  const [userAuthStatus, setUserAuthStatus] = useState(false);

  // Form States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ROOT_USER = "admin";
  const ROOT_USER_PASSWORD = "admin@123";

  const handleAdminLogin = () => {
    if (username === ROOT_USER && password === ROOT_USER_PASSWORD) {
      alert("Logged in");
      setUserAuthStatus(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  const fetchData = async () => {
    await getDocs(collection(db, "skincontacts")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp.toDate(),
      }));
      setMessageList(newData);
      try {
        messageList.map((msg) => {
          console.log(msg);
        });
      } catch (err) {
        console.log(err);
      }
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDocument("skincontacts", id);
      fetchData();
    } catch (err) {}
  };

  const exportToXLSX = () => {
    if (messageList.length === 0) {
      // alert("No data to export");
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(messageList);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Messages");
    XLSX.writeFile(workbook, "messages.xlsx");
  };

  const exportToCSV = () => {
    if (messageList.length === 0) {
      // alert("No data to export");
      return [];
    }
    return messageList.map(({ id, ...rest }) => rest);
  };

  useEffect(() => {
    fetchData();
  }, []);

  try {
    return (
      <div className="adminContent">
        {userAuthStatus ? (
          <div className="adminButtonsRow">
            <button
              className="adminRefreshBtn"
              onClick={() => {
                fetchData();
              }}
            >
              Refresh
            </button>
            {/* Data export buttons */}
            <button className="admin-export-btn" onClick={exportToXLSX}>
              Export to XLSX
            </button>
            <CSVLink
              data={exportToCSV()}
              filename={"messages.csv"}
              className="admin-export-csv-btn"
            >
              Export to CSV
            </CSVLink>
            {messageList.map((msg) => (
              <div className="adminMessage">
                <h3>Sender's Name: {msg.name}</h3>
                <p>Sender's Email: {msg.email}</p>
                <p>Sender's Mobile: {msg.mobile}</p>
                <p>TimeStamp: {msg.timestamp.toLocaleString()}</p>
                <button
                  className="adminDeleteBtn"
                  onClick={() => {
                    handleDelete(msg.id);
                  }}
                >
                  Delete item
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="adminLoginForm">
            <h1 className="adminLoginFormHeading">
              Bodyclinix Admin Login Portal
            </h1>
            <div>
              <p className="adminLoginFormLabel">username:</p>
              <input
                type="text"
                className="adminLoginFormInput"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div>
              <p className="adminLoginFormLabel">password:</p>
              <input
                type="password"
                className="adminLoginFormInput"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="adminFormLoginBtn" onClick={handleAdminLogin}>
              Login
            </button>
          </div>
        )}
      </div>

      // <div>admin</div>
    );
  } catch (err) {
    console.log(err);
  }
};

export default Admin;
