import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";

function Signin() {
  const [id, setId] = useState(""); // Admission or Employee ID
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}api/auth/signin`,
        {
          admissionId: id, // or employeeId based on type
          password,
        }
      );
      login(res.data);
      if (res.data.isAdmin) {
        history.push("/dashboard@admin");
      } else {
        history.push("/dashboard@member");
      }
    } catch (err) {
      alert("Login failed: " + err.response?.data);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Admission/Employee ID"
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
}

export default Signin;
