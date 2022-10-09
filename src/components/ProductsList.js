import { useEffect, useState } from 'react';
import Product from './Product';

function ProductsList() {
	const api_url = 'https://fakestoreapi.com/products';
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(api_url)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<>
			<h2 className="text-center p-3">Our Products</h2>
			<div className="container">
				<div className="row">
					{products.map((product) => {
						return (
							<div className="col-3" key={product.id}>
								<Product product={product} showButton={true} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default ProductsList;
