import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {

  const navigate = useNavigate();
  const [file, setFile] = useState("");

  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    password : "",
  });

  const [err, setError] = useState(null);

  const handleChange = (e) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', formInputs.name);
    formData.append('email', formInputs.email );

    formData.append('password', formInputs.password); // Add form data properties
    formData.append('photo', file);



    try {
      const registerRes = await axios.post("http://localhost:5000/admin/signup", formData);
      console.log(registerRes.data)
      navigate("/users");
    } catch (err) {
      setError(err);

     console.log(err)
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={handleChange} name={input.name} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button onClick={handleSubmit}>Send</button>
              {err && <p>{err}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
