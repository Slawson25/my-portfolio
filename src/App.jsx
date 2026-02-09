import React, { useState, useEffect } from 'react';

function App() {
  const [repos, setRepos] = useState([]);
  const username = "Slawson25"; 

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(err => console.log(err));
  }, []);

  const cardStyle = {
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(56, 189, 248, 0.2)',
    borderRadius: '16px',
    padding: '24px',
    transition: 'transform 0.2s ease',
  };

  return (
    <div style={{
      background: 'radial-gradient(circle at top right, #1e293b, #020617)',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'sans-serif',
      color: 'white'
    }}>
      
      {/* Header Section */}
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: '0' }}>SYSTEM_DASHBOARD</h1>
        <p style={{ color: '#38bdf8', fontWeight: 'bold' }}>JS • REACT • HTML • CSS</p>
        <div style={{ marginTop: '20px' }}>
          <a href="https://www.linkedin.com/in/shawn-lawson-a45591269/" style={{ color: '#94a3b8', marginRight: '20px', textDecoration: 'none' }}>LINKEDIN</a>
          <a href={`https://github.com/${username}`} style={{ color: '#94a3b8', textDecoration: 'none' }}>GITHUB</a>
        </div>
      </header>

      {/* Skills Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '0.8rem', color: '#64748b', letterSpacing: '0.2em', marginBottom: '20px', fontFamily: 'monospace' }}>
          VERIFIED_TECH_STACK
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind', 'Node.js'].map((skill) => (
            <span key={skill} style={{
              padding: '8px 16px',
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '8px',
              fontSize: '0.9rem',
              color: '#cbd5e1'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Repos Grid Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {repos.map(repo => (
          <div key={repo.id} style={cardStyle}>
            <h3 style={{ color: '#38bdf8', marginTop: '0' }}>{repo.name}</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{repo.description || "Project Source Code"}</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', fontSize: '0.8rem' }}>
              <span style={{ color: '#64748b' }}>{repo.language}</span>

              <div style={{ display: 'flex', gap: '15px' }}>
                <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>
                  SOURCE →
                </a>

                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noreferrer" style={{ color: '#22c55e', textDecoration: 'none', fontWeight: 'bold' }}>
                    DEMO ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <footer style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>READY_TO_COLLABORATE?</h2>
        <p style={{ color: '#94a3b8', marginBottom: '30px' }}>
          Currently seeking new opportunities and open-source projects.
        </p>

        <a href="mailto:shawn.lawson@zohomail.com" style={{
            padding: '12px 30px',
            backgroundColor: '#38bdf8',
            color: '#0f172a',
            borderRadius: '50px',
            fontWeight: 'bold',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)'
          }}>
          SEND_AN_EMAIL
        </a>
      </footer>
    </div>
  );
}

export default App;
