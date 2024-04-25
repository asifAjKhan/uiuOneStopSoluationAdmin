import "./newBook.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewBook = ({ inputs }) => {
    const [file, setFile] = useState("");

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

                <div className="formInput">
                  <label>
                    Files : 
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ border: "none" }}
                  />
                </div>
  
             
                <div className="formInput" >
                    <label>Title</label>
                    <input type="text" placeholder="system alalysis and design"  />
                </div>

                <div className="formInput" >
                    <label>description</label>
                    <input type="text"  />
                </div>
              
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NewBook;
