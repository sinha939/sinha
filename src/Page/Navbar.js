import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from "react";
import '../CSScomponent/Navbar.css';
function Navbar() {
	return (
		<React.Fragment >

			<nav className="nav" >
				<Link class="" to="/"><img src="" /> keshav</Link>

				<ul class="nav-link">

					<li className="nav-links">
						<Link to="/Portfolio">Portfolio</Link>
					</li>
					<li className="nav-links">
						<Link to="/Service">Service</Link>
					</li>
					<li className="nav-links">
						<Link to="/About">About</Link>
					</li>
					<li className="nav-links">
						<Link to="/Contact">Contact</Link>
					</li>
					<button className="button" onClick="">Contatc US</button>
				</ul>
			</nav>



		</React.Fragment>
	)
}
export default Navbar;