// Write your code here
import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <>
          <Navbar />
          <div className="About-cont darkTheme-about">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
              className="home-image"
            />
            <h1 className="home-head light">About</h1>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="home-cont lightTheme">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
              className="home-image"
            />
            <h1 className="home-head">About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
