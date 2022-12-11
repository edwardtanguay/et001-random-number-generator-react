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
	const [currentPhase, setCurrentPhase] = useState(Phase.nobodySelectedYet);

	const getPhaseObject = () => {
		return phaseLookup[Phase[Phase[currentPhase]]];
	};

	const moveCurrentNameToSelectedNames = () => {
		if (currentName !== '') {
			selectedNames.push(currentName);
		}
	};

	const moveRandomAvailableNameToCurrentName = () => {
		return tools.removeRandomItemFromArray(availableNames);
	};

	const handleMainButton = () => {
		if (currentPhase === Phase.nobodySelectedYet) {
			moveCurrentNameToSelectedNames();
			let _currentName  = moveRandomAvailableNameToCurrentName();
			_currentName = _currentName === null ? '' : _currentName;

			setAvailableNames([...availableNames]);
			setCurrentName(_currentName);
			setSelectedNames([...selectedNames]);

			if (availableNames.length > 0) {
				setCurrentPhase(Phase.selectingNames);
			} else {
				setCurrentPhase(Phase.onlyOnePersonLeft);
			}
		}
	};

	return (
		<div className="App">
			<div>{currentPhase}</div>
			<h1>Random Name Selector (React/TypeScript)</h1>
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
