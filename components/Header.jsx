import React, { Component } from 'react'

export class Header extends Component {
  render() {
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
        <h1>14 January 2016</h1>
      </header>
    )
  }
}

export default Header
