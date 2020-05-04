import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.setIsOpen = this.setIsOpen.bind(this)
  }

  setIsOpen() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    if (this.state.isOpen === false) {
      return(
        <div className="footer-container">
          <button onClick={this.setIsOpen}>about</button>
        </div>
      )
    } else if (this.state.isOpen === true) {
      return(
        <div className="footer-container">
          <button onClick={this.setIsOpen}>close</button>
          <h3>oog.la is a personal project developed by Hunter Treadaway</h3>
          <h3>learn more about this project as well as Hunter's other projects by visiting <a href="https://huntertread.com/#project-section" target="blank">huntertread.com</a></h3>
          <h3>get in touch with Hunter at huntertread @ gmail</h3>
        </div>
      )
    }
  }
}

export default Footer