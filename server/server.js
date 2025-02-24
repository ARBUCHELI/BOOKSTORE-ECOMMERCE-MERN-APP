const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const backendUrl = "https://your-backend-service.onrender.com";

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/bookstore';

mongoose.connect(mongoURI, {
	useNewUrlParser: true, // No longer necessary with MongoDB driver v4+
	useUnifiedTopology: true, // No longer necessary with MongoDB driver v4+
  })
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log('Error connecting to MongoDB:', err));

app.use(express.json());
app.use(cors()); 

const bookSchema = new mongoose.Schema({
	title: String,
	author: String,
	genre: String,
	description: String,
	price: Number,
	image: String,
});

const Book = mongoose.model('Book', bookSchema);

const seedDatabase = async () => {
	try {
		await Book.deleteMany(); 

		const books = [
			{ title: 'Meditations', author: 'Marcus Aurelius', genre: 'Philosophy', description: 'A series of personal writings by the Roman Emperor, offering insights on Stoic philosophy.', price: 18, image: 'https://m.media-amazon.com/images/I/31OpdSH5ncL._SY445_SX342_.jpg' },
			{ title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', genre: 'History', description: 'A sweeping exploration of the history of humanity, from the Stone Age to the modern era.', price: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPD97GnNVP4rvgmGBBRqu05frXMmshAtkctA&s' },
			{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', genre: 'Fiction', description: 'A psychological thriller exploring guilt, redemption, and morality.', price: 12, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZetFAVritoLX9atfdYDSmJn-pE1H7EMLAw&s' },
			{ title: 'The Republic', author: 'Plato', genre: 'Philosophy', description: 'A foundational work of Western philosophy, discussing justice, order, and the ideal state.', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIokybUaFC9EbmXBzp5m94LapX-Pre8uDYQ&s' },
			{ title: 'Guns, Germs, and Steel', author: 'Jared Diamond', genre: 'History', description: 'An exploration of how environmental factors shaped the modern world.', price: 22, image: 'https://images.blinkist.io/images/books/642ee69e4463be00089820f4/1_1/470.jpg' },
			{ title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', genre: 'Fiction', description: 'A profound novel exploring faith, doubt, and the human condition.', price: 16, image: 'https://rekhtabooks.com/cdn/shop/products/1111005945619.jpg?v=1680041869' },
			{ title: 'Thus Spoke Zarathustra', author: 'Friedrich Nietzsche', genre: 'Philosophy', description: 'A philosophical novel introducing the concept of the Übermensch.', price: 14, image: 'https://www.rebind.ai/images/books/thus_spoke_zarathustra_book_details.png' },
			{ title: 'The Diary of a Young Girl', author: 'Anne Frank', genre: 'History', description: 'The poignant diary of a Jewish girl hiding during the Holocaust.', price: 10, image: 'https://m.media-amazon.com/images/I/51Eyjz65gyL._AC_UF1000,1000_QL80_.jpg' },
			{ title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', genre: 'Fiction', description: 'A magical realist tale of the Buendía family in the fictional town of Macondo.', price: 18, image: 'https://m.media-amazon.com/images/I/81dy4cfPGuL.jpg' },
			{ title: 'The Art of War', author: 'Sun Tzu', genre: 'Philosophy', description: 'An ancient Chinese military treatise on strategy and tactics.', price: 12, image: 'https://m.media-amazon.com/images/I/71MizulW5AL.jpg' },
			{ title: 'The Silk Roads: A New History of the World', author: 'Peter Frankopan', genre: 'History', description: 'A reimagining of world history with a focus on the Silk Roads.', price: 28, image: 'https://m.media-amazon.com/images/I/91A1-6ny+pL.jpg' },
			{ title: 'The Stranger', author: 'Albert Camus', genre: 'Fiction', description: 'A philosophical novel exploring absurdism and existentialism.', price: 14, image: 'https://images.blinkist.io/images/books/66420e98777f9d00070faeb1/1_1/470.jpg' },
			{ title: 'The Prince', author: 'Niccolò Machiavelli', genre: 'Philosophy', description: 'A political treatise on power, leadership, and statecraft.', price: 15, image: 'https://m.media-amazon.com/images/I/81KdLnCMeRL._AC_UF1000,1000_QL80_.jpg' },
			{ title: 'A People’s History of the United States', author: 'Howard Zinn', genre: 'History', description: 'A radical retelling of American history from the perspective of marginalized groups.', price: 20, image: 'https://images.blinkist.io/images/books/5a81740bb238e100085ef242/1_1/470.jpg' },
			{ title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', description: 'A philosophical novel about following one’s dreams and destiny.', price: 16, image: 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg' }
		  ];
		  
		await Book.insertMany(books);
		console.log('Database seeded successfully');
	} catch (error) {
		console.error('Error seeding database:', error);
	}
};

seedDatabase();

app.get(`${backendUrl}/api/books`, async (req, res) => {
	try {
		const allBooks = await Book.find();
		res.json(allBooks);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
