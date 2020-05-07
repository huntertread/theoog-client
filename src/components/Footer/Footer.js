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
          <h3>The Oog is a personal project developed by Hunter Treadaway</h3>
          <h3>Learn more about this project and Hunter's other work by visiting <a href="https://huntertread.com/#project-section" target="blank">huntertread.com</a></h3>
          <h3>Get in touch with Hunter at huntertread@gmail.com</h3>
        </div>
      )
    }
  }
}

export default Footer