import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="landing">
      <div className="info">
        <div className="about">
          <h1>About</h1>
        </div>

        <div className="p">
          <p className="para">
            Crave epic battles, heartwarming stories, and vibrant worlds?
            Aniverse, your anime oasis, awaits. Dive into thousands of titles,
            from classics to simulcasts, curated just for you. Explore action,
            romance, slice-of-life, and more! Beyond watching, join a passionate
            community. Discuss, create watch parties, and express your fandom
            through reviews, art, and cosplay. Start your free trial today and
            unlock a world of endless possibilities. Don't miss out, download
            Aniverse and join the anime revolution!
          </p>
          <div className="button">
            <Link to="/Login">
              <button className="Landing-btn" type="submit">Lets Go !</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
