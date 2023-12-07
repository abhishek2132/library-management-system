import React, { useEffect, useState } from 'react';
import Book from './Book';
import './BookPage.css';
import axios from 'axios';

const RequestAccepted= ({user}) => {
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null); // New state for handling errors
  const[login,setLogin]=useState(false);
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/allocatedone');
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Handle non-200 status codes
        }
        const data = await response.json();
  
        // Filter data based on the user's email
        const filteredData = data.filter((elem) => elem.email === user.email);
        setBookData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.'); // Set error state
      }
    };
  
    fetchData();
  }, [user]); // Include user.email in the dependency array
  
  return (
    <div>
        {bookData.length>0?<h1>Succesully Allocated</h1>:<h1>No Allocation Till Now</h1>}

      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        bookData.length > 0 && (
          <div className='entirebook'>
            {bookData.map((elem, index) => (
              <div key={index}>
                <Book data={elem} />
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
export default RequestAccepted;
