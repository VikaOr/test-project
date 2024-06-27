import React from 'react'
import { Link, Outlet } from 'react-router-dom';


export default function MainPage() {
  return (
    <>
    <nav>
      <ul>
        <li>
            <Link to='/home'>Home</Link>
        </li>
        <li>
            <Link to='/about'>about</Link>
        </li>
        <li>
            <Link to='/users'>users</Link>
        </li>
      </ul>
    </nav>
    <hr />
    <Outlet />

    </>
    
  )
}
