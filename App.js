'use client'

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Trophy, Football, Award, Music, Camera, Bicycle } from 'lucide-react'
import { Zap, ZapOff, ZoomIn, ZoomOut } from 'lucide-react'

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = `${theme}-mode`
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission logic here
    alert("Form submitted!")
  }



  return (
    <React.Fragment>
      <Head>
        <title>Joshua Mendes | Achievements & Hobbies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <header>
        <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme} sticky-top`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Joshua Mendes</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#achievements">Achievements</a></li>
                    <li><a className="dropdown-item" href="#hobbies">Hobbies</a></li>
                    <li><a className="dropdown-item" href="#contact">Contact</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-secondary" onClick={toggleTheme}>
                    Toggle Theme
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mt-5">
        {/* About Section */}
        <section id="about" className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4"><b>About Joshua Mendes</b></h1>
              <p className="lead">
                Studying in the second year of ECS Engineering at Fr Conceicao Rodrigues College of Engineering. Aspiring Software Development Engineer.
              </p>
            </div>
            <div className="col-md-3">
              <Image src="/placeholder.svg" width={300} height={300} className="img-fluid rounded" alt="Joshua Mendes" />
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-5">
          <h1 className="text-center mb-4">Achievements</h1>
          <div className="row">
            {[
              { icon: Trophy, title: 'Elected School Captain', text: "St. Mary's School ICSE: Academic Year 20-21", color: 'primary' },
              { icon: Football, title: 'International Football Tournaments', text: 'Captained Kenkre India football team in Austria, Hungary, Spain, and Portugal. Won bronze for India in Austria.', color: 'success' },
              { icon: Award, title: 'Aditya Anand Agarwal Trophy Scholarship', text: 'Outgoing School Captain, Xth Standard (2021)', color: 'warning' },
            ].map((achievement, index) => (
              <div key={index} className="col-md-4">
                <div className={`card text-center border-${achievement.color} mb-3`}>
                  <div className="card-body">
                    <achievement.icon className={`text-${achievement.color} mb-3`} size={48} />
                    <h2 className="card-title">{achievement.title}</h2>
                    <p className="card-text">{achievement.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="mb-5">
          <h1 className="text-center mb-4">Hobbies</h1>
          <div className="row">
            {[
              { icon: Music, title: 'Music', text: 'Proficient at playing the Violin at an advanced level', color: 'danger' },
              { icon: Camera, title: 'Photography', text: 'Professional Certificate in Photography and Digital Imaging', color: 'info' },
              { icon: Bicycle, title: 'Riding Bikes', text: 'Owns a 1988 Yezdi D250 classic motorcycle', color: 'dark' },
            ].map((hobby, index) => (
              <div key={index} className="col-md-4">
                <div className={`card text-center border-${hobby.color} mb-3`}>
                  <div className="card-body">
                    <hobby.icon className={`text-${hobby.color} mb-3`} size={48} />
                    <h2 className="card-title">{hobby.title}</h2>
                    <p className="card-text">{hobby.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-5">
          <h1 className="text-center mb-4">Get in Touch</h1>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows={3} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        body.light-mode {
          background-color: #f8f9fa;
          color: #343a40;
        }
        body.dark-mode {
          background-color: #343a40;
          color: #f8f9fa;
        }
        .card:hover {
          transform: scale(1.05);
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </React.Fragment>
  )
}
