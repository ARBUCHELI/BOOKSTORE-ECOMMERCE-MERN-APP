import React, { useContext } from "react";
import { itemContext } from "../context/ItemContext";

const ProductItem = ({ product }) => {
	const { addToCart, removeFromCart } = useContext(itemContext);

	const handleAddToCart = (product) => {
		console.log(product);
		addToCart(product);
	};

	const handleRemoveToCart = (product) => {
		console.log("product removed", product);
		removeFromCart(product);
	};

	return (
		<div className="product-card">
			<img
				className="product-image"
				src={product.image}
				alt={product.name}
			/>

			<div className="product-details">
                <h3 style={{ fontWeight: "700" }}>{product.title}</h3>
				<h3 style={{ fontWeight: "700" }}>{product.name}</h3>
				<p style={{ fontWeight: "300" }}>{product.description}</p>
				<p style={{ fontWeight: "500" }}>Price: {product.price} USD</p>
				<p>{product.genre}</p>
				<p style={{ fontWeight: "700", color: "#955251" }}>
					{product.author}
				</p>

				<button className="small-btn-product" onClick={() => handleAddToCart(product)}>
					Add to Cart
				</button>

				<button className="small-btn-product" onClick={() => handleRemoveToCart(product)}>Remove Item</button>
			</div>
		</div>
	);
};

export default ProductItem;
