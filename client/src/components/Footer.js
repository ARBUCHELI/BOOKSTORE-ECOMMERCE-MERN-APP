import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Me</h4>
          <p>Freelancer Full-Stack Web Developer with more than 15 years of experienceo.</p>
          <a className="link-company" href="https://bucheli-web-personal-portfolio-website.netlify.app/" target="_blank" rel="noopener noreferrer">Bucheli Software Development</a>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://bucheli-web-personal-portfolio-website.netlify.app/projects" target="_blank" rel="noreferrer">Products</a></li>
            <li><a href="https://bucheli-web-personal-portfolio-website.netlify.app/contact" target="_blank" rel="noreferrer">Contact Me</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/andres.regaladobucheli/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://x.com/andresfrbuch/status/1681977710984167424" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/in/andresregaladobucheli/?locale=en_US" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bucheli Software Development. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;