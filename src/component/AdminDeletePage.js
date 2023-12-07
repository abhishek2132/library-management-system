import React, { useEffect, useState } from 'react';
import Book from './Book';
import "./BookPage.css";
import axios from 'axios';
const AdminDeletePage = () => {
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null); // New state for handling errors
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/books');
      if (!response.ok) {
        throw new Error('Network response was not ok'); // Handle non-200 status codes
      }
      const data = await response.json();
      setBookData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.'); // Set error state
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete=async(id)=>{
    try {
        // Assuming your JSON server has an endpoint for deleting books
        await axios.delete(`http://localhost:3001/books/${id}`);
        fetchData();
      } catch (error) {
        console.error('Error deleting book:', error);
        setError('Error deleting book. Please try again later.');
      }
  }
  return (
    <div>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        bookData.length>0 && (
          <div className='entirebook'>
            {
                bookData.map((elem,index)=>(
                    <div>
                        <Book key={index} data={elem}/>
                        <span onClick={(e)=>{handleDelete(elem.id)}}>Delete BOOK</span>
                    </div>
                ))
            }
          </div>
        )
      )}
    </div>
  );
};

export default AdminDeletePage;
