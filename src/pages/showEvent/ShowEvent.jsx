import "./showEvent.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import Datatable from "../../components/datatable/Datatable"
import { useEffect, useState } from "react"
import axios from "axios"

import {eventColumn} from "../../datatablesource";

const ShowEvent= () => {

  const [data, setData] = useState([]);

  const fetchAllEvent = async () => {
    const respose = await axios.get("http://localhost:5000/admin/event");
    setData(respose.data);
 
  }

  useEffect(() => {
    


    fetchAllEvent()

    
  },[])

  


  const handleDelete = async (id) => {
    
    
    await axios.delete(`http://localhost:5000/admin/event/${id}`)
    .then((res) => {
       console.log(res)

       fetchAllEvent()
    })
    .catch((err) => {
      console.log(err)
    })

   
  };


  console.log(data)


  return (
    <div className="showEvent">
      <Sidebar/>
      <div className="showEventContainer">
        <Navbar/>

       <Datatable title="Events" nextLink="/event/newEvent" isUser={false} eventColumn={eventColumn} eventRows={data} deleteHandler={handleDelete}/>
      </div>
    </div>
  )
}

export default ShowEvent
