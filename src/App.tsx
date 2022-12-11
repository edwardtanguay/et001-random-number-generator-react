import { useState } from 'react';
import './App.scss';

const _originalNames = ['Marco', 'Luka', 'Jonas', 'Lena', 'Emma', 'Leah'];

function App() {
	const [availableNames, setAvailableNames] = useState(_originalNames);
	const [selectedNames, setSelectedNames] = useState([]);
	const [currentName, setCurrentName] = useState('');
	
	return (
		<div className="App">
			<h1>Random Name Selector (React)</h1>
			<div className="availableArea"></div>
			<div className="currentArea">
				<button className="buttonSelect">Select</button>
				<div className="currentName"></div>
			</div>
			<div className="selectedNames"></div>
		</div>
	);
}

export default App;
