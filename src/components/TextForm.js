import React, { useState } from "react";

export default function TextForm(props) {
  // create a function handleOnWorkingDays to calculate the number of working days
  const handleOnWorkingDays = (e) => {
    setDays(
      e.target.value <= 5 ? (e.target.value > 0 ? e.target.value : 1) : 7
    );
  };
  const handleOnHour = (e) => {
    setHour(e.target.value / days);
  };

  const handleOnSubjectName = (e) => {
    setSubjectName(e.target.value);
  };
  const handleOnTotalSubject = (e) => {
    setTotalSubject(e.target.value);
  };
  // create a function handleOnSubject to calculate the number of subjects
  const handleOnSubject = (e) => {
    setSubject(
      e.target.value <= 9 ? (e.target.value > 0 ? e.target.value : 1) : 9
    );
  };

  const [days, setDays] = useState("");
  const [subject, setSubject] = useState("");
  const [totalSubject, setTotalSubject] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [hour, setHour] = useState("");

  return (
    <>
      {" "}
      <form className="row g-3" id="form">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {" "}
            No of Working days
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the number of working days"
            value={days}
            onChange={handleOnWorkingDays}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {" "}
            No of Subjects per day
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the number of subjects per day"
            value={subject}
            onChange={handleOnSubject}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Total Subjects
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the total number of subjects"
            value={totalSubject}
            onChange={handleOnTotalSubject}
          />
        </div>
        <div className="col-auto">
          <button type="submit" id="generate" className="btn btn-primary mb-3">
            Confirm identity
          </button>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
