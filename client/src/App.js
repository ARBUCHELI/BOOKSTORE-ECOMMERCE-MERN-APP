import React from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import './App.css'
import CustomItemContext from './context/ItemContext';
import Footer from './components/Footer'; 

const App = () => {
	return (
		<CustomItemContext>
			<Header />
			<ProductList />
      		<Footer />
		</CustomItemContext>
	);
};

export default App;

