import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../asets/style/Login.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const [cardNo, setcardNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Select vote data from Redux store
  let voteData = useSelector((state) => state.data.vote);
const handleUserLogin = async () => {
  setError(""); // Clear any previous errors

  if (cardNo === "" || password === "") {
    setError("User ID and Password cannot be empty"); // Validate that fields are not empty
    return;
  }

  try {
    const response = await axios.post(
      "http://13.127.211.205:8000/v1/login/user",
      {
        cardNo,
        password,
      }
    );

    if (response.status === 200) {
      const userData = response.data.data;
      if (!voteData.find((val) => val.user?.cardNo === userData.cardNo)) {
        // Store the role in localStorage upon successful login
        localStorage.setItem("role", "user"); // Assuming the role is part of the response
        localStorage.setItem("user", JSON.stringify(userData));

        // Redirect to the user dashboard
        window.location.href = "/userdashboard";
      } else {
        setError("You have already voted"); // User has already voted
      }
    } else {
      setError("Invalid user credentials"); // Handle invalid credentials
    }
  } catch (error) {
    setError("Invalid user credentials"); // Handle other errors
  }
};


  const handleAdminLogin = () => {
    // navigate('/adminlogin'); // Redirect to admin login page
    window.location.href = "/adminlogin";
  };

  return (
    <div className="login-page">
      <header className="header">
        <div className="header-left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEzE7kNt-HB1k5CpZ0bz-Dkttw9_Jn23U3lfydPk-vDnxrGha6yli3Q4lckPVqm-5LIs&usqp=CAU" // Replace with your logo URL
            alt="E-Voting System Logo"
            style={{ width: "60px" }}
          />
        </div>
        <div className="header-right">
          <img
            src="https://iconape.com/wp-content/png_logo_vector/swach-bharat-abhiyan-logo.png"
            alt="Swachh Bharat Abhiyan"
            style={{ width: "130px" }}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsz1jb2mZGTAtm4bt5hBGZRscG10R3_xoyy0LfgAUVLksDIhIT0uBGf4ya_AbZZJ8LKTo&usqp=CAU"
            alt="MyGov"
            style={{ width: "150px" }}
          />
          <Button className="admin-button m-2 p-1" onClick={handleAdminLogin}>
            <FontAwesomeIcon icon={faUserShield} /> Admin
          </Button>
        </div>
      </header>
      <div className="background">
        <div className="login-card">
          <h1>User Login</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="User ID"
              value={cardNo}
              onChange={(e) => setcardNo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <Button className="login-button" onClick={handleUserLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../asets/style/Login.css';
// import { Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserShield } from '@fortawesome/free-solid-svg-icons';

// const LoginPage = () => {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const handleUserLogin = async () => {
//     setError('');

//     if (userId == 'eera' && password == 'eera') {
//       navigate('/userdashboard'); // Redirect to admin dashboard
//     } 
//   };

//   const handleAdminLogin = () => {
//     navigate('/adminlogin'); // Redirect to admin dashboard
//   };

//   return (
//     <div className="login-page">
//       <header className="header">
//         <div className="header-left">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEzE7kNt-HB1k5CpZ0bz-Dkttw9_Jn23U3lfydPk-vDnxrGha6yli3Q4lckPVqm-5LIs&usqp=CAU" alt="E-Voting System Logo" style={{ width: '60px' }} />
//         </div>
//         <div className="header-right">
//           <img src="https://iconape.com/wp-content/png_logo_vector/swach-bharat-abhiyan-logo.png" alt="Swachh Bharat Abhiyan" style={{ width: '130px' }} />
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsz1jb2mZGTAtm4bt5hBGZRscG10R3_xoyy0LfgAUVLksDIhIT0uBGf4ya_AbZZJ8LKTo&usqp=CAU" alt="MyGov" style={{ width: '150px' }} />
//           <Button className="admin-button m-2 p-1" onClick={handleAdminLogin}>
//             <FontAwesomeIcon icon={faUserShield} /> Admin
//           </Button>
//         </div>
//       </header>
//       <div className="background">
//         <div className="login-card">
//           <h1>Login</h1>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="User ID"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           <Button className="login-button" onClick={handleUserLogin}>
//             Login
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
