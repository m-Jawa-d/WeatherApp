import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
function Temp() {
  const [val, Upval] = useState("ChowkAzam");
  const [tem, upTemp] = useState('');
  // useEffect();
  const thisVal = (obj) => {
    Upval(obj.target.value)
  }

  useEffect(() => {
    const Ftapi = async () => {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=3a5aaa16e9eb6e5874e01ea52d0b5e15`)
      const resjson = await response.json();
      console.log(resjson.main)
      upTemp(resjson.name)
      upTemp(resjson.main)
    }

    Ftapi();

  }, [val]
  )

  return (
    <>
      <div className=" container">
        <div className="row ">
          <div className="col-lg-10 col-10 mx-auto text-center ">
            <div className="d-flex  justify-content-center align-items-center cen">
              <div class="card round" style={{ width: "20rem" }}>
                <input placeholder="Enter City/Country Name" type="search" onChange={thisVal} className="mx-2 text-capitalize font-weight-bold mt-2 p-2 rounded-pill inpo" />
                {/* {!tem ? (<p>error</p>) : */}
                {!tem ? <div class="card-body">
                  <i class="fas fa-3x clr textshadow fa-cloud-sun"></i>
                  <h1 className="card-title text-capitalize textshadow1 text-secondary font-weight-bold pt-2 pb-5"> {val}</h1>
                  <div className=" overflow-hidden"><h1 className="mt-5 overflow-hidden  text-white textshadow font-weight-bold">NotFound</h1>
                    <h5>Feels Alive</h5>
                    <p class="card-text mt-4 textshadow text-white">Min ?°C | max ?°C</p>
                  </div>
                  <div class="ocean">
                    <div class="wave"></div>
                    <div class="wave"></div>
                  </div>
                </div> :
                  <div class="card-body">
                    <i class="fas fa-3x clr textshadow fa-cloud-sun"></i>
                    <h1 className="card-title text-capitalize textshadow1 text-secondary font-weight-bold pt-2 pb-5"> {val}</h1>
                    <div className=" overflow-hidden"><h1 className="mt-5 overflow-hidden  text-white textshadow font-weight-bold">{tem.temp}°C</h1>
                      <h5>Feels like {tem.feels_like}°C </h5>
                      <p class="card-text mt-4 textshadow text-white">Min {tem.temp_min}°C | Max {tem.temp_max}°C</p>
                    </div>
                    <div class="ocean">
                      <div class="wave"></div>
                      <div class="wave"></div>
                    </div>
                  </div>
                }
                {/* } */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Temp;
//3a5aaa16e9eb6e5874e01ea52d0b5e15

// api.openweathermap.org/data/2.5/weather?q=Murree&appid=3a5aaa16e9eb6e5874e01ea52d0b5e15