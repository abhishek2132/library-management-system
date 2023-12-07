import React from 'react';
import logo from './photo-1507842217343-583bb7270b66.jpg';
 // replace with your logo file
import 'bootstrap/dist/css/bootstrap.min.css';
const WelcomeReal = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
          <div className="text-center">
            <img src={logo} alt="Library Logo" className="img-fluid mb-4" />
            <h1>Welcome to Our Library</h1>
            <p className="lead">
              Discover a world of books at your fingertips. Explore our collection,
              borrow your favorites, and enjoy the magic of reading.
            </p>
          </div>
          <div className="mt-5">
            <h2>About Us</h2>
            <p>
              Welcome to our Library Management System. We are dedicated to providing
              an exceptional library experience for our users. Our collection includes
              a wide range of books, from classics to the latest bestsellers.
            </p>
            <p>
              Whether you're a student, faculty member, or a passionate reader, our
              library is a haven for knowledge seekers. Feel free to explore, borrow,
              and immerse yourself in the world of literature.
            </p>
            <p>
              If you have any questions or need assistance, our friendly staff is here
              to help you. Happy reading!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeReal;
