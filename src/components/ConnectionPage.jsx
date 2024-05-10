import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form, Table } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../asets/style/ConnectionPage.css"; // Correct path
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../Redux-Toolkit/Slice/ReduxSlice";
import { partylist_post_req } from "../Redux-Toolkit/Constant";

const ConnectionPage = () => {
  let election_id = useRef();
  let party_id = useRef();

  // get Data
  let dispatch = useDispatch();
  let connectionData = useSelector((state) => state.data.connection);
  let partyData = useSelector((state) => state.data.party);
  let electionData = useSelector((state) => state.data.election);

  // post Data
  let handleSubmit = () => {
    let data = {
      party: party_id.current.value,
      election: election_id.current.value,
    };
    dispatch(
      postData({
        dataType: "connection",
        endpoint: partylist_post_req,
        payload: data,
      })
    );
  };
  return (
    <div className="row justify-content-between">
      <div className="col-4">
        <div className="table-container">
          <table
            className="table table-fixed"
            style={{ border: "1px solid gray" }}
          >
            <thead>
              <tr>
                <th scope="col">Party Name</th>
                <th scope="col">Election Name</th>
              </tr>
            </thead>
            <tbody>
              {connectionData?.map((val, ind) => {
                return (
                  <React.Fragment key={ind}>
                    <tr>
                      <td>{val?.party?.party_name}</td>
                      <td>{val?.election?.election_name}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-4 d-flex align-items-center justify-content-center flex-column ">
        <div className="border border-dark p-5 text-center rounded">
          <select
            className="form-select mb-4"
            aria-label="Default select example"
            ref={party_id}
          >
            <option selected disabled>
              Open this select menu
            </option>
            {partyData?.map((val) => {
              return <option value={val._id}>{val.party_name}</option>;
            })}
          </select>
          <select
            className="form-select mb-4"
            aria-label="Default select example"
            ref={election_id}
          >
            <option selected disabled>
              Open this select menu
            </option>
            {electionData?.map((val) => {
              return <option value={val._id}>{val.election_name}</option>;
            })}
          </select>
          <button className="btn btn-outline-dark" onClick={handleSubmit}>
            ADD ELECTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectionPage;
