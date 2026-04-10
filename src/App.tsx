import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redirection happens immediately on mount
    window.location.href = "https://alanvaldez.xyz/";
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(255, 255, 255, 0.1)',
        borderTop: '3px solid #3b82f6', // Bright blue accent
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px'
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <h1 style={{ fontSize: '1.5rem', fontWeight: '500', margin: '0 0 10px 0' }}>Redirecting to new portfolio</h1>
      <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
        If you are not redirected automatically, <a href="https://alanvaldez.xyz/" style={{ color: '#3b82f6', textDecoration: 'none' }}>click here</a>.
      </p>
    </div>
  );
}

export default App;
