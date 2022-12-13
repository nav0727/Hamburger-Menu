import {Component} from 'react'
import Header from '../Header'

import './index.css'

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
          className="small"
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
          className="large"
        />
      </div>
    )
  }
}

export default About
