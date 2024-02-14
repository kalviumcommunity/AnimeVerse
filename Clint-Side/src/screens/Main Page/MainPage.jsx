import React from "react";
import "./MainPage.css";
// import FlipCard from ".../Components/FlipCard";

export default function MainPage() {
  [
    {
      Count: 1,
      Name: "Fullmetal Alchemist",
      ReleaseDate: "April 5, 2009",
      Type: "Shounen, Adventure, Fantasy",
      ImageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1dx2Fp1m7fM6rXw09v9Li9_HkyDEMQrMJr466HdQCRovf3IPsv6GQg_2amx9b",
      Description:
        "Based on the manga by Hiromu Arakawa, this series follows the journey of two brothers, Edward and Alphonse Elric, as they seek the Philosopher's Stone to restore their bodies.",
    },
    {
      Count: 2,
      Name: "Death Note",
      ReleaseDate: "October 4, 2006",
      Type: "Mystery, Psychological, Supernatural",
      ImageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbbkBbZ-YAx-FMME2M8n4hrEN9Px-3Q3ommRuZTL_oWQOP6fWOSDrF5AsKHQaU",
      Description:
        'Light Yagami discovers a mysterious notebook that allows him to kill anyone by writing their name in it. He takes on the identity of "Kira" to create a utopia free of criminals.',
    },
    {
      Count: 3,
      Name: "Attack on Titan",
      ReleaseDate: "April 6, 2013",
      Type: "Action, Dark Fantasy, Post-Apocalyptic",
      ImageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQwMr-Dt2Naody8XO7dgMvSFRMbIWmphN2WFJrnNS5A1GO3eP46F-Xuy5A-WBw_",
      Description:
        "In a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures, the story unfolds as Eren Yeager seeks revenge.",
    },
  ];

  return (
    <>
    {/* <div className="flipCardDiv">
      <FlipCard />
      <FlipCard />
      <FlipCard />      
    </div> */}
      <div className="list">
        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">
              <div className="img">
                <img
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1dx2Fp1m7fM6rXw09v9Li9_HkyDEMQrMJr466HdQCRovf3IPsv6GQg_2amx9b"
                  alt=""
                />
              </div>

              <div>
                <h2>Name</h2>
                <h2>Fullmetal Alchemist</h2>
                <h2>April 5, 2009</h2>
              </div>
            </div>

            <div className="theback">
              <div className="Discription">
                <h1>Description</h1>
                <p className="Disc">
                  Based on the manga by Hiromu Arakawa, this series follows the
                  journey of two brothers, Edward and Alphonse Elric, as they
                  seek the Philosopher's Stone to restore their bodies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">
              <div className="img">
                <img
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1dx2Fp1m7fM6rXw09v9Li9_HkyDEMQrMJr466HdQCRovf3IPsv6GQg_2amx9b"
                  alt=""
                />
              </div>

              <div>
                <h2>Name</h2>
                <h2>Fullmetal Alchemist</h2>
                <h2>April 5, 2009</h2>
              </div>
            </div>

            <div className="theback">
              <div className="Discription">
                <h1>Description</h1>
                <p className="Disc">
                  Based on the manga by Hiromu Arakawa, this series follows the
                  journey of two brothers, Edward and Alphonse Elric, as they
                  seek the Philosopher's Stone to restore their bodies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">
              <div className="img">
                <img
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1dx2Fp1m7fM6rXw09v9Li9_HkyDEMQrMJr466HdQCRovf3IPsv6GQg_2amx9b"
                  alt=""
                />
              </div>

              <div>
                <h2>Name</h2>
                <h2>Fullmetal Alchemist</h2>
                <h2>April 5, 2009</h2>
              </div>
            </div>

            <div className="theback">
              <div className="Discription">
                <h1>Description</h1>
                <p className="Disc">
                  Based on the manga by Hiromu Arakawa, this series follows the
                  journey of two brothers, Edward and Alphonse Elric, as they
                  seek the Philosopher's Stone to restore their bodies.
                </p>
              </div>
            </div>
          </div> 
         </div> 


       </div>
    </>
  );
}
