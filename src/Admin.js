import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Admin.css"; // Import the CSS file

let backendEndpoint = "https://gallasdetailingbackend.onrender.com";

const Admin = () => {
  const [tickets, setTickets] = useState([]);
  const [status, setStatus] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState("");

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get(backendEndpoint + "/tickets");
      setTickets(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");
    if (isConfirmed) {
      try {
        await axios.delete(backendEndpoint + `/tickets/${id}`);
        setTickets(tickets.filter((ticket) => ticket._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="container">
      {!isLoggedIn && (
        <div className="login-container">
          <input
            onChange={(e) => setEnteredUsername(e.target.value)}
            type="text"
          ></input>
          <button
            type="submit"
            onClick={async () => {
              let response = await axios.post(
                backendEndpoint + `/loginAdmin`,
                {
                  username: enteredUsername,
                },
                { validateStatus: () => true }
              );
              if (response.status === 200) {
                setIsLoggedIn(true);
              } else {
                alert("Invalid Password!");
              }
              console.log(enteredUsername);
            }}
          >
            Login
          </button>
        </div>
      )}
      {isLoggedIn && (
        <div className="admin-container">
          <h1 className="admin-title">Admin Panel</h1>
          <table className="admin-table">
            <thead>
              <tr>
                <th className="admin-table-header">Customer Name</th>
                <th className="admin-table-header">Phone</th>
                <th className="admin-table-header">Email</th>
                <th className="admin-table-header">Car Make</th>
                <th className="admin-table-header">Car Model</th>
                <th className="admin-table-header">Year</th>
                <th className="admin-table-header">Service</th>
                <th className="admin-table-header">Additional Comments</th>
                <th className="admin-table-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket._id} className="admin-table-row">
                  <td className="admin-table-data">{ticket.name}</td>
                  <td className="admin-table-data">{ticket.phone}</td>
                  <td className="admin-table-data">{ticket.email}</td>
                  <td className="admin-table-data">{ticket.make}</td>
                  <td className="admin-table-data">{ticket.model}</td>
                  <td className="admin-table-data">{ticket.year}</td>
                  <td className="admin-table-data">{ticket.service}</td>
                  <td className="admin-table-data wrap-text">
                    {ticket.additional_comments}
                  </td>
                  <td className="admin-table-data">
                    <button
                      className="admin-action-btn"
                      onClick={() => handleDelete(ticket._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;
