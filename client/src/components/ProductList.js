import React, { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { itemContext } from "../context/ItemContext";

const ProductList = () => {
	const { products } = useContext(itemContext);
	const [sortedProducts, setSortedProducts] = useState([...products]);	 
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(3000);
	const [selectedType, setSelectedType] = useState("all"); 
	
	useEffect(() => {
		setSortedProducts([...products]);
	}, [products]);

	const handleSortByPrice = () => {
		const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
		setSortedProducts(sorted);
	};

	const handleFilterByPriceRange = () => {
		const filtered = products.filter(
			(product) => product.price >= minPrice && product.price <= maxPrice
		);
		setSortedProducts(filtered);
	};

	const handleFilterByType = () => {
		if (selectedType === "all") {
			setSortedProducts([...products]);
		} else {
			const filtered = products.filter(
				(product) => product.genre === selectedType
			);
			setSortedProducts(filtered);
		}
	};

	return (
		<div className="prdt-list">
			<h2 style={{ color: "#955251", fontSize: "4em" }}>BOOK LIST</h2>
			<div className="filter-btn">
				<button className="small-btn" onClick={handleSortByPrice}>Sort by Price</button>
				<label className="colored-label">
					Min Price:
					<input
						type="number"
						value={minPrice}
						onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="styled-input"
					/>
				</label>
				<label className="colored-label">
					Max Price:
					<input
						type="number"
						value={maxPrice}
						onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="styled-input"
					/>
				</label>
				<button className="small-btn" onClick={() => handleFilterByPriceRange()}>
					Filter by Price Range
				</button>
				<label className="colored-label">
					Filter by Type:
					<select
						value={selectedType}
						onChange={(e) => setSelectedType(e.target.value)}
                        className="styled-input"
					>
						<option value="all">All</option>
						<option value="Philosophy">Philosophy</option>
						<option value="History">History</option>
                        <option value="Fiction">Fiction</option>
					</select>
				</label>

				<button className="small-btn" onClick={handleFilterByType}>Filter by Type</button>
			</div>

			<ul className="item-card">
				{sortedProducts.map((product) => (
					<ProductItem key={product._id} product={product} />
				))}
			</ul>
			<div className="buy-now-btn">Buy Now</div>
		</div>
	);
};

export default ProductList;
