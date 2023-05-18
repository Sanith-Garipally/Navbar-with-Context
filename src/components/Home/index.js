import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      return (
        <>
          <Navbar />
          <div className={`home ${isDarkTheme && 'home-dark'}`}>
            <img className="home-img" alt="home" src={homeUrl} />
            <h1 className={`home-head ${isDarkTheme && 'home-head-dark'}`}>
              Home
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
