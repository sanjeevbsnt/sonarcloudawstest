import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Website</h1>
      </header>
      <main className="App-main">
        <section className="App-intro">
          <h2>About Me</h2>
          <p>
            Hi there! I'm [Your Name], a passionate [Your Profession] based in [Your Location].
            I love building cool things with technology and sharing my knowledge with others.
          </p>
        </section>
        <section className="App-skills">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            {/* Add more skills */}
          </ul>
        </section>
        <section className="App-projects">
          <h2>Projects</h2>
          <p>Check out some of my projects:</p>
          <ul>
            <li><a href="#">Project 1</a></li>
            <li><a href="#">Project 2</a></li>
            {/* Add more projects */}
          </ul>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 My Personal Website</p>
      </footer>
    </div>
  );
}

export default App;
