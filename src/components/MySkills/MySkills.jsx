import React from 'react';
// images
import {html,css,scss,js,react,git} from '../../assets/index'

function MySkills() {
	let allSkills =[
		{
			skill: 'Html5',
			src: html,
		},
		{
			skill: 'Css3',
			src: css,
		},
		{
			skill: 'scss',
			src: scss,
		},
		{
			skill: 'JavaScript',
			src: js,
		},
		{
			skill: 'ReactJS',
			src:react,
		},
		{
			skill: 'github',
			src: git,

		},
	]

	return (
		<div className='skills' id='skills'>
			<h2 className='title'>My Skills</h2>
			<div className='cards'>
				{allSkills.map((item, index) => {
					return (
						<div className='skill-card' key={index}>
							<img
								src={item.src.regular}
								alt={item.skill}
								onMouseOver={(e) => {
									e.target.src = item.src.hover;
								}}
								onMouseOut={(e)=>{
									e.target.src = item.src.regular;
								}}
							/>
							<p>{item.skill}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default MySkills;
