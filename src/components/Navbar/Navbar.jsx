import React, { useState } from 'react';

import { motion } from 'framer-motion';

// import icons
import {
	AiOutlineMenuFold,
	AiOutlineMenuUnfold,
} from 'react-icons/ai';
// all images
import images from '../../assets/index.js';

function Navbar() {
	// for active menu on tablet/desktop
	const [active, setActive] = useState(0);
	// for toggle menu btn on mobile
	const [toggle, setToggle] = useState(false);

	return (
		// TODO: Animacija da se proveri, mozda je bolje da se stavi bas na elemente!
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 1.2,
				delay: 0.5,
				ease: [0, 0.71, 0.2, 1.01],
			}}
			className='navbar'>
			<a href='/'>
				<img src={images.alphaLogo} alt='alphaLogo' />
			</a>

			<div className='navbar-items'>
				<ul>
					{['About Me', 'Skills', 'Projects', 'Contact'].map(
						(item, index) => (
							<li key={index}>
								{/* here is removed white-space between letters and transform to lowerCase */}
								<a
									onClick={() => setActive(index)}
									className={active === index ? 'active' : 'disabled'}
									href={`#${item.replace(/\s/g, '').toLowerCase()}`}>
									{item}
								</a>
							</li>
						)
					)}
				</ul>
			</div>
			<div className='menuBtn'>
				<AiOutlineMenuFold onClick={() => setToggle(!toggle)} />

				{toggle ? (
					<div className='menuBtn-toggle'>
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								// ease: 'easeInOut',
								duration: 0.3,
								ease: [0, 0.71, 0.2, 1.01],

								scale: {
									type: 'keyframes',
									damping: 5,
									stiffness: 100,
									restDelta: 0.001,
								},
							}}
							className='menuItems'>
							<div className='closeBtn'>
								<AiOutlineMenuUnfold
									onClick={() => setToggle(!toggle)}
								/>
							</div>
							<ul>
								{['About Me', 'Skills', 'Projects', 'Contact'].map(
									(item, index) => (
										<li key={index}>
											{/* here is removed white-space between letters and transform to lowerCase */}
											<a
												onClick={() => {
													setActive(index);
													setToggle(!toggle);
												}}
												className={
													active === index ? 'active' : 'disabled'
												}
												href={`#${item
													.replace(/\s/g, '')
													.toLowerCase()}`}>
												{item}
											</a>
										</li>
									)
								)}
							</ul>
						</motion.div>
					</div>
				) : null}
			</div>
		</motion.div>
	);
}

export default Navbar;
