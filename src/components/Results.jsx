import './Results.css';
import reactionIcon from '../assets/images/icon-reaction.svg';
import memoryIcon from '../assets/images/icon-memory.svg';
import verbalIcon from '../assets/images/icon-verbal.svg';
import visualIcon from '../assets/images/icon-visual.svg';

function LeftSide({ score, scoreText }) {
	return (
		<div className="side side--left">
			<div className="side__heading">You Result</div>
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

function RightSide({ reaction, memory, verbal, visual }) {
	return (
		<div className="side side--right">
			<div className="side__heading">Summary</div>
			<div className="side__stats">
				<div className="block">
					<div className="block__type">
						<img src={reactionIcon} alt="Reaction Icon" />
						Reaction
					</div>
					<div className="block__result">
						<div className="score">{reaction}</div>
						<div className="range">/ 100</div>
					</div>
				</div>
				<div className="block">
					<div className="block__type">
						<img src={memoryIcon} alt="Memory Icon" />
						Memory
					</div>
					<div className="block__result">
						<div className="score">{memory}</div>
						<div className="range">/ 100</div>
					</div>
				</div>
				<div className="block">
					<div className="block__type">
						<img src={verbalIcon} alt="Verbal Icon" />
						Verbal
					</div>
					<div className="block__result">
						<div className="score">{verbal}</div>
						<div className="range">/ 100</div>
					</div>
				</div>
				<div className="block">
					<div className="block__type">
						<img src={visualIcon} alt="Visual Icon" />
						Visual
					</div>
					<div className="block__result">
						<div className="score">{visual}</div>
						<div className="range">/ 100</div>
					</div>
				</div>
			</div>
			<div className="side__btn">Continue</div>
		</div>
	);
}

function Results(props) {
	return (
		<div className="side side--right">
			<LeftSide {...props} />
			<RightSide {...props} />
		</div>
	);
}

export default Results;
