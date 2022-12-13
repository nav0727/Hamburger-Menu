/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import {Component} from 'react'

import {BsInfoCircleFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'

import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="bg">
        <div className="container">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              alt="website logo"
              className="logo"
            />
          </Link>

          <div>
            <Popup
              trigger={
                <button type="button" testid="hamburgerIconButton">
                  <GiHamburgerMenu />
                </button>
              }
            >
              <IoMdClose testid="closeButton" />
              <ul>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <li>
                    <div className="rows">
                      <AiFillHome />

                      <h1>Home</h1>
                    </div>
                  </li>
                </Link>
                <Link to="/about" style={{textDecoration: 'none'}}>
                  <li>
                    <div className="rows">
                      <BsInfoCircleFill />
                      <h1>About</h1>
                    </div>
                  </li>
                </Link>
              </ul>
            </Popup>
          </div>
        </div>
        <div>
          <hr className="hrLine" />
        </div>
      </div>
    )
  }
}

export default Header
