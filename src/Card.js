import Person from "./Person";
import React from "react";
import './Card.css'



function Card(props) {
    return (
        // <div className="Card">

        //     <div className="Card-image" >
        //         <img src={props.image} />
        //     </div>
        //     <div className="Card-content">

        //     <h1 className="name-h1" > </h1>
        //     <article > {props.role}</article >
        //     <article > {props.email}</article >
        //     <article > {props.facebook}</article >
        //     <article > {props.instagram}</article >

        //     </div>
        <div class="card-deck">
            <div class="card">
                <img class="card-img-top" src={props.image} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">{props.email}</p>
                        <p class="card-text"><small class="text-muted">{props.role}</small></p>
                    </div>

            </div>
            </div>
            )

}


            {/* <div className="card_box">
                <img src="public/logo192.png" />
                <h1>keshav sinha</h1>
                <p>Web Developer and Designer</p>
                <p>sinhak939@gmail.com</p>

            </div>
            <div className="card_box">
                <h1>keshav sinha</h1>
                <p>Web Developer and Designer</p>
                <p>sinhak939@gmail.com</p>

            </div> */}




            export default Card;