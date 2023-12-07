import React, { useEffect, useState } from 'react';
import Book from './Book';
import './BookPage.css';
import axios from 'axios';

const BookPage = () => {
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null); // New state for handling errors
  const[user,setUser]=useState();
  const[login,setLogin]=useState(false);
  useEffect(() => {
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

    fetchData();
  }, []);
  useEffect(()=>{
      if(localStorage.getItem("userInfo")){
        setUser(JSON.parse(localStorage.getItem("userInfo")));
        setLogin(true);
      }
  },[]);
  const handleRequest = async(allocatedata) => {
     try{
      allocatedata={
        ...allocatedata,
        email:user.email
      }
      const id=allocatedata.id;
      const response = await axios.get('http://localhost:3001/allocatedone', {
        params: {
          id, 
        },
      });
      if(response.data.length>0){
        alert("the same book has been already allotated To you");
        return;
      }
      await axios.post("http://localhost:3001/adminallocate",allocatedata);
      alert("Your Request to Admin is SuccessFully Registered");
     }
     catch(error){
         alert("error");
         console.log(error);
     }
  };

  return (
    <div>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        bookData.length > 0 && (
          <div className='entirebook'>
            {bookData.map((elem, index) => (
              <div key={index}>
                <Book data={elem} />
                
                {
                  login&&<div onClick={(e)=>handleRequest(elem)}>Request Book Allocation</div>
                }
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default BookPage;
