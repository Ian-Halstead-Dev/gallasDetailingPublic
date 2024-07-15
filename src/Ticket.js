import React, { useState } from "react";
import "./Styles/Ticket.css"; // Import the CSS file for styling

let backendEndpoint = "https://gallasdetailingbackend.onrender.com";

export function Ticket() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    make: "",
    model: "",
    year: "",
    service: "", // Updated to be selected from dropdown
    additional_comments: "",
  });

  // Define your service options here
  const serviceOptions = [
    "Exterior Detailing Package",
    "Interior Detailing Package",
    "Full-Service Detailing Package",
    "Paint Correction Package",
    "Ceramic Coating Package",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(backendEndpoint + "/addTicket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Ticket submitted successfully");
        setFormData({
          name: "",
          phone: "",
          email: "",
          make: "",
          model: "",
          year: "",
          service: "",
          additional_comments: "",
        });
      } else {
        alert("Failed to submit ticket");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the ticket");
    }
  };

  return (
    <div className="app">
      <h1 className="title">Gallas Detailing Ticket Form</h1>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="step" id="step-1">
          <h1>Step 01</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="step" id="step-2">
          <h1>Step 02</h1>
          <div>
            <label htmlFor="make">Make</label>
            <input
              type="text"
              id="make"
              name="make"
              value={formData.make}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="model">Model</label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="step" id="step-3">
          <h1>Step 03</h1>
          <div>
            <label htmlFor="service">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="additional_comments">Additional Comments</label>
            <textarea
              id="additional_comments"
              name="additional_comments"
              value={formData.additional_comments}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <button className="submitbutton" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
