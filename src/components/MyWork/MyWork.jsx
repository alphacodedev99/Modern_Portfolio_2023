import React from 'react';

//data for works
import { myWorks } from '../../store/mywork';

function MyWork(props) {
	return (
		<div className='myWork' id='projects'>
			<h2 className='title'>My Works</h2>

			<div className='allWorks'>
				{myWorks.map((card, index) => {
					return (
						<div className='myWorkCard' key={index}>
							<img src={card.img} />
							<div className='active'>
								<h3>{card.title}</h3>
								<span>{card.skills}</span>
								<div className='line'></div>
								<p>{card.desc}</p>
								<a
									className='link'
									href={card.link}
									target='_blank'
									rel='noreferrer'>
									See More..
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default MyWork;
