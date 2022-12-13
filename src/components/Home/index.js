import {Component} from 'react'

import './index.css'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="small"
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="large"
        />
      </div>
    )
  }
}

export default Home
