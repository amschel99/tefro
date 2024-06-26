import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route,matchPath,useLocation } from "react-router-dom";
import { useState } from "react";

//Pages
import HomePage from "./Pages/HomePage/HomePage";
import Portfolio from "./Pages/Portfolio/Portfolio";
import TermsAndService from "./Pages/TermsAndService/TermsAndService";
import Footer from "./components/Footer/Footer";
import Success from "./Pages/Success/Success";
import { Router } from "react-router-dom/cjs/react-router-dom";

function App() {

	const [loading, setLoading] = useState(true);
	const spinner = document.getElementById("loader");
	if (spinner) {
		setTimeout(() => {
			spinner.style.display = "none";
            setLoading(false)
		}, 700);
	}
	return (
		!loading && (
			<>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact end path="/">
							<HomePage />
						</Route>
						<Route exact path="/portfolio">
							<Portfolio />
						</Route>
						<Route exact path="/success">
							<Success />
						</Route>
						<Route exact path="/tos">
							<TermsAndService />
						</Route>
					</Switch>
					
					<Footer />
					<Switch>
						
					</Switch>
				</div>
			</>
		)
	);
}

export default App;
