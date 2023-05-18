import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <div className={`navbar ${isDarkTheme && 'navbar-dark'}`}>
          <div className="nav-content-container">
            <img className="logo" alt="website logo" src={websiteLogo} />
            <ul className="nav-list-container">
              <Link className="link" to="/">
                <li className={`list-item ${isDarkTheme && 'list-item-dark'}`}>
                  Home
                </li>
              </Link>
              <Link className="link" to="/about">
                <li className={`list-item ${isDarkTheme && 'list-item-dark'}`}>
                  About
                </li>
              </Link>
            </ul>
            <button
              data-testid="theme"
              className="theme-btn"
              onClick={toggleTheme}
              type="button"
            >
              <img className="theme-img" alt="theme" src={themeImage} />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
