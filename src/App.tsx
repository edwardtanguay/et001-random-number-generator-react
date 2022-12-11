import { useState } from 'react';
import './App.scss';

const _originalNames = ['Marco', 'Luka', 'Jonas', 'Lena', 'Emma', 'Leah'];

function App() {
	const [availableNames, setAvailableNames] = useState(_originalNames);
	const [currentName, setCurrentName] = useState('');
	const [selectedNames, setSelectedNames] = useState([]);

	return (
		<div className="App">
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
				<button className="buttonSelect">Select</button>
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
