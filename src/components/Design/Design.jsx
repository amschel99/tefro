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
				<p className="design__item__paragraph">{item.description}</p>
				<p className="design__item__link"><a style={{color:"#00f2b6"}} href={item.company}>View more about the product</a></p>
			</div>
		);
	});

	return <div classNamae="design">{Elements}</div>;
}
import "./Design.scss";
export default Design;
