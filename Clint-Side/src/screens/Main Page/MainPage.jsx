import React from "react";
import "./MainPage.css";
// import FlipCard from ".../Components/FlipCard";

export default function MainPage() {
  const data =  [
    {
      Count: 1,
      Name: "Fullmetal Alchemist",
      ReleaseDate: "April 5, 2009",
      Type: "Shounen, Adventure, Fantasy",
      ImageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1dx2Fp1m7fM6rXw09v9Li9_HkyDEMQrMJr466HdQCRovf3IPsv6GQg_2amx9b",
      Description:
        "Based on the manga by Hiromu Arakawa, this series follows the journey of two brothers, Edward and Alphonse Elric, as they seek the Philosopher's Stone to restore their bodies.",
    }
  ]

  return (
    <>
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
