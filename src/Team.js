import React from "react"
import Card from "./Card";
import Person from "./Person";
import "./Team.css";

function creatCard(Person) {
    return(
      <div className="team-box">
        <img className="img-box"
        src={Person.imgUrl}/>
      <Card 
      name={Person.name}
      role={Person.role}
      email={Person.email}
      facebook={Person.facebook}
      instagram={Person.instagram}
      
      />
      </div>
    )
  }

  function Team() {
    return (
      <div className="team">
        <h1>mee our young teem</h1>
        <article>meet our young creative team who make your website great and provide you best user-experience, my can design your website develop your website and optimize your website</article>
        {Person.map(creatCard)}
      </div>
    );
  }



export default Team;