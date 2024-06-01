import "./event.scss"

// BlogPostEditor.js
import React, { useState } from 'react';
import JoditEditor from 'jodit-react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Co2Sharp } from "@mui/icons-material";
import axios from "axios";
import {  useNavigate} from "react-router-dom";



const Event = () => {

  const navigate = useNavigate()

  const [description, setDescription] = useState('');
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  

  const [logo, setLogo] = useState("");
  
 
 


  const config = {
    readonly: false // Set to true if you want the editor to be read-only
  };





  


  

  const handleSubmit = async (e) => {
    e.preventDefault();

  

    // console.log(date)
    // console.log(description)
    // console.log(name)
    // console.log(selectedFile)


    const formData = new FormData();

    formData.append('name', name); // Add form data properties
    formData.append('description', description);
    formData.append('date', date);
        
        
    formData.append('logo', logo);
      

        // Append text data to the formData object
       // formData.append('textData', textData);





   
    await axios.post("http://localhost:5000/admin/event", formData)
    .then(response => {
      console.log('Response:', response);
      alert("Event send Successfully")
      navigate("/event")
      
      
    })
    .catch(error => {
      console.error('Error:', error);
    });







     
  };


  
    //test consoles

   

  return (
    <div className="eventContainer">
      <Sidebar />

      <div className="eventWrapper">
        <Navbar />
        <h2 className="title">Create New Event Or News </h2>
        <div className="newForm">
         
          <form >

            <h3 className="inputTitle">Event Title</h3>
            <input type="text" className="newsInput"   onBlur={(e) => setName(e.target.value)} />

            <h3  className="inputTitle">Date of the Event</h3>
            <input type="date" value={date}  className="newsInput" onChange={(e) => setDate(e.target.value)} />
           
            <h3  className="inputTitle">Description </h3>
            <JoditEditor
                  
                  value={description}
                  config={config}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={newContent => setDescription((prev) => newContent)} // preferred to use only this option to update the content for performance reasons
                  //onChange={newContent => {setContent((prev) => newContent)}}
                  className="editor"
            />

            <label htmlFor="files">Select files:</label>
            <input type="file" id="files" name="file"   onChange={(e) => setLogo(e.target.files[0])}/>


            <button type="submit" className="submitButton" onClick={handleSubmit}>Submit</button>
          </form>

          

        </div>

      </div>
      
    </div>
  );
};

export default Event;