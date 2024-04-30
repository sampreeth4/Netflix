import React from 'react'
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import './Navbar.css'
import image from './image2.jpg'
const  Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0? false: true);
    return () => (window.onscroll = null);
  }
  return (
    
    <div className={isScrolled? "container scrolled" : "container"}>
      <nav className='navbar'>
        <div className="netflix-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix logo" className='nav-img'/>
        </div>
        <div className="nav-elements">
            <ul>
                <li><a href="">Homepage</a></li>
                <li><a href="">Series</a></li>
                <li><a href="">Movies</a></li>
                <li><a href="">New and Popular</a></li>
                <li><a href="">My List</a></li>
            </ul>
        </div>
        <div className="nav-ending">
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img src={image}  />
            <div className='profile'>
                <ArrowDropDown className='icon drop'/>
                <div className='options'>
                  <div>Settings</div>
                  <div>Logout</div>
                </div>

            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
