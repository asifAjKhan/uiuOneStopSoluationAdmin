import "./Book.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import DataTableBooks from "../../components/datatable_books/DataTableBooks"

const Book= () => {
  return (
    <div className="book">
      <Sidebar/>
      <div className="bookContainer">
        <Navbar/>


        <DataTableBooks />
        {/* <Datatable/> */}
      </div>
    </div>
  )
}

export default Book