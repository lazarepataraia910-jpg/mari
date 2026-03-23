import { useState } from 'react';
import './App.css'; // ეს ხაზი აუცილებელია!

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #ff9a9e, #fad0c4)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '4.5rem', marginBottom: '2rem' }}>
        გამარჯობა მარი 💕
      </h1>

      {!show && (
        <button
          onClick={() => setShow(true)}
          style={{
            fontSize: '2rem',
            padding: '20px 60px',
            border: '3px solid white',
            borderRadius: '50px',
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)'
          }}
        >
          გამარჯობა ლაზარე ♡
        </button>
      )}

      {show && (
        <div style={{ fontSize: '2.2rem', lineHeight: '1.6', maxWidth: '800px' }}>
          <p style={{ fontSize: '2.6rem', fontWeight: '500' }}>
            don't forget you are the most beautiful person I have ever met
          </p>
          <p>beauty of Personality</p>
          <p>beautiful eyes</p>
          <p>beautiful smile 💗✨🌸</p>
        </div>
      )}
    </div>
  );
}

export default App;