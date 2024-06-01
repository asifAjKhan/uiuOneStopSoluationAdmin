import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Datatable = ({title, nextLink, isUser, eventColumn, eventRows, deleteHandler}) => {

 

 

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
           { isUser && <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>}
            <div
              className="deleteButton"
              onClick={() => deleteHandler(params.row._id)}
              
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
      <div className="datatableTitle">
        Add New {title}
        <Link to={nextLink} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={eventRows}
        getRowId={(row) => row._id}
        columns={eventColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
