import { useState, useEffect } from 'react';
import * as tools from './tools';
import './App.scss';
import { Phase } from './types';
import phaseLookup from './data/phaseLookup.json';

const _originalNames = ['Marco', 'Luka', 'Jonas', 'Lena', 'Emma', 'Leah'];

function App() {
	const [availableNames, setAvailableNames] = useState(_originalNames);
	const [currentName, setCurrentName] = useState('');
	const [selectedNames, setSelectedNames] = useState<string[]>([]);
	const [currentPhase, setCurrentPhase] = useState(
		Phase.waitingForFirstClick
	);

	const getPhaseObject = () => {
		return phaseLookup[Phase[Phase[currentPhase]]];
	};

	const handleMainButton = () => {
		if (currentName !== '') {
			selectedNames.push(currentName);
		}
		const _currentName = tools.removeRandomItemFromArray(availableNames);
		setAvailableNames([...availableNames]);
		setCurrentName(_currentName === null ? '' : _currentName);
		if (currentPhase === Phase.waitingForFirstClick) {
			setCurrentPhase(Phase.selectingNames);
		}
	};

	useEffect(() => {
		if (availableNames.length === 0) {
			setCurrentPhase(Phase.onlyOnePersonLeft);
		}
	}, [availableNames]);

	useEffect(() => {
		if (currentName !== '' && selectedNames.length === 0) {
			setAvailableNames(_originalNames);
			setSelectedNames([]);
			setCurrentPhase(Phase.waitingForFirstClick);
		}
		if (availableNames.length === 0 && currentName === '') {
			setCurrentPhase(Phase.finished);
		}
	}, [currentName]);

	return (
		<div className="App">
			<div>{currentPhase}</div>
			<h1>Random Name Selector (React)</h1>
			<div className="availableArea">
				{availableNames.map((availableName, index) => {
					return (
						<div className="availableName" key={index}>
							{availableName}
						</div>
					);
				})}
			</div>
			<div className="currentArea">
				<button className="buttonSelect" onClick={handleMainButton}>
					{getPhaseObject().buttonName}
				</button>
				{currentName && (
					<div className="currentName">{currentName}</div>
				)}
			</div>
			<div className="selectedArea">
				{selectedNames.map((selectedName, index) => {
					return (
						<div className="selectedName" key={index}>
							{selectedName}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
