
import React from "react";
import "./MainPage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import data from "../../Data.json";
// import FlipCard from "../../Components/Flip Card/FlipCard";

export default function MainPage() {
  
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/data")
      .then((response) => {
        setdata(response.data);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:7000/delete' + id)
      .then(res => {
        console.log(res)
        window.location.reload();
      })
      .catch(err => console.log(err))
  }

  
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
                <div className="buttons">
                  <Link to={`/update/${data._id}`}> <button className='EditButton'>Edit</button></Link>
                  <button onClick={(e) => handleDelete(data._id)} className='DeleteButton'>Delete</button>
                </div>
              </div>
            </div>
 
          </div>
        ))}
      </div>
    </>
  );
}
