import React from "react";
import '../CSScomponent/Home.css';
import Team from "../Team";
import LogIn from "../LogIn";

function Home() {
    return (
        <div className="home-box">

            <div className="text-box">
                <h1>Hii im Keshav Sinha</h1>
                <h1>A web Developer and Designer</h1>
                <aerticle>Hii Keshav here what i do for you? im a MERN Stack Developer, i can develop a website end-to-end user  </aerticle>
                <input type="button" onClick="" value="HIRE ME" />
                <input type="button" onClick="" value="VIEW PORTFOLIO" />
                <a href="facebook.com" >FACEBOOK</a>
                <a href="twitter.com" >TWITTER</a>
                <a href="linkedin.com" >LINKEDIN</a>
            </div>

            <img src="keshav.jpg" />
<div className="team-container" >

           
</div>
        </div>
    )
}
export default Home;