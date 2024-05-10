import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoSearch } from "react-icons/io5";
import "../asets/style/PartyPage.css"; // Ensure correct path
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PartyPage = () => {
  // MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Input state for modal
  const [partyName, setPartyName] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [partyImg, setPartyImg] = useState(null);

  // GET DATA
  let partyData = useSelector((state) => state.data?.party);
  console.log(partyData);

  // POST DATA
  let handleSubmit = () => {
    const formData = new FormData();
    formData.append("partyName", partyName);
    formData.append("shortCode", shortCode);
    formData.append("partyImg", partyImg);

    // Do something with formData, like sending it to an API
    console.log(formData);

    handleClose();
  };

  return (
    <>
      <div class="d-flex justify-content-between">
        <div class="input-group mb-3 w-25">
          <span class="input-group-text" id="basic-addon1">
            <IoSearch />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <button className="btn btn-outline-dark" onClick={handleShow}>
            ADD PARTY
          </button>
        </div>
      </div>

      <table class="table" style={{ border: "1px solid gray" }}>
        <thead>
          <tr>
            <th scope="col">Party Logo</th>
            <th scope="col">Party Name</th>
            <th scope="col">Party Short code</th>
          </tr>
        </thead>
        <tbody>
          {partyData?.map((val, ind) => {
            return (
              <React.Fragment key={ind}>
                <tr>
                  <td>
                    <img
                      src={val.party_logo}
                      style={{ width: "45px" }}
                      alt=""
                    />
                  </td>
                  <td>{val.party_name}</td>
                  <td>{val.short_code}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD PARTY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Enter Party Name"
            className="mb-3"
            value={partyName}
            onChange={(e) => setPartyName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Party Short-Code"
            value={shortCode}
            onChange={(e) => setShortCode(e.target.value)}
          />
          <input
            type="file"
            placeholder="Enter Party img"
            onChange={(e) => setPartyImg(e.target.files[0])}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            ADD PARTY
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PartyPage;
