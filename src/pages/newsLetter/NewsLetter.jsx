import "./newsLetter.scss"

// BlogPostEditor.js
import React, { useState } from 'react';
import JoditEditor from 'jodit-react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Co2Sharp } from "@mui/icons-material";
import axios from "axios";
import {  useNavigate} from "react-router-dom";


const NewsLetter = () => {
  const [content, setContent] = useState('');
  const [subject, setSubject] = useState("");
  const [catagory, setCatagory] = useState("all-type");

  const [selectedFiles, setSelectedFiles] = useState([]);

  const navigate = useNavigate()


  const config = {
    readonly: false // Set to true if you want the editor to be read-only
  };





  
  //after selecting the files

  const onFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };


  

  const handleSubmit = (e) => {
    e.preventDefault();


    const formData = new FormData();

    formData.append('subject', subject); // Add form data properties
    formData.append('content', content);
    formData.append('category', catagory);
        
        // Append each selected file to the formData object
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files', selectedFiles[i]);
        }

        // Append text data to the formData object
       // formData.append('textData', textData);





   
    axios.post("http://localhost:5000/admin/newsletter", formData)
    .then(response => {
      console.log('Response:', response.data);
      alert("Email send Successfully")
      navigate("/")
      
      
    })
    .catch(error => {
      console.error('Error:', error);
    });







     
  };


  
    //test consoles

    console.log("reRender")

  return (
    <div className="newsContainer">
      <Sidebar />

      <div className="newsWrapper">
        <Navbar />
        <h2 className="title">Send NewsLetter </h2>
        <div className="newForm">
         
          <form onSubmit={handleSubmit}>

            <h3 className="inputTitle">Catagory</h3>
            <select className="newsInput" onChange={(e) => setCatagory(e.target.value)}>
              <option value="all-type">All</option>
              <option value="essential-type">Essential</option>
              <option value="app-forum">App Forum</option>
              <option value="finance-forum">Finance Forum</option>
              <option value="debate-club">Debate Club</option>
              <option value="business-club">Business Club</option>
            </select>


            <h3  className="inputTitle">Subject</h3>
            <input type="text"  className="newsInput" onBlur={(e) => setSubject(e.target.value)} />
           
            <h3  className="inputTitle">Email body</h3>
            <JoditEditor
                  
                  value={content}
                  config={config}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={newContent => setContent((prev) => newContent)} // preferred to use only this option to update the content for performance reasons
                  //onChange={newContent => {setContent((prev) => newContent)}}
                  className="editor"
            />

            <label htmlFor="files">Select files:</label>
            <input type="file" id="files" name="files" multiple  onChange={onFileChange}/>


            <button type="submit" className="submitButton" onClick={ handleSubmit}>Submit</button>
          </form>

          

        </div>

      </div>
      
    </div>
  );
};

export default NewsLetter;