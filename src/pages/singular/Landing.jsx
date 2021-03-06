import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"
import "../../assets/styles/pages/singular/landing.scss";

const cardData = [
  { name: "Commands", description: "See all of the features Booster Bot has to offer your server!", link: "/commands" },
  { name: "Support", description: "FAQ page not enough to help? Head over to our support server!", link: "https://discord.gg/8kdx63YsDf" },
  { name: "Premium", description: "Click here to head to Patreon to see our premium perk selections!", link: "https://www.patreon.com/join/boosterbot?" }
];

export default function Landing(props) {
	const history = useHistory();

	useEffect(() => {
		window.scroll(0,0);
	});

	return (
		<div id="landing">
			<h1 id="landing-title">Thanks for inviting<br/><span className="text-highlight">Booster Bot</span></h1>
			<div id="landing-cards">
				{cardData.map((card, i) => (
					<div className="landing-card" key={i} onClick={() => {
						if(card.link.startsWith("/")) history.push(card.link);
						else window.location.href = card.link;
					}}>
						<h3 className="landing-card-name">{card.name}</h3>
						<p className="landing-card-text">{card.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}