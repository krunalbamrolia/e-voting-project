import Header from "./Header"; // Import the header component
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import TablewithRadio from "./TablewithRadio";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../Redux-Toolkit/Slice/ReduxSlice";
import { vote_post_req } from "../Redux-Toolkit/Constant";

const UserDashboard = () => {

   const getUser = () => {
     const userData = JSON.parse(localStorage.getItem("user"));
     return userData;
   };
   let user = getUser();
   console.log(user);


  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  let dispatch = useDispatch()
  let connectionData = useSelector((state) => state.data.connection);

  const data = connectionData?.map((connection) => ({
    id: connection?._id,
    election_name: connection?.election?.election_name,
    election: connection?.election?._id,
    party: connection?.party?.party_name,
    partylogo: connection?.party?.party_logo,
  }));

   let finalData = (rowData) => {
    console.log(rowData);
    let data = {
      user: user?._id,
      party: rowData?.id,
      election: rowData?.election,
    };
    dispatch(
      postData({ dataType: "vote", endpoint: vote_post_req, payload: data })
    );
    setTimeout(() => {
      window.location.reload();
      localStorage.clear();
      window.location.href = "/";
    }, 1500); 
  }
  const handleClose = () => setShowModal(false);
  return (
    <div>
      <Header/>{" "}
      {/* Include the header with the logout handler */}
      <div className="container mt-4">
        <div>
          <h1>User Page</h1>
          <TablewithRadio data={data} Output={finalData} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
