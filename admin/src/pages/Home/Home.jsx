import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import Table from "./../../components/Table/Table.jsx";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let fetch = async () => {
      setLoading(true);
      const recipe = await axios.get("http://localhost:8800/api/recipes/");
      setData(recipe.data);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        {loading ? (
          "Loading.."
        ) : (
          <>
            <div className='widgets'>
              <Widget type='user' />
              <Widget type='recipes' recipe={data} />
              <Widget type='earning' />
              <Widget type='balance' />
            </div>
            <div className='charts'>
              <Featured />
              <Chart title='Number of recipes by month' aspect={2 / 1} />
            </div>
            <div className='listContainer'>
              <div className='listTitle'>Latest Transactions</div>
              <Table recipe={data} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
