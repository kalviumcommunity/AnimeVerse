
import React from "react";
import "./MainPage.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import data from "../../Data.json";
// import FlipCard from "../../Components/Flip Card/FlipCard";

export default function MainPage() {
  
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:700/data")
      .then((response) => {
        setdata(response.data);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="flipCardDiv">{/* <FlipCard /> */}</div>
      <div className="list">
        {data.map((data, index) => (
          <div className="maincontainer" key={index}>
            <div className="thecard">
              <div className="thefront">
                <div className="img">
                  <img src={data.ImageUrl} alt="" />
                </div>

                <div>
                  <h2>{data.Name}</h2>
                  <h2>{data.Type}</h2>
                  <h2>{data.ReleaseDate}</h2>
                </div>
              </div>

              <div className="theback">
                <div className="Discription">
                  <h1>Description</h1>
                  <p className="Disc">{data.Description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}