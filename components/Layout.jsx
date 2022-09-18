import React from 'react'
import NavBar from './NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <div className="page-wrapper">
        <NavBar />
        <div className="spacer"></div>
        {children}
      </div>
    </>
  )
}

export default Layout
