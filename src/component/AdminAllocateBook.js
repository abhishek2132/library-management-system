import React, { useEffect, useState } from 'react';
import Book from './Book';
import './BookPage.css';
import axios from 'axios';

const AdminAllocateBook = () => {
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null); // New state for handling errors
  const[user,setUser]=useState();
  const[login,setLogin]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/adminallocate');
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
  }, [bookData]);
  useEffect(()=>{
      if(localStorage.getItem("userInfo")){
        setUser(JSON.parse(localStorage.getItem("userInfo")));
        setLogin(true);
      }
  },[]);
  const handleAllotment = async (allocatedata) => {
    try {
      // if (allocatedata.stock <= 0) {
      //   alert("Out of Stock Now");
      //   console.log("2");
      //   return;
      // }
  
      // Perform allotment by making a POST request to "allotmentDone"
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
      await axios.post("http://localhost:3001/allocatedone", allocatedata);
      alert("Your Allotment is Successfully Done");
  
      // If the stock is 1, delete the entry from "adminallocate"
      await axios.delete(`http://localhost:3001/adminallocate/${allocatedata.id}`);
      // if (allocatedata.stock === 1) {
      //   await axios.delete(`http://localhost:3001/adminallocate/${allocatedata.id}`);
      // } else {
      //   // If the stock is more than 1, update the stock in "adminallocate"
      //   const updatedStock = allocatedata.stock - 1;
      //   await axios.patch(`http://localhost:3001/adminallocate/${allocatedata.id}`, {
      //     stock: updatedStock,
      //   });
      // }
  
      // console.log("3");
    } catch (error) {
      alert("Error");
      console.log(error);
    }
  };
  

  return (
    <div>
      {bookData.length>0?<div>List To Allocte The Book</div>:<div>Nothing To Allocated Till Now</div>}
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        bookData.length > 0 && (
          <div className='entirebook'>
            {bookData.map((elem, index) => (
              <div key={index}>
                <Book data={elem} />
                
                {
                  login&&<div onClick={(e)=>handleAllotment(elem)}>Confirm Allotment</div>
                }
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default AdminAllocateBook;
