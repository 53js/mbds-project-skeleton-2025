import { useState } from 'react';
import logo from './logo.svg';

import './App.css';

const { VITE_API_URL } = import.meta.env;

function App() {
	const [resp, setResp] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	const handleClickTest = async () => {
		console.log('VITE_API_URL', VITE_API_URL);
		setError(null);
		setResp(null);
		setLoading(true);

		await fetch(VITE_API_URL)
			.then((response) => !console.log(response) && response.json())
			.then((data) => {
				console.log(data);
				setResp(data);
			})
			.catch((err) => {
				console.error('err:', err);
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Project MBDS 2025 - SKELETON
				</p>
				<br />
				<button type="button" onClick={handleClickTest}>Call API for test</button>
				{loading && <p>loading...</p>}
				{resp && <p>ok = {resp}</p>}
				{error && <p>error = {error}</p>}
			</header>
		</div>
	);
}

export default App;
