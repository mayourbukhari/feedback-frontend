import React, { useState } from "react";
import axios from "axios";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function onFormSubmit(e) {
    e.preventDefault();
    const response = await axios.post(
      "https://feedback-backend-ejgw.onrender.com/feedback",
      { name, message }
    );
    console.log(response.data);
    alert(response.data);
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f8f9fa",
    padding: "16px",
  };

  const formStyle = {
    background: "#fff",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "12px",
    borderRadius: "4px",
    border: "none",
    background: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.2s",
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={onFormSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Name"
          onChange={onNameChange}
          value={name}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Enter message"
          onChange={onMessageChange}
          value={message}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}
