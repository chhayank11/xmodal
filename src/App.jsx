import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.toString().length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
  };

  return (
    <div className="container">
      <h1>User Details Modal</h1>
      <button
        style={{
          color: "white",
          backgroundColor: "blue",
          width: "150px",
          height: "50px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Form
      </button>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onclose={() => setIsOpen(false)}
      >
        <div className="modal">
          <h1>Fill Details</h1>
          <form className="modal-content" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input required id="username" type="text" />
            <label htmlFor="email">Email:</label>
            <input required id="email" type="email" />
            <label htmlFor="phone">Phone Number:</label>
            <input
              required
              id="phone"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="dob">Date of Birth:</label>
            <input required id="dob" type="date" />

            <button
              className="submit-button"
              style={{
                color: "white",
                backgroundColor: "blue",
                width: "150px",
                height: "50px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default App;
