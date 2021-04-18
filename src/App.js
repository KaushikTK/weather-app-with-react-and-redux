import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {setTempAndRegion} from './store/data/data';

function App() {
  
  // get the data 
  let data = useSelector(state=>state.data);
  const dispatch = useDispatch();

  const [typedRegion,settypedRegion] = useState(data.region);


  const search_for_temp = async (region)=>{
    // enter your url here
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${region}&appid=d6a669e5a79c69421xxxxxxxxxxxxxxx&units=metric`
    let response = await fetch(url);
    if(response.ok)
    {
        response = await response.json();
        return response;
    }
    else{
        return 'No data available';
    }
} 


  const clicked = async ()=>{
    const res = await search_for_temp(typedRegion);
    if(res === 'No data available')
    {
      alert('No data available');
      return;
    }
    let paramObj = {
      region:res.name,
      current: res.main.temp,
      max: res.main.temp_max,
      min: res.main.temp_min,
      feels_like: res.main.feels_like
    };

    dispatch(setTempAndRegion(paramObj));
  }

  return (
    <>
      <div className='container'>
        <div className='row vh-100'>
          <div className='col-sm-6 mx-auto my-auto'>
          <div className='card'>
            <div className='card-body'>
              <input className='form-control' type='text' style={{textTransform:'capitalize'}} value={typedRegion} onChange={(e)=>settypedRegion(e.target.value)}></input>
              <br/>
              <center>
              <p className='display-4' style={{lineHeight:'0.75'}}>{`${data.current} Cel`}</p>
              <p className='display-4' style={{fontSize:'1rem'}}> {`Feels like ${data.feels_like}`}</p>
              <br/>
              <p className='display-4' style={{fontSize:'2rem'}}>{`Min: ${data.min} || Max: ${data.max}`}</p>
              </center>
              <center>
              <button className='btn btn-primary col-sm-8' onClick={(e)=>{clicked()}}>Get data</button>
              </center>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
