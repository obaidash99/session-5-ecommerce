import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';

import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails.js';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Home />
						</>
					}
				/>
				<Route path="/products/:id" element={<ProductDetails />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
