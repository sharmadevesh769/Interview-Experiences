import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SingleExperience() {
  const [exp, setExp] = useState({});
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const token = localStorage.getItem("TOKEN");

  async function getExp() {
    try {
      const {
        data: { exp },
      } = await axios.get(`http://localhost:8000/api/exp/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(exp);
      setExp(exp);
    } catch (e) {
      console.log(e);
    }
  }

  async function addExpView() {
    console.log(token);
    try {
      const data = await axios.post(
        `http://localhost:8000/api/exp/view`,
        { postId: id },
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(data);
      // setExp(exp);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getExp();
    addExpView();
  }, []);
  return Object.keys(exp).length > 0 ? (
    <div style={{ color: "#fff", padding: 40 }}>
      <h1>Company : {exp.company}</h1>
      <h2>Role: : {exp.role}</h2>
      <h3>Experience:</h3>
      <p> {exp.desc}</p>
      <div>
        Author: {exp.postedBy.fname} {exp.postedBy.lname}
      </div>
    </div>
  ) : (
    <div>Loading!!</div>
  );
}
