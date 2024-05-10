import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import PartyPage from "./components/PartyPage";
import ElectionPage from "./components/ElectionPage";
import ConnectionPage from "./components/ConnectionPage";
import UserPage from "./components/UserPage";
import Sidebar from "./components/Sidebar";
import AdminLogin from "./components/AdminLogin";
import { useDispatch } from "react-redux";
import { election_get_req, party_get_req, partylist_get_req, user_get_req, vote_get_req } from "./Redux-Toolkit/Constant";
import { fetchData } from "./Redux-Toolkit/Slice/ReduxSlice";

// // Function to get the role from localStorage
const getRole = () => {
  const role = localStorage.getItem("role"); // Retrieve role from localStorage
  return role; // Returns the role as a string or null
};

const App = () => {
  const role = getRole(); // Get the role from localStorage
  console.log(role);

  // DISPATCH
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData({ dataType: "party", endpoint: party_get_req }));
    dispatch(fetchData({ dataType: "election", endpoint: election_get_req }));
    dispatch(fetchData({ dataType: "connection", endpoint: partylist_get_req }));
    dispatch(fetchData({ dataType: "user", endpoint: user_get_req }));
    dispatch(fetchData({ dataType: "vote", endpoint: vote_get_req }));

  }, []);

  // let role = "admin"
  if (!role || role === "") {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    );
  }

  if (role === "admin") {
    return (
      <div>
        <Sidebar />
        <div
          className="container"
          style={{
            maxWidth: "1150px",
            padding: "30px 40px 40px",
            height: "100vh",
            marginLeft: "310px",
          }}
        >
          <Routes>
            <Route path="*" element={<AdminDashboard to="/" replace />} />
            <Route path="/admindashboard" exact element={<AdminDashboard />} />
            <Route path="/party" exact element={<PartyPage />} />
            <Route path="/election" exact element={<ElectionPage />} />
            <Route path="/connection" exact element={<ConnectionPage />} />
            <Route path="/user" exact element={<UserPage />} />
          </Routes>
        </div>
      </div>
    );
  }

  if (role === "user") {
    return (
      <div>
        {/* You can add a sidebar or navigation here for users */}
        <Routes>
          <Route path="/userdashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    );
  }

  // Default fallback to login in case of any issues
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
