import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkedInEmbed from './LinkedInEmbed.jsx';
import './Showcase.css';

const Showcase = () => {
  const [activeSection, setActiveSection] = useState('what-if');
  const navigate = useNavigate();

  const sections = [
    { id: 'what-if', label: 'What if...', active: true },
    { id: 'marketing', label: 'Marketing & My Observations' },
    { id: 'personal-stories', label: 'Personal Stories' },
    { id: 'technical-writing', label: 'Technical Writing' },
    { id: 'instagram-reels', label: 'Instagram Reels' },
    { id: 'random-writings', label: 'Random Writings' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'what-if':
        return (
          <div className="content-section">
            <div className="posts-grid">
              <div className="post-item">
                <h3>What if Nanda kumar active in linkedin</h3>
                <div className="linkedin-embed">
                  <LinkedInEmbed 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7365599830192115713"
                    title="What if Nanda kumar active in linkedin"
                    width="504"
                    height="1500"
                  />
                </div>
              </div>
              <div className="post-item">
                <h3>What if RJ Balaji on linkedin</h3>
                <div className="linkedin-embed">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7354421910778105856"
                    width="504"
                    height="1927"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded post"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'marketing':
        return (
          <div className="content-section">
            <div className="posts-grid">
              <div className="post-item">
                <h3>System Thinking - ft.Epaphra</h3>
                <div className="linkedin-embed">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7341705613741047808"
                    width="504"
                    height="1627"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded post"
                  ></iframe>
                </div>
              </div>
              <div className="post-item">
                <h3>Repetitive marketing - V1</h3>
                <div className="linkedin-embed">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7324759396993900544"
                    width="504"
                    height="1250"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded post"
                  ></iframe>
                </div>
              </div>
              <div className="post-item">
                <h3>Repetitive marketing - V2</h3>
                <div className="linkedin-embed">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7318582256753614851"
                    width="504"
                    height="1160"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded post"
                  ></iframe>
                </div>
              </div>
              <div className="post-item">
                <h3>Case Study - How A2D Channel, "Nanda Kumar" cracked yt algorithm</h3>
                <div className="linkedin-embed">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7319692956980981762"
                    width="504"
                    height="1113"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded post"
                  ></iframe>
                </div>
              </div>
              <div className="post-item">
                <h3>Branding</h3>
                <div className="linkedin-embed">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7340171946120159233"
                    width="504"
                    height="1578"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded post"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'personal-stories':
        return (
          <div className="content-section">
            <div className="posts-grid">
              <div className="post-item">
                <h3>How to write some better posts. Ft. Thiruvalluvar</h3>
                <div className="linkedin-embed">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7348696233860845568"
                    width="504"
                    height="1617"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded post"
                  ></iframe>
                </div>
              </div>
              <div className="post-item">
                <h3>How I joined Nuke marketing</h3>
                <div className="linkedin-embed">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7352687454539165697"
                    width="504"
                    height="2160"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded post"
                  ></iframe>
                </div>
              </div>
              <div className="post-item">
                <h3>Personal Story</h3>
                <div className="linkedin-embed">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7346509094721069056"
                    width="504"
                    height="1131"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded post"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'technical-writing':
        return (
          <div className="content-section">
            <div className="posts-grid">
              <div className="post-item">
                <h3>GenAI introduction</h3>
                <div className="linkedin-embed">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7368577516564840448"
                    width="504"
                    height="656"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded post"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'instagram-reels':
        return (
          <div className="content-section">
            <div className="posts-grid">
              <div className="post-item">
                <h3>@blessingindisguise.in</h3>
                <div className="linkedin-embed">
                  <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#333', padding: '2rem'}}>
                    <a href="https://instagram.com/blessingindisguise.in" target="_blank" rel="noopener noreferrer" 
                       style={{color: '#2196F3', textDecoration: 'none', fontWeight: 'bold'}}>
                      Visit @blessingindisguise.in on Instagram
                    </a>
                  </p>
                </div>
              </div>
              <div className="post-item">
                <h3>@thecoinboyy</h3>
                <div className="linkedin-embed">
                  <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#333', padding: '2rem'}}>
                    <a href="https://instagram.com/thecoinboyy" target="_blank" rel="noopener noreferrer" 
                       style={{color: '#2196F3', textDecoration: 'none', fontWeight: 'bold'}}>
                      Visit @thecoinboyy on Instagram
                    </a>
                  </p>
                </div>
              </div>
              <div className="post-item">
                <h3>Client account with nukemarketing - nandas_lab</h3>
                <div className="linkedin-embed">
                  <p style={{textAlign: 'center', fontSize: '1rem', color: '#666', padding: '1rem 2rem'}}>
                    Worked as a team for first 5-10 reels
                  </p>
                  <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#333', padding: '0 2rem 2rem'}}>
                    <a href="https://instagram.com/nandas_lab" target="_blank" rel="noopener noreferrer" 
                       style={{color: '#2196F3', textDecoration: 'none', fontWeight: 'bold'}}>
                      Visit @nandas_lab on Instagram
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'random-writings':
        return (
          <div className="content-section">
            <div className="posts-grid">
              <div className="post-item">
                <h3>Personal newsletter & random writings</h3>
                <div className="linkedin-embed">
                  <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#333', padding: '2rem'}}>
                    <a href="https://www.linkedin.com/newsletters/my-alter-ego-7326156359417090048/" target="_blank" rel="noopener noreferrer" 
                       style={{color: '#2196F3', textDecoration: 'none', fontWeight: 'bold'}}>
                      My Alter Ego - LinkedIn Newsletter
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Select a category to view posts</div>;
    }
  };

  return (
    <div className="showcase">
      <aside className="sidebar">
        <header className="showcase-header">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          <h1 className="showcase-title">Some of my writings :)</h1>
        </header>

        <nav className="sidebar-nav">
          <div className="nav-buttons">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>
        </nav>
      </aside>

      <main className="showcase-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default Showcase;
