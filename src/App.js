import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Ryan Studioz</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/syllabus">Syllabus</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Home() { return (<div className="text-center p-5 text-white bg-dark"><h1>Ryan Studioz</h1><p>Institute of Photography</p></div>); }
function About() { return (<div className="container p-4"><h2>About Us</h2><p>Founded by Mr. Rooban Selvaraj with 8+ years of experience in wedding and event photography.</p></div>); }
function Courses() { return (<div className="container p-4"><h2>Courses</h2><p>Photo & Videography, Photoshop, Video Editing</p></div>); }
function Syllabus() { return (<div className="container p-4"><h2>Syllabus</h2><ul><li>Camera settings</li><li>Lighting</li></ul></div>); }
function Contact() { return (<div className="container p-4"><h2>Contact Us</h2><p>Use our Google Form</p></div>); }
function Footer() { return (<footer className="bg-dark text-white text-center p-2">©2025 Ryan Studioz</footer>); }

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}