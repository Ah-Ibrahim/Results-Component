import Results from './components/Results';
import Data from './assets/data.json';
import './App.css';

function App() {
	const results = {
		score: 76,
		scoreText: 'You scored higher than 65% of the people who have taken these tests.',
		Data,
	};

	return (
		<main>
			<Results {...results} />
		</main>
	);
}

export default App;
