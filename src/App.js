// Components here
import AboutMe from './components/AboutMe/AboutMe';
import Main from './components/Main/Main';
import MySkills from './components/MySkills/MySkills';
import Navbar from './components/Navbar/Navbar';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<div className='container'>
			<Navbar />
			<Main />
			<AboutMe />
			<MySkills />
			<MyWork />
			<Contact />
		</div>
	);
}

export default App;
