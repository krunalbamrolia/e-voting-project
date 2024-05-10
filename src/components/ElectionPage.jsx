import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../asets/style/ElectionPage.css"; // Ensure correct path
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../Redux-Toolkit/Slice/ReduxSlice";
import { election_post_req } from "../Redux-Toolkit/Constant";

const ElectionPage = () => {
  // MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Refs for modal inputs
  const electionName = useRef(null);
  const electionDate = useRef(null);

  // GET DATA
  let dispatch = useDispatch();
  let electionData = useSelector((state) => state.data.election);

  // POST DATA
  let handleSubmit = () => {
    let data = {
      election_name: electionName.current.value,
      date: electionDate.current.value,
    };
    dispatch(
      postData({
        dataType: "election",
        endpoint: election_post_req,
        payload: data,
      })
    );

    handleClose();
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="input-group mb-3 w-25">
          <span className="input-group-text" id="basic-addon1">
            <IoSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <button className="btn btn-outline-dark" onClick={handleShow}>
            ADD ELECTION
          </button>
        </div>
      </div>

      <table className="table" style={{ border: "1px solid gray" }}>
        <thead>
          <tr>
            <th scope="col">Election Name</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {electionData?.map((val, ind) => {
            return (
              <React.Fragment key={ind}>
                <tr>
                  <td>{val.election_name}</td>
                  <td>{val.date}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD ELECTION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Enter Election Name :-</label>
          <input
            type="text"
            placeholder="Enter Election Name"
            className="mb-3"
            ref={electionName}
          />
          <label>Enter Election Date :-</label>
          <input
            type="date"
            placeholder="Enter Election date"
            ref={electionDate}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            ADD ELECTION
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ElectionPage;
