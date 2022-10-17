import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSun} from '@fortawesome/free-solid-svg-icons';

const Weather =  () => {
  const [mode, setMode] = useState(true);
  // const [cityName, setCityName] = useState("");

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log("hiii")
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e0f99c494c2ce394a18cc2fd3f100543`)
  //   .then(response => {
  //     console.log("response", response.data);
  //     setWeatherData(response.data)
  //   })
  //   .catch(err => {
  //     console.log("error",err)
  //   })

  // };
let currentMode ;

return (
  <div className="main">
    <div className="change-mode">
      <div className="mode" onClick={()=>(setMode(!mode))}>
        {(mode)?<FontAwesomeIcon icon={faSun} />:<FontAwesomeIcon icon={faEnvelope} />}
        </div>
    </div>
    <p>sjd</p>
    {/* chv<FontAwesomeIcon icon={faEnvelope} /> */}

  </div>
        )
};


ReactDOM.render(<Weather/>,document.querySelector("#root"));