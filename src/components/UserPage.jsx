import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postData } from "../Redux-Toolkit/Slice/ReduxSlice";
import { user_post_req } from "../Redux-Toolkit/Constant";

const UserPage = () => {
  // Modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Input data state
  const [formData, setFormData] = useState({
    cardNo: "",
    name: "",
    fatherName: "",
    sex: "",
    dob: "",
    address: "",
    assemblyNoandName: "",
    partNoandName: "",
    password: "",
  });

  let dispatch = useDispatch();
  let userData = useSelector((state) => state.data.user);

  // Handle form submit
  let handleSubmit = () => {
    dispatch(
      postData({ dataType: "user", endpoint: user_post_req, payload: formData })
    );
    handleClose();
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="input-group mb-3 w-25">
          <span className="input-group-text" id="basic-addon1">
            <IoSearch />
          </span>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <button className="btn btn-outline-dark" onClick={handleShow}>
            ADD USER
          </button>
        </div>
      </div>

      <table className="table" style={{ border: "1px solid gray" }}>
        <thead>
          <tr>
            <th scope="col">card No</th>
            <th scope="col">Name</th>
            <th scope="col">Father Name</th>
            <th scope="col">sex</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">A.N.N</th>
            <th scope="col">P.N</th>
            <th scope="col">Address</th>
            <th scope="col">PassWord</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((val, ind) => {
            return (
              <React.Fragment key={ind}>
                <tr>
                  <td>{val.cardNo}</td>
                  <td>{val.name}</td>
                  <td>{val.fatherName}</td>
                  <td>{val.sex}</td>
                  <td>{val.dob}</td>
                  <td>{val.address}</td>
                  <td>{val.assemblyNoandName}</td>
                  <td>{val.partNoandName}</td>
                  <td>{val.password}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Enter CardNo*</label>
          <input
            required
            type="text"
            name="cardNo"
            value={formData.cardNo}
            onChange={handleChange}
            placeholder="Enter Card No"
            className="mb-3"
          />
          <label>Enter Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            className="mb-3"
          />
          <label>Enter FatherName</label>
          <input
            required
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Enter FatherName"
            className="mb-3"
          />
          <label>Enter sex</label>
          <input
            required
            type="text"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            placeholder="Enter sex"
            className="mb-3"
          />
          <label>Enter DOB</label>
          <input
            required
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mb-3"
          />
          <label>Enter Address</label>
          <input
            required
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter Address"
            className="mb-3"
          />
          <label>Enter AssemblyNoandName</label>
          <input
            required
            type="text"
            name="assemblyNoandName"
            value={formData.assemblyNoandName}
            onChange={handleChange}
            placeholder="Enter AssemblyNoandName"
            className="mb-3"
          />
          <label>Enter PartNoandName</label>
          <input
            required
            type="text"
            name="partNoandName"
            value={formData.partNoandName}
            onChange={handleChange}
            placeholder="Enter PartNoandName"
            className="mb-3"
          />
          <label>Enter Password</label>
          <input
            required
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="mb-3"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            ADD USER
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserPage;
