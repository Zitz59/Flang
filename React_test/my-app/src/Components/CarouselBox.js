import React, { Component } from 'react';
import  Carousel  from 'react-bootstrap/Carousel';
import playerImg from '../assets/player.jpeg';
import studioImg from '../assets/studio.jpeg';


export default class CarouselBox extends Component {
	render() {
		return (
			<Carousel>
				<Carousel.item>
					<img
						className="d-block w-100"
						src={playerImg}
						alt="player"


					/>
					<Carousel.Caption>
						<h3>Your feels</h3>
						<p>Sometimes it's easy to be aware of your emotions.
							Maybe there's one feeling that's strong and obvious to you.</p>
					</Carousel.Caption>
				</Carousel.item>
				<Carousel.item>
					<img
						className="d-block w-100"
						src={studioImg}
						alt="player"


					/>
					<Carousel.Caption>
						<h3>Your feels</h3>
						<p>Sometimes it's easy to be aware of your emotions.
							Maybe there's one feeling that's strong and obvious to you.</p>
					</Carousel.Caption>
				</Carousel.item>
				<Carousel.item>
					<img
						className="d-block w-100"
						src={playerImg}
						alt="player"


					/>
					<Carousel.Caption>
						<h3>Your feels</h3>
						<p>Sometimes it's easy to be aware of your emotions.
							Maybe there's one feeling that's strong and obvious to you.</p>
					</Carousel.Caption>
				</Carousel.item>
			</Carousel>


		)
	}


}