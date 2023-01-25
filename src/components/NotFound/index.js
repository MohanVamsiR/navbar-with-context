import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <>
          <Navbar />
          <div className="home-cont darkTheme-home">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-image"
            />
            <h1 className="home-head light">Home</h1>
            <p className="para light">
              We cannot seem to find the page your looking for.
            </p>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="home-cont lightTheme">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-image"
            />
            <h1 className="home-head">Lost Your Way?</h1>
            <p className="para">
              We cannot seem to find the page your looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
