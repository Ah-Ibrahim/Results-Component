import './Results.css';

function LeftSide({ score, scoreText }) {
	return (
		<div className="side side--left">
			<div className="side__heading">Your Result</div>
			<div className="score-circle">
				<div className="score-circle__main">{score}</div>
				<div className="score-circle__range">of 100</div>
			</div>
			<div className="side__desc">
				<div className="heading">Great</div>
				<div className="description">{scoreText}</div>
			</div>
		</div>
	);
}

function RightSide({ Data }) {
	const stats = Data.map((item, index) => (
		<div key={index} className="block">
			<div className="block__type">
				<img src={item.icon} alt="Reaction Icon" />
				{item.category}
			</div>
			<div className="block__result">
				<div className="score">{item.score}</div>
				<div className="range">/ 100</div>
			</div>
		</div>
	));

	return (
		<div className="side side--right">
			<div className="side__heading">Summary</div>
			<div className="side__stats">{stats}</div>
			<button className="side__btn">Continue</button>
		</div>
	);
}

function Results(props) {
	return (
		<div className="container">
			<LeftSide {...props} />
			<RightSide {...props} />
		</div>
	);
}

export default Results;
