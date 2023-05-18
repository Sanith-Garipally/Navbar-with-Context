import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      return (
        <>
          <Navbar />
          <div className={`about ${isDarkTheme && 'about-dark'}`}>
            <img className="about-img" alt="about" src={aboutUrl} />
            <h1 className={`about-head ${isDarkTheme && 'about-head-dark'}`}>
              About
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
