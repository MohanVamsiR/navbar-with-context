// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeTheme = () => {
        toggleTheme()
      }

      return isDarkTheme ? (
        <div className="navbar-container darkTheme">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            alt="website logo"
            className="logo-image"
          />

          <ul className="option-cont">
            <Link to="/" className="nav-link">
              <li className="home light">Home</li>
            </Link>
            <Link to="/about" className="nav-link">
              <li className="about light">About</li>
            </Link>
          </ul>

          <button onClick={changeTheme} type="button" className="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
              className="theme-image"
            />
          </button>
        </div>
      ) : (
        <div className="navbar-container ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website logo"
            className="logo-image"
          />

          <ul className="option-cont">
            <Link to="/" className="nav-link">
              <li className="home ">Home</li>
            </Link>
            <Link to="/about" className="nav-link">
              {' '}
              <li className="about ">About</li>
            </Link>
          </ul>

          <button
            data-testid="theme"
            onClick={changeTheme}
            type="button"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
              className="theme-image"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
