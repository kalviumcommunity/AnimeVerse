import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./UpdateData.css";

export default function UpdateData() {
    const {id} = useParams()
    const[Name, SetName] = useState('');
    const[ReleaseDate, SetReleaseDate] = useState('');
    const[Type, SetType] = useState('');
    const[ImageUrl, SetImageUrl] = useState('');
    const[Description, SetDescription] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
      axios.get(`http://localhost:7000/getItem/${id}`)
          .then(res => { 
              console.log(res)
              SetName(res.data.Name)
              SetReleaseDate(res.data.ReleaseDate)
              SetType(res.data.Type)
              SetImageUrl(res.data.ImageUrl)
              SetDescription(res.data.Description)
          })
      .catch(err => console.log(err))
    },[])
    const Update = (e) => {
      e.preventDefault()
      axios.put('http://localhost:7000/update/'+id , {Name,ReleaseDate, Type, ImageUrl,Description})

          .then(res => {
              console.log(res)
              navigate('/MainPage')
          })
          .catch((err) => console.log(err))
  }

   
  return (
    <>
      <form onSubmit={Update} className="data-box">
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
            <button type="submit"> Update </button>
          </div>
        </div>
      </form>
    </>
  );
}



