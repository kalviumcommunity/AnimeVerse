import React, { useState, useEffect } from "react";
import "./MainPage.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MainPage() {
  
  const [data, setData] = useState([]);
  const [filteredUser, setFilteredUser] = useState('all');

  const handleChange = (e) => {
    setFilteredUser(e.target.value);
  }

  const filteredUsers = data.filter((user) => {
    if (filteredUser === 'all') {
      return user;
    } else {
      return user.created_by === filteredUser;
    }
  });

  function getCookieNames() {
    const cookieArray = document.cookie.split('; ');
    const cookieNames = cookieArray.map((cookie) => cookie.split('=')[0]);
    return cookieNames;
  }

  const cookieNames = getCookieNames();

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
        setData(response.data);
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
        {cookieNames[0] && <h3 className="name">Hey {cookieNames[0]} !</h3>}
      </nav>
      <Link to='/login'>
        <button onClick={handleLogOut}>Log Out</button>
      </Link>
      <select name="created" onChange={handleChange} className='filter'>
        <option value="all">All</option>
        <option value="ishita">Ishita</option>
        <option value="manya">Manya</option>
        <option value="hanshul">Hanshul</option>
      </select>
      <div className="flipCardDiv"></div>
      <div className="list">
        {filteredUsers.map((data, index) => (
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
                  {data.created_by &&  <h4>Created By - {data.created_by}</h4>}
                </div>
                <div className="buttons">
                  <Link to={`/update/${data._id}`}>
                    <button className='EditButton'>Edit</button>
                  </Link>
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
