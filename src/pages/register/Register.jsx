import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './register.scss'
import { Password } from "@mui/icons-material";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Register = () => {

  const [file, setFile] = useState("");

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password : "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', inputs.name);
    formData.append('email', inputs.email );

    formData.append('password', inputs.password); // Add form data properties
    formData.append('photo', file);



    try {
      const registerRes = await axios.post("http://localhost:5000/admin/signup", formData);
      console.log(registerRes.data)
      navigate("/login");
    } catch (err) {
      setError(err);

     console.log(err)
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
     <img src={
      file ?
       URL.createObjectURL(file) 
       :`https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/United_International_University_Monogram.svg/1024px-United_International_University_Monogram.svg.png`} alt="avatar" className="uiuLogo" />
        <input
          required
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />

        {/* <input
          type="file"
          placeholder="photo"
          name="photo"
          onChange={handlePhoto}
        /> */}

                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />

        <button onClick={handleSubmit}>Register</button>
         {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;