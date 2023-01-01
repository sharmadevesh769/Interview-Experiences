import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";
function MyExp() {
  const token = localStorage.getItem("TOKEN");
  const [addexp, setaddExp] = useState({
    company: "",
    desc: "",
    batch: "",
    role: "",
  });
  const [myexp, setMyExp] = useState([]);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setaddExp({
      ...addexp,
      [name]: value,
    });
  };
  const addExp = async (e) => {
    const ex = await axios.post("http://localhost:8000/api/exp", addexp, {
      headers: { Authorization: "Bearer " + token },
    });
    e.preventDefault();
    setaddExp({
      company: "",
      desc: "",
      batch: "",
      role: "",
    });
    mydata();
  };
  const mydata = async () => {
    const {
      data: { res },
    } = await axios.get("http://localhost:8000/api/exp/myexp", {
      headers: { Authorization: "Bearer " + token },
    });
    res.reverse();
    setMyExp(res);
    console.log(myexp);
  };
  const delExp = async (id) => {
    const d = await axios.delete(`http://localhost:8000/api/exp/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    console.log(id);
    mydata();
  };
  const updExp = async (id) => {
    const d = myexp.find((ii) => {
      return ii._id === id;
    });
    setaddExp(d);
    delExp(id);
    console.log(addexp);
    const da = await axios.put(`http://localhost:8000/api/exp/${id}`, addexp, {
      headers: { Authorization: "Bearer " + token },
    });
    // console.log(id)
    mydata();
  };

  useEffect(() => {
    mydata();
  }, []);

  return (
    <div className="MyExp">
      <div className="AddExp">
        <input
          type="text"
          name="company"
          value={addexp.company}
          onChange={(e) => handlechange(e)}
          placeholder="Company Name"
        />
        <input
          type="text"
          name="batch"
          value={addexp.batch}
          onChange={(e) => handlechange(e)}
          placeholder="Grad Year"
        />
        <input
          type="text"
          name="role"
          value={addexp.role}
          onChange={(e) => handlechange(e)}
          placeholder="Role"
        />
        <textarea
          rows="10"
          cols="50"
          type="textArea"
          name="desc"
          value={addexp.desc}
          onChange={(e) => handlechange(e)}
          placeholder="Interview Experience"
        />
        <button type="submit" onClick={addExp}>
          Add Exp
        </button>
      </div>

      <div class="courses-container">
        {myexp.map((my) => (
          <div class="course">
            <div class="course-preview" style={{ position: "relative" }}>
              <h2>{my.company}</h2>
              <h6>Batch: {my.batch}</h6>
              <div className="btn-container">
                <button class="btn" onClick={() => updExp(my._id)}>
                  Edit
                </button>
                <button class="btn" onClick={() => delExp(my._id)}>
                  Delete
                </button>
              </div>
            </div>
            <div class="course-info">
              <h6>Role:{my.role}</h6>
              <p>{my.desc} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyExp;
