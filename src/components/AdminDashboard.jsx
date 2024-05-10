import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import '../asets/style/AdminDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS

const AdminDashboard = () => {
  // Example data for the table
  const [voteCounts, setVoteCounts] = useState([
    { party: 'Party A', votes: 100 },
    { party: 'Party B', votes: 300 },
    { party: 'Party C', votes: 150 },
  ]);

  const [sortedVoteCounts, setSortedVoteCounts] = useState([]);

  useEffect(() => {
    // Sort vote counts in descending order
    const sorted = [...voteCounts].sort((a, b) => b.votes - a.votes);
    setSortedVoteCounts(sorted);
  }, [voteCounts]);

  return (
    // <div className="admin-dashboard d-flex"> {/* Flex layout with sidebar and main content */}
    //   <Sidebar />
      <div className="main-content flex-grow-1 p-4"> {/* Main content with padding */}
        <div className="dashboard-header"> {/* Header with background image */}
          <h1 className="text-dark">Admin Dashboard</h1>
        </div>
        
        <div className="container-fluid"> {/* Bootstrap container for responsive layout */}
          <div className="row stats"> {/* Bootstrap grid for stats */}
            <div className="col-md-4 stat-box"> {/* Stat box with Bootstrap column */}
              <h2>Total Parties</h2>
              <p>{voteCounts.length}</p>
            </div>
            <div className="col-md-4 stat-box">
              <h2>Total Votes</h2>
              <p>{voteCounts.reduce((total, item) => total + item.votes, 0)}</p>
            </div>
            <div className="col-md-4 stat-box">
              <h2>Average Votes</h2>
              <p>{Math.round(voteCounts.reduce((total, item) => total + item.votes, 0) / voteCounts.length)}</p>
            </div>
          </div>

          <h2>Party Vote Counts</h2>
          <table className="table table-hover table-bordered"> {/* Bootstrap table with hover and border */}
            <thead>
              <tr>
                <th>Party</th>
                <th>Votes</th>
              </tr>
            </thead>
            <tbody>
              {sortedVoteCounts.map((party, index) => (
                <tr key={index}>
                  <td>{party.party}</td>
                  <td>{party.votes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    // </div>
  );
};

export default AdminDashboard;
