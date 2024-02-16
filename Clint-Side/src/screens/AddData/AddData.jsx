import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./AddData.css";

export default function AddData() {

    const[Name, SetName] = useState('');
    const[ReleaseDate, SetReleaseDate] = useState('');
    const[Type, SetType] = useState('');
    const[ImageUrl, SetImageUrl] = useState('');
    const[Description, SetDescription] = useState('');

    const navigate = useNavigate();
    const Submit= (e) => {
        e.preventDefault()
        axios.post('http://localhost:7000/add', {Name,ReleaseDate, Type, ImageUrl,Description})

            .then(res => {
                console.log(res)
                navigate('/MainPage')
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
            <input type='text' id="" value={Name} onChange={(e) => SetName(e.target.value)} />
            <input type='text' id="" value={ReleaseDate} onChange={(e) => SetReleaseDate(e.target.value)} />
            <input type='text' id="" value={Type} onChange={(e) => SetType(e.target.value)} />
            <input type='text' id="" value={ImageUrl} onChange={(e) => SetImageUrl(e.target.value)} />
            <input type='text' id="" value={Description} onChange={(e) => SetDescription(e.target.value)} />
            </div>
          </div>
          <div>
            <button type="submit"> Submit </button>
          </div>
        </div>
      </form>
    </>
  );
}
