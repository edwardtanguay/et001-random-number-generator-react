import './App.scss';

function App() {
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
