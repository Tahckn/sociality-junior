import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="status-container">
        <div className="status-color">
          <div id="status-color1"></div>
          <p>Published</p>
        </div>

        <div className="status-color">
          <div id="status-color2"></div>
          <p>Scheduled</p>
        </div>

        <div className="status-color">
          <div id="status-color3"></div>
          <p>Need Approval</p>
        </div>

        <div className="status-color">
          <div id="status-color4"></div>
          <p>Error</p>
        </div>

        <div className="status-color">
          <div id="status-color5"></div>
          <p>Notes</p>
        </div>
      </div>
    </header>
  )
}

export default Header
