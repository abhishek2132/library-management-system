import React, { useState } from 'react';
import axios from 'axios';
import "./AdminAddBook.css";
const AdminAddBook = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [stock, setStock] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title||!description||!genre||!author||stock==0){
      alert("fill all the fields");
      return;
    }
    try {
      const bookData = {
        title,
        description,
        genre,
        author,
        stock: parseInt(stock), // Convert stock to an integer
      };

      // Assuming your JSON server has an endpoint for adding books
      await axios.post('http://localhost:3001/books', bookData);
      setTitle("");
      setAuthor("");
      setDescription("");
      setGenre("");
      setStock(0);

      // Optionally, you can navigate to another page after successful submission
      // Example: useNavigate().('/books');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <h2>Admin Add Book</h2>
      <input
        type="text"
        placeholder="Book Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Author Name"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />
      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input
        type="text"
        placeholder="Category/Genre"
        onChange={(e) => setGenre(e.target.value)}
        value={genre}
      />
      <input
        type="number"
        placeholder="Stock"
        onChange={(e) => setStock(e.target.value)}
        value={stock}
      />
      <button onClick={handleSubmit}>Add Book</button>
    </div>
  );
};

export default AdminAddBook;
