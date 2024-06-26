import React from "react";
import "./Design.scss";

//Data Import
import {designData} from "../../data";

function Design(props) {
	const Elements = designData.map((item) => {
		return (
			<div className="design__item">
				<img src={item.img} alt="" className="design__item__image" />
				<h2 className="design__item__heading">{item.heading}</h2>
				<h2 style={{fontSize:"14px"}} className="design__item__heading">{item.description}</h2>
				<img src={item.img} alt="" className="design__item__mini" />
				<a style={{fontSize:"14px", color:"#00f2b6"}} href={item.company}>Learn more</a>
			</div>
		);
	});

	return <div className="design">{Elements}</div>;
}
import "./Design.scss";
export default Design;