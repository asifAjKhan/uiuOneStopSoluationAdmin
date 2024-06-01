import "./newBook.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const NewBook = () => {
    const [logo, setLogo] = useState("");
    const [book, setBook] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
      e.preventDefault();

      // console.log(logo)
      // console.log(book)

      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description );

      formData.append('logo', logo); // Add form data properties
      formData.append('book', book);

      
      
      await axios.post("http://localhost:5000/admin/book-upload",formData)
      .then(response => {
        console.log('Response:', response.data);
        alert("Book Added Successfully")
        navigate("/books")
        
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
      

    }

   

    return (
      <div className="newBook">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>Add New Book</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  logo
                    ? URL.createObjectURL(logo)
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
                    onChange={(e) => setLogo(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>

                <div className="formInput">
                  <label>
                    Files : 
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setBook(e.target.files[0])}
                    style={{ border: "none" }}
                  />
                </div>
  
             
                <div className="formInput" >
                    <label>Title</label>
                    <input type="text" placeholder="system alalysis and design" onChange={ e => setName(e.target.value)}   />
                </div>

                <div className="formInput" >
                    <label>description</label>
                    <input type="text" onChange={ e => setDescription(e.target.value)}/>
                </div>
              
                <button onClick={handleSubmit}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NewBook;
