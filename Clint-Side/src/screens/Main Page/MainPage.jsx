
import React from "react";
import "./MainPage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import data from "../../Data.json";
// import FlipCard from "../../Components/Flip Card/FlipCard";

export default function MainPage() {
  
  const [data, setdata] = useState([]);
  // const [userData, setUserData] = useState({})



  function getCookieNames() {
    const cookieArray = document.cookie.split('; ');
    const cookieNames = cookieArray.map((cookie) => cookie.split('=')[0]);
    return cookieNames;
  }

  const cookieNames = getCookieNames();
  console.log(cookieNames); 

  const clearCookie = (name) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 2000 00:00:01 GMT;path=/;`;
  };

  const handleLogOut = () => {
   
    clearCookie(cookieNames[0]);
    console.log("Updated Cookies:", document.cookie);
  };

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
    axios.delete(`http://localhost:7000/delete/${id}`)
      .then(res => {
        console.log(res)
        window.location.reload();
      })
      .catch(err => console.log(err))
  }

  
  return (
    <>
        <nav>
      {/* {userData.name && <p className="name">Name: {userData.name}</p>}
          {userData.email && <p  className="name">Email: {userData.email}</p>}
          {userData.username && <p className="name">Username: {userData.username}</p>} */}
          {cookieNames[0] && <h3 className="name">Hey {cookieNames[0]} !</h3>}
      </nav>
      <Link to='/login'>
        <button onClick={handleLogOut}>Log Out</button>
        </Link>
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
