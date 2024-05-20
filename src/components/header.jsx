import React from 'react';
import '../assets/Header.css'

function Header() {


  return (
    <nav className="nav ">

        <div className="container flex flex-between flex-center" style={{height: '80px'}}>
            <img src='./sello!.png' className="nav-logo" alt='logo'/>
        <button type='button' className="nav__dropdown"><i className="fa-solid fa-list fa-lg"></i>Katalog</button>
        <div className="nav_search">
            <input type="text" placeholder="Search" className='search'/>
            <button className='search-button'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="nav__profile"><i className="fa-regular fa-user fa-lg" /><section className='text'>Profile</section></div>    
        </div>
        
    </nav>
  );
}

export default Header;
