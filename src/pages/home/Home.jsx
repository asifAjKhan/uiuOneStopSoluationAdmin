import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {

  console.log(process.env.REACT_APP_SERVER_PORT)
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="books" />
          <Widget type="property" />
          <Widget type="questions" />
        </div>
        <div className="charts">
          {/* <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Books</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
