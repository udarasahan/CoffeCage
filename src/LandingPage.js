import React from 'react';
import backgroundImage from './Assets/image5.jpg';
import './LandingPage.css';
import MuiButton from './Components/MuiButton';

const LandingPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // Use backticks for template literals
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', // Align items in the center vertically
          position: 'relative', // Make the container relative for absolute positioning of text
          color: 'white', // Set text color to ensure visibility
        }}
      >
        <nav className='navbar'>
            <div className='container'>
                <a href='1'className='logo'>CoffeeCage</a>
                <ul className='nav-links'>
                    <li><a href='2'>Home</a></li>
                    <li><a href='2'>Menu</a></li>
                    <li><a href='2'>About</a></li>
                    <li><a href='2'>Contact</a></li>
                </ul>
            </div>
        </nav>

        <div className='main-heading'>
          <p style={{marginBottom: '1px'}}>Keep Your Dreams</p>
          <p style={{marginTop: '10px', marginBottom:'10px'}}>aroused with a Cup</p>
          <p style={{marginTop: '10px'}}>of Coffee</p>
        </div>
        <div className='order-button'><MuiButton /></div>
      </div>
      
    </div>
  );
};

export default LandingPage;
