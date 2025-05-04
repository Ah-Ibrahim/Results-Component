import Results from './components/Results';
import './App.css';

function App() {
	const results = {
		score: 76,
		scoreText: 'You scored higher than 65% of the people who have taken these tests.',
		reaction: 80,
		memory: 92,
		verbal: 61,
		visual: 73,
	};

	return (
		<main>
			<Results {...results} />
		</main>
	);
}

export default App;
