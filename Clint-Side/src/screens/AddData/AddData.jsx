import React from "react";
import "./AddData.css";
import { useState } from "react";

export default function AddData() {

    const[Name, SetName] = useState('');
    const[ReleaseDate, SetReleaseDate] = useState('');
    const[Type, SetType] = useState('');
    const[ImageUrl, SetImageUrl] = useState('');
    const[Description, SetDescription] = useState('');

    const Submit= (e) => {
        e.preventDefault()
        axios.post('http://localhost:700/adddata', {SetName,SetReleaseDate, SetType, SetImageUrl,SetDescription, posterLink})

            .then(res => {
                console.log(res)
                navigate('/content')
            })
            .catch((err) => console.log(err))
    }

  return (
    <>
      <form onSubmit={Submit} className="data-box">
        <div className="outline">
          <div className="adddata-heading">
            <h1>Add Data</h1>
          </div>
          <div className="main-data">
            <div className="data-titals">
              <h3>Name :</h3>
              <h3>ReleaseDate :</h3>
              <h3>Type:</h3>
              <h3>ImageUrl:</h3>
              <h3>Description:</h3>
            </div>

            <div className="data-details">
              <input type="text" value="" />
              <input type="text" value="" />
              <input type="text" value="" />
              <input type="text" value="" />
              <input type="text" value="" />
            </div>
          </div>
          <div>
            <button onClick={() => alert("Data added successfully")}>
              Submit
            </button>
            <button onClick={() => alert("Data added successfully")}>
              Go Back
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
