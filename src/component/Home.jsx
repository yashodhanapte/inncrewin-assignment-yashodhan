import React, { useState } from "react";

const Home = () => {
  const [empData, setEmpData] = useState([
    {
      id: 1,
      firstName: "Leanne",
      lastName: "Graham",
      DOB: "7/6/1961",
      designation: "Senior Software Developer",
      photoUrl:
        "https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png",
      experience: "5",
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Smith",
      DOB: "12/6/1964",
      designation: "Junior Software Developer",
      photoUrl:
        "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png",
      experience: "2",
    },
  ]);
  const [selectedEmp, setSelectedEmp] = useState({});
  const handleEdit = (emp) => {
    console.log("edit employee", emp);
    // window.location.href = "/emp";
    setSelectedEmp(emp);
  };
  const handleDelete = (emp) => {
    console.log("delete employee", emp);
    const result = window.confirm("Are you sure you want to delete this employee?");
    // find the index of the employee in empData array, delete that entry
    if (result) { 
      const tempArr = empData;
      tempArr.splice(tempArr.indexOf(emp), 1);
      console.log(tempArr);
      setEmpData([...tempArr]);
    }
  };
  const confirmEmpUpdate = () => {
    console.log('test inside function');
      let temp = empData;
      for (let i = 0; i < temp.length; i++) {
        if (selectedEmp.id === temp[i].id) {
          temp[i] = selectedEmp;
          setEmpData([...temp]);
        }
        else {
          setEmpData([...empData, selectedEmp]);
        }
      }
  };
  const updateFirstName = (e) => {
    console.log(e.target.value);
    setSelectedEmp({ ...selectedEmp, firstName: e.target.value });
  };
  const updateLastName = (e) => {
    setSelectedEmp({ ...selectedEmp, lastName: e.target.value });
  };
  const updateDOB = (e) => {
    setSelectedEmp({ ...selectedEmp, DOB: e.target.value });
  };
  const updateDesignation = (e) => {
    setSelectedEmp({ ...selectedEmp, designation: e.target.value });
  };
  const updateExperience = (e) => {
    setSelectedEmp({ ...selectedEmp, experience: e.target.value });
  };
  const updatePhotoUrl = (e) => {
    setSelectedEmp({ ...selectedEmp, photoUrl: e.target.value });
  };

  return (
    <div>
      <table className="table-main">
        <thead>
          <tr>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Designation</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {empData.map((emp) => {
            return (
              <tr key={emp.id}>
                <td className="table-td">
                  <img src={emp.photoUrl} alt="emp photo" />
                </td>
                <td className="table-td">{emp.firstName}</td>
                <td className="table-td">{emp.lastName}</td>
                <td className="table-td">{emp.DOB}</td>
                <td className="table-td">{emp.designation}</td>
                <td className="table-td">{emp.experience}</td>
                <td className="table-td">
                  <button onClick={() => handleEdit(emp)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(emp)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="employee-details">
        <div>
          <span>First Name: </span>
          <input
            type="text"
            value={selectedEmp.firstName ? selectedEmp.firstName : ""}
            onChange={updateFirstName}
          />
        </div>
        <div>
          <span>Last Name: </span>
          <input
            type="text"
            value={selectedEmp.lastName ? selectedEmp.lastName : ""}
            onChange={updateLastName}
          />
        </div>
        <div>
          <span>Date of Birth: </span>
          <input
            type="text"
            value={selectedEmp.DOB ? selectedEmp.DOB : ""}
            onChange={updateDOB}
          />
        </div>
        <div>
          <span>Designation: </span>
          <input
            type="text"
            value={selectedEmp.designation ? selectedEmp.designation : ""}
            onChange={updateDesignation}
          />
        </div>
        <div>
          <span>Experience: </span>
          <input
            type="number"
            value={selectedEmp.experience ? selectedEmp.experience : ""}
            onChange={updateExperience}
          />
        </div>
        <div>
          <span>Photo url: </span>
          <input
            type="text"
            value={selectedEmp.photoUrl ? selectedEmp.photoUrl : ""}
            onChange={updatePhotoUrl}
          />
        </div>
      </div>

      <button onClick={confirmEmpUpdate}>
        {selectedEmp.firstName !== undefined
          ? "Confirm editing emp details"
          : "Add new Emp"}
      </button>
    </div>
  );
};

export default Home;
