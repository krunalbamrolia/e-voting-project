// // Sidebar.jsx
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../asets/style/Sidebar.css'; // Ensure correct path

// const Sidebar = () => {
//   const location = useLocation(); // Get the current route

//   return (
//     <div className="sidebar bg-dark text-white p-3">
//       <div className="logo text-center mb-3"> {/* Added margin-bottom */}
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADpfeWoT-oOJ5Ip2X5JugYmj06CO0H5Rt0gtygESLzN3qCEez2Rb0zSGWNyI920QrTfY&usqp=CAU" alt="E-Voting System Logo" className="img-fluid m-4" />
//       </div>
//       <ul className="menu list-unstyled"> {/* Sidebar menu */}
//         <li className={`menu-item ${location.pathname === '/admin' ? 'active' : ''}`}>
//           <Link to="/admin" className="text-white">Dashboard</Link> {/* Highlight active page */}
//         </li>
//         <li className={`menu-item ${location.pathname === '/party' ? 'active' : ''}`}>
//           <Link to="/party" className="text-white">Party</Link>
//         </li>
//         <li className={`menu-item ${location.pathname === '/election' ? 'active' : ''}`}>
//           <Link to="/election" className="text-white">Election</Link>
//         </li>
//         <li className={`menu-item ${location.pathname === '/connection' ? 'active' : ''}`}>
//           <Link to="/connection" className="text-white">Connection</Link>
//         </li>
//         <li className={`menu-item ${location.pathname === '/user' ? 'active' : ''}`}>
//           <Link to="/user" className="text-white">User</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



// import React from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom'; // Use `useNavigate` to redirect after logout
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../asets/style/Sidebar.css'; // Correct path

// const Sidebar = () => {
//   const location = useLocation(); // Get the current route

//   // Function to handle logout
//   const handleLogout = () => {
//     window.location.reload();
//     localStorage.clear();
//     window.location.href ="/";
//   };

//   return (
//     <div className="sidebar bg-dark text-white p-3">
//       <div className="logo text-center mb-3">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADpfeWoT-oOJ5Ip2X5JugYmj06CO0H5Rt0gtygESLzN3qCEez2Rb0zSGWNyI920QrTfY&usqp=CAU"
//           alt="E-Voting System Logo"
//           className="img-fluid m-4"
//         />
//       </div>
//       <ul className="menu list-unstyled">
//           <Link to="/admindashboard" className="text-white">
//         <li className={`menu-item ${location.pathname === '/admindashboard' ? 'active' : ''}`}>
//         Dashboard
//         </li>
//         </Link>
//         <li className={`menu-item ${location.pathname === '/party' ? 'active' : ''}`}>
//           <Link to="/party" className="text-white">Party</Link>
//         </li>
//         <li className={`menu-item ${location.pathname === '/election' ? 'active' : ''}`}>
//           <Link to="/election" className="text-white">Election</Link>
//         </li>
//         <li className={`menu-item ${location.pathname === '/connection' ? 'active' : ''}`}>
//           <Link to="/connection" className="text-white">Connection</Link>
//         </li>
//         <li className={`menu-item ${location.pathname === '/user' ? 'active' : ''}`}>
//           <Link to="/user" className="text-white">User</Link>
//         </li>
//       </ul>
//       <div className="logout text-center mt-3"> {/* Logout button */}
//         <button className="btn btn-danger" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faGavel, faLink, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../asets/style/Sidebar.css'; // Path to your custom CSS

const Sidebar = () => {
  const location = useLocation(); // Get the current route

  // Function to handle logout
  const handleLogout = (event) => {
    window.location.reload();
    localStorage.clear();
    window.location.href = "/";
    // console.log("sdfdsfdzvcx");
  };

  return (
    <div className="sidebar bg-dark text-white p-3">
      <div className="logo text-center mb-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADpfeWoT-oOJ5Ip2X5JugYmj06CO0H5Rt0gtygESLzN3qCEez2Rb0zSGWNyI920QrTfY&usqp=CAU"
          alt="E-Voting System Logo"
          className="img-fluid m-4"
        />
      </div>
      <ul className="menu list-unstyled">
        <Link to="/admindashboard" className="text-white" style={{textDecoration:"none"}}>
          <li className={`menu-item ${location.pathname === '/admindashboard' ? 'active' : ''}`}>
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </li>
        </Link>
        <Link to="/party" className="text-white" style={{textDecoration:"none"}}>
          <li className={`menu-item  ${location.pathname === '/party' ? 'active' : ''}`}>
            <FontAwesomeIcon icon={faUsers} /> Party
          </li>
        </Link>
        <Link to="/election" className="text-white" style={{textDecoration:"none"}}>
          <li className={`menu-item ${location.pathname === '/election' ? 'active' : ''}`}>
            <FontAwesomeIcon icon={faGavel} /> Election
          </li>
        </Link>
        <Link to="/connection" className="text-white" style={{textDecoration:"none"}}>
          <li className={`menu-item ${location.pathname === '/connection' ? 'active' : ''}`}>
            <FontAwesomeIcon icon={faLink} /> Connection
          </li>
        </Link>
        <Link to="/user" className="text-white" style={{textDecoration:"none"}}>
          <li className={`menu-item ${location.pathname === '/user' ? 'active' : ''}`}>
            <FontAwesomeIcon icon={faUser} /> User
          </li>
        </Link>
      
      </ul>
      <div className="logout text-center mt-3">
        <button
          className="btn btn-danger"
          type="button" // Ensure it's not type="submit"
          onClick={handleLogout}
        >
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
