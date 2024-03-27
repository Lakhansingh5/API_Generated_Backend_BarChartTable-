import { useEffect, useState } from 'react'
import './App.css'
import TableChart from './components/TableChart'
import TickPlacementBars from './components/TickPlacementBars'
import './index.css'
import axios from 'axios'
import Statistics from './components/Statistics'


function App() {
  const dataset= [
    {
        "range": "0-100",
        "count": 17
    },
    {
        "range": "101-200",
        "count": 7
    },
    {
        "range": "201-300",
        "count": 4
    },
    {
        "range": "301-400",
        "count": 3
    },
    {
        "range": "401-500",
        "count": 2
    },
    {
        "range": "501-600",
        "count": 6
    },
    {
        "range": "601-700",
        "count": 4
    },
    {
        "range": "701-800",
        "count": 4
    },
    {
        "range": "801-900",
        "count": 0
    },
    {
        "range": "901-Infinity",
        "count": 13
    }
]
  const [ tableData , setTableData ] = useState([])
  const [ statisticsData , setStatisticsData ] = useState([])
  const [ barChartData , setBarChartData ] = useState(dataset)
  const [ month , setMonth ] = useState(3);
  const [ Search , setSearch ] = useState("");
  const [ monthValue , setMonthValue ] = useState("March");
  
  useEffect(()=>{
    // console.log(" useEffect started ---");
    
    axios.get(`http://localhost:3000/products` , { params : { month , Search}})
    .then(res=>{
      const data = res.data ;
      // console.log(" line res- --", data);
      setTableData(data);
    })
    axios.get(`http://localhost:3000/statistics?month=${month}`)
    .then(res=>{
      const data = res.data ;
      // console.log(" line res- --", data);
      setStatisticsData(data);
    })
    axios.get(`http://localhost:3000/barchart?month=${month}`)
    .then(res=>{
      const data = res.data ;
      // console.log(" line res- --", data);
      setBarChartData(data);
    })
  },[month , Search])

  console.log(" bar chart data --" , barChartData)

  const handleMonthChange = (event) => {
    // console.log(" event month " , event.target.selectedOptions[0].id)
    setMonth(event.target.value);
    setMonthValue(event.target.selectedOptions[0].id)
  }
  return (
    <>
      <div className="main gap-10 h-full" >
        <div className="circle">
          <h1> Transaction Dashboard</h1>
        </div>

        <div className="search-panel mb-4 h-fit" >
          <input
            type="text"
            placeholder="Search transaction"
            className="search-bar"
            onChange={(event)=> setSearch(event.target.value)}
          />
          <select 
            className="month h-fit" 
            onChange={handleMonthChange}
            value={month}
          >
           <option disabled>Select Month</option>
          <option id="January" value="1">Jan</option>
          <option id="February" value="2">Feb</option>
          <option id="March" value="3">Mar</option>
          <option id="April" value="4">Apr</option>
          <option id="May" value="5">May</option>
          <option id="June" value="6">Jun</option>
          <option id="July" value="7">Jul</option>
          <option id="August" value="8">Aug</option>
          <option id="September" value="9">Sep</option>
          <option id="October" value="10">Oct</option>
          <option id="November" value="11">Nov</option>
          <option id="December" value="12">Dec</option>
          </select>
        </div>
        <TableChart tableData={tableData}/>
        <Statistics month={monthValue} data={statisticsData}/>
        <TickPlacementBars month={monthValue} dataset={barChartData}/>
      </div>
    </>
  )
}

export default App
