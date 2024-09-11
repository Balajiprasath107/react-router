import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Rootlayout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">ALL</NavLink>
          <NavLink to="Cybersecurity">CYBER SECURITY</NavLink>
          <NavLink to="AI">AI</NavLink>
          <NavLink to="DataScience">DATA SCIENCE</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Rootlayout