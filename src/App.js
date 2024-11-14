import React, { useState } from 'react'
import { FaTrophy, FaFootballBall, FaAward, FaMusic, FaCamera, FaBiking } from 'react-icons/fa'
import './JoshuaMendesPortfolio.css';

function Card({ children, className }) {
  return <div className={`card ${className}`}>{children}</div>
}

function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  )
}

function Input({ type, id, placeholder }) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="input"
    />
  )
}

function Textarea({ id, rows }) {
  return (
    <textarea id={id} rows={rows} className="textarea"></textarea>
  )
}

export default function JoshuaMendesPortfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`portfolio ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <nav className={`nav ${isDarkMode ? 'dark' : 'light'}`}>
          <div className="container">
            <span className="logo">Joshua Mendes</span>
            <div className="nav-links">
              <a href="#about" className="nav-link">About</a>
              <div className="dropdown">
                <button className="dropdown-button">More</button>
                <div className="dropdown-menu">
                  <a href="#achievements" className="dropdown-link">Achievements</a>
                  <a href="#hobbies" className="dropdown-link">Hobbies</a>
                  <a href="#contact" className="dropdown-link">Contact</a>
                </div>
              </div>
              <Button onClick={toggleTheme}>
                Toggle Theme
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <section id="about" className="section">
          <div className="about-container">
            <div className="about-text">
              <h1 className="title">About Joshua Mendes</h1>
              <p className="description">
                Studying in the second year of ECS Engineering at Fr Conceicao
                Rodrigues College of Engineering. Aspiring Software Development
                Engineer.
              </p>
            </div>
            <div className="about-image">
              <img src="joshua.jpg" alt="Joshua Mendes" className="profile-img" />
            </div>
          </div>
        </section>

        <section id="achievements" className="section">
          <h2 className="section-title">Achievements</h2>
          <div className="card-container">
            <Card>
              <FaTrophy className="icon" />
              <h3 className="card-title">Elected School Captain</h3>
              <p>St. Mary's School ICSE: Academic Year 20-21</p>
            </Card>
            <Card>
              <FaFootballBall className="icon" />
              <h3 className="card-title">International Football Tournaments</h3>
              <p>Captained Kenkre India football team in Austria, Hungary, Spain, and Portugal. Won bronze for India in Austria.</p>
            </Card>
            <Card>
              <FaAward className="icon" />
              <h3 className="card-title">Aditya Anand Agarwal Trophy Scholarship</h3>
              <p>Outgoing School Captain, Xth Standard (2021)</p>
            </Card>
          </div>
        </section>

        <section id="hobbies" className="section">
          <h2 className="section-title">Hobbies</h2>
          <div className="card-container">
            <Card>
              <FaMusic className="icon" />
              <h3 className="card-title">Music</h3>
              <p>Proficient at playing the Violin at an advanced level</p>
            </Card>
            <Card>
              <FaCamera className="icon" />
              <h3 className="card-title">Photography</h3>
              <p>Professional Certificate in Photography and Digital Imaging</p>
            </Card>
            <Card>
              <FaBiking className="icon" />
              <h3 className="card-title">Riding Bikes</h3>
              <p>Owns a 1988 Yezdi D250 classic motorcycle</p>
            </Card>
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Get in Touch</h2>
          <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <Input type="email" id="email" placeholder="name@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <Textarea id="message" rows={3} />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
