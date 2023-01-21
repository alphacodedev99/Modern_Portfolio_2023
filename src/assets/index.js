import alphaLogo from './alphaLogo.svg';
import backgroundMain from './backgroundMain.png';
import cssImg from './css.png';
import cssHover from './cssHover.png';
import gitImg from './git.png';
import gitHover from './gitHover.png';
import htmlImg from './html.png';
import htmlHover from './htmlHover.png';
import jsImg from './js.png';
import jsHover from './jsHover.png';
import logoContent from './logoContent.png';
import reactImg from './react.png';
import reactHover from './reactHover.png';
import scssImg from './scss.png';
import scssHover from './scssHover.png';
import profilImage from './profilImage.png';

let images = {
	alphaLogo,
	backgroundMain,
	profilImage,
	logoContent,
};
let skills = {
	html: {regular: htmlImg, hover: htmlHover},
	css: {regular: cssImg, hover: cssHover},
	scss: {regular: scssImg, hover: scssHover},
	js: {regular: jsImg, hover: jsHover},
	react: {regular: reactImg, hover: reactHover},
	git: {regular: gitImg, hover:gitHover}

}

export const {html,css,scss,js,react,git} = skills;
export default images;
