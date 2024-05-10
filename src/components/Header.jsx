import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
   const getUser = () => {
     const userData = JSON.parse(localStorage.getItem("user"));
     return userData;
   };
   let userData = getUser();

  const [showProfile, setShowProfile] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  const handleOpenProfile = () => {
    setShowProfile(true); // Show the profile modal
  };

  const handleCloseProfile = () => {
    setShowProfile(false); // Close the profile modal
  };

  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light">
      <div className="logo">
        <img
          src="YOUR_LOGO_URL" // Replace with your logo URL
          alt="Company Logo"
          style={{ width: "100px" }} // Adjust as needed
        />
      </div>
      <div className="user-profile">
        <FontAwesomeIcon
          icon={faUserCircle}
          style={{ cursor: "pointer" }} // Make it clickable
          onClick={handleOpenProfile} // Open the profile modal on click
        />
      </div>

      {/* Profile Modal */}
      <Modal show={showProfile} onHide={handleCloseProfile} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card border-light mb-3">
                        <div className="card-body">
                          <h5 className="card-title">
                            Name: <b>{userData.name}</b>
                          </h5>
                          <hr />
                          <p className="card-text">
                            <b>father Name:</b>&nbsp;
                            {userData.fatherName}
                          </p>
                          <p className="card-text">
                            <b>Date of Birth</b>&nbsp;
                            {userData.dob}
                          </p>
                          <p className="card-text">
                            <b>part No. and Name</b>&nbsp;
                            {userData.partNoandName}
                          </p>
                          <p className="card-text">
                            <b>Gender :</b>&nbsp;
                            {userData.sex}
                          </p>
                          <p className="card-text">
                            <b>Address :</b>&nbsp;
                            {userData.address}
                          </p>
                        </div>
                        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProfile}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
