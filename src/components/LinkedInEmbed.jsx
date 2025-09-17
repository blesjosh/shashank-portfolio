import { useState } from 'react';

const LinkedInEmbed = ({ src, title, width = "504", height = "400" }) => {
  const [hasError, setHasError] = useState(false);
  
  const handleError = () => {
    setHasError(true);
  };

  const getLinkedInUrl = (embedSrc) => {
    // Extract the URN from the embed URL and convert to direct LinkedIn URL
    const urnMatch = embedSrc.match(/urn:li:(share|ugcPost):(\d+)/);
    if (urnMatch) {
      return `https://www.linkedin.com/feed/update/${urnMatch[0]}`;
    }
    return 'https://www.linkedin.com';
  };

  if (hasError) {
    return (
      <div style={{
        textAlign: 'center', 
        padding: '3rem 2rem', 
        color: '#666',
        border: '2px dashed #E1F5FE',
        borderRadius: '8px',
        background: '#fafafa'
      }}>
        <p style={{marginBottom: '1rem', fontSize: '1.1rem'}}>
          📱 LinkedIn post not available in embedded view
        </p>
        <a 
          href={getLinkedInUrl(src)} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            color: '#2196F3', 
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            padding: '0.5rem 1rem',
            border: '2px solid #2196F3',
            borderRadius: '4px',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#2196F3';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#2196F3';
          }}
        >
          View on LinkedIn →
        </a>
      </div>
    );
  }

  return (
    <iframe 
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
      title={title}
      onError={handleError}
      onLoad={(e) => {
        // Check if iframe loaded properly
        try {
          if (e.target.contentDocument === null) {
            setHasError(true);
          }
        } catch (error) {
          // Cross-origin access denied, but iframe might still work
          console.log('Iframe loaded (cross-origin)');
        }
      }}
      style={{
        border: 'none',
        borderRadius: '8px',
        background: '#f5f5f5'
      }}
    />
  );
};

export default LinkedInEmbed;
