import myWorkOne from '../assets/myWorkOne.png';
import {
	AiFillGithub,
	AiOutlineMail,
	AiFillInstagram,
} from 'react-icons/ai';
import { RxDiscordLogo } from 'react-icons/rx';

// TODO: potrebno je dodati prave slike mockup sa projekata! + Dodati LINK-ove ka tim stranicama

let myWorks = [
	{
		title: 'React Space App',
		skills: ['HTML ', 'SCSS ', 'JS'],
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' +
			' do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		btn: 'See more',
		img: myWorkOne,
		link: 'https://alphamodernportfolio.vercel.app',
	},
	{
		title: 'React NikeShop App',
		skills: ['HTML ', 'SCSS ', 'ReactJS ', 'ReduxToolkit'],
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' +
			' do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		btn: 'See more',
		img: myWorkOne,
	},
	{
		title: 'React Restouran App',
		skills: ['HTML ', 'SCSS ', 'JS ', 'RouterV6'],
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' +
			' do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		btn: 'See more',
		img: myWorkOne,
	},
	{
		title: 'React Restouran App',
		skills: ['HTML ', 'SCSS ', 'JS ', 'RouterV6'],
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' +
			' do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		btn: 'See more',
		img: myWorkOne,
	},
];

let contact = [
	{
		id: 1,
		text: 'AlphaTica',
		icon: <AiFillGithub />,
		link: 'https://github.com/AlphaForza',
	},
	{
		id: 2,
		text: 'tihomir.milenkovic@hotmail.com',
		icon: <AiOutlineMail />,
	},
	{
		id: 3,
		text: 'alpha_code_',
		icon: <AiFillInstagram />,
		link: 'https://www.instagram.com/alpha_code_/',
	},
	{
		id: 4,
		text: 'Alpha Community Discord',
		icon: <RxDiscordLogo />,
		link: 'https://discord.gg/y64RSNdfux',
	},
];

export { myWorks, contact };
