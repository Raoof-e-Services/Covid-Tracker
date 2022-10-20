import React, { useEffect, useState } from 'react'

function Covid() {
    const [data,setData] = useState([]);

  const getCovidData = async() => {

    try {
        const res  = await  fetch("https://data.covid19india.org/data.json");
        const actualdata= await res.json(); 
        const a =actualdata.statewise[0];
        setData(a);
    }catch(err){

    }
   
  }
  
  
  
    useEffect(() => {
    getCovidData();
             },[])
    return (
    <div>

      <p className='card'>Confirmed :{data.confirmed}</p>
      <p className='card'>Deaths :{data.deaths}</p>
      <p className='card'>Recovered :{data.recovered}</p>
    </div>
  )
}

export default Covid
