import React from 'react';

// import imgs
import images from '../../assets';

function AboutMe() {
	return (
		<div className='aboutme'>
			<div className='aboutme-container'>
				<img src={images.logoContent} alt='' />
				<p>
					A few years ago, I became interested in developing websites
					and interfaces. Since then, I have been steadily improving
					my skills. Now I am developing websites and web applications
					to order or for myself.
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
