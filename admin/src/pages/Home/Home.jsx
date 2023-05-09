import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import Table from "./../../components/Table/Table.jsx";

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className='charts'>
          <Featured />
          <Chart title='Revenue for the last 6 months' aspect={2 / 1} />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;
