import React from 'react';

import logo from '../../assets/alphaLogo.svg';

// Contact content
import { contact } from '../../store/mywork.js';

function Contact() {
	return (
		<div className='contact'>
			<div className='container'>
				<div className='logo'>
					<img src={logo} alt='logo' />
					<p>
						If you liked my work and you need me, I'm ready to talk to
						you.
					</p>
				</div>
				<div className='contactSide'>
					<h3>Contact</h3>
					<div className='contactSideContent'>
						{contact.map((item) => {
							return (
								<div className='card' key={item.id}>
									{item.icon}
									<a
										href={item.link}
										className={item.link ? '' : 'disabled'}
										target='_blank'
										rel='noreferrer'>
										{item.text}
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
