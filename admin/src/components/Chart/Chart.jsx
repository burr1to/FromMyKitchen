import React from "react";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({ title, aspect }) {
  const data = [
    { name: "Jan", Total: 15000 },
    { name: "Feb", Total: 2700 },
    { name: "March", Total: 8030 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 4000 },
    { name: "June", Total: 5000 },
    { name: "July", Total: 1200 },
    { name: "Aug", Total: 6200 },
    { name: "Sept", Total: 4400 },
    { name: "Oct", Total: 1900 },
    { name: "Nov", Total: 2400 },
    { name: "Dec", Total: 3200 },
  ];

  return (
    <div className='chart'>
      <div className='title'>{title}</div>
      <ResponsiveContainer width='100%' aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='100%' stopColor='lightblue' stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' stroke='gray' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' className='chartGrid' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='Total'
            stroke='lightblue'
            fillOpacity={1}
            fill='url(#total)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
