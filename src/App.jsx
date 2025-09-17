import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()

  const handleCtaClick = () => {
    navigate('/showcase')
  }

  return (
    <div className="app">
      <div className="container">
        {/* Smile emoticon */}
        <div className="smile-emoticon">:)</div>

        {/* Main heading */}
        <h1 className="main-title">Hi Shashank</h1>

        {/* Content section */}
        <div className="content">
          <p className="description">
            As of now, I just wrote some contents in linkedin, and worked as a freelancer with{' '}
            <span className="bold">Nuke marketing</span>{' '}
            for certain IG reels and made some IG{' '}
            <span className="bold">reels on my own</span>.
          </p>

          <div className="feedback-text">
            <p>I glad to share some of my writings.</p>
            <p>Even if you are not satisfied with my work,</p>
            <p>
              I wish to get some{' '}
              <span className="bold">valuable feedback</span>{' '}
              on myself
            </p>
          </div>

          <button className="cta-button" onClick={handleCtaClick}>
            Check out some of my works
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
