import React from 'react';

import { motion } from 'framer-motion';

// images
import images from '../../assets/index';

function Main() {
	return (
		<div className='mainSection'>
			<motion.div
				initial={{ x: -500, opacity: [0, 0.3, 0.5] }}
				animate={{ x: 0, opacity: 1 }}
				transition={{
					type: 'spring',
					duration: 2,
				}}
				className='mainSection-left'>
				<h2 className='title'>Tihomir Milenkovic</h2>
				<h4 className='job'>FullStack Developer</h4>
				<p>
					FullStack developer looking for ideas and projects for
					himself and others
				</p>
			</motion.div>

			<div className='mainSection-right'>
				<motion.img
					initial={{ scale: 0.9 }}
					animate={{ rotate: 360 }}
					transition={{
						duration: 2,
						// delay: 1,
					}}
					src={images.profilImage}
					alt='mainImage'
				/>
			</div>
		</div>
	);
}

export default Main;
