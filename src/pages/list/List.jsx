import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useState, useEffect } from "react"
import axios from "axios"

import {userColumns} from '../../datatablesource.js'

const List = () => {

  const [data, setData] = useState([]);

  const fetchAllAdmins = async () => {
    const respose = await axios.get("http://localhost:5000/admin/allAdmins");
    setData(respose.data);
 
  }

  useEffect(() => {
    


    fetchAllAdmins()

    
  },[])

  


  const handleDelete = async (id) => {
    
    
    await axios.delete(`http://localhost:5000/admin/deleteAdmin/${id}`)
    .then((res) => {
       console.log(res)

       fetchAllAdmins()
    })
    .catch((err) => {
      console.log(err)
    })

   
  };


  console.log(data)


  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
    
      <Datatable title="Users" nextLink="/users/new" isUser={true} eventColumn={userColumns} eventRows={data} deleteHandler={handleDelete} /> 
      </div>
    </div>
  )
}

export default List