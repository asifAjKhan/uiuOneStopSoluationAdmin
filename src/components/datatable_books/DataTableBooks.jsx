import "./datatableBooks.scss";
import { DataGrid } from "@mui/x-data-grid";
import { bookColumn, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DataTableBooks = () => {

  const [data, setData] = useState([]);


  const fatchAllBook = async () => {
    try{
      const response =  await axios.get("http://localhost:5000/admin/book")
      console.log("Hellow")
      console.log(response.data)
      if(response.data)
      setData(response.data)

    }catch(err){
      console.log(err)
    }
      

  }


 useEffect(() => {
   fatchAllBook();

 }, [])


  const handleDelete = async (id) => {

      try{
        const response = await axios.delete(`http://localhost:5000/admin/book/${id}`)
        fatchAllBook();
      }catch(err){
        console.log(err)
      }
  }


  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">

     {/* Add new Book */}
      <div className="datatableTitle">
        Add New Book
        <Link to="/books/newBook" className="link">
          Add New
        </Link>
      </div>


      <DataGrid
        className="datagrid"
        rows={data}
        columns={bookColumn.concat(actionColumn)}
        getRowId={(row) => row._id}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTableBooks;
