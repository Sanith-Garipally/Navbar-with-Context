import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundUrl =
        'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
      return (
        <>
          <Navbar />
          <div className={`not-found ${isDarkTheme && 'not-found-dark'}`}>
            <img className="not-found-img" alt="not found" src={notFoundUrl} />
            <h1 className={`nf-head ${isDarkTheme && 'nf-head-dark'}`}>
              Lost Your Way?
            </h1>
            <p className={`nf-para ${isDarkTheme && 'nf-para-dark'}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
