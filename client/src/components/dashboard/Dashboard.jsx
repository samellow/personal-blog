import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";

const Dashboard = () => {
  return (
    <nav className="dashboard">
        <div className="logo">
            <p>SAM'S BLOG</p>
        </div>

        <div className="nav-links">
            <ul>
                <li><Link to='/create'>Create new</Link></li>
                <li><Link to='/'>My Articles</Link></li>
            </ul>
        </div>

       <div className="searchBox">
       <i><IoSearch></IoSearch></i>
        <input type="text" className='searchInput' placeholder='search' />
       </div>

    </nav>
  )
}

export default Dashboard