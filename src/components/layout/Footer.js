import React from 'react';

function Footer() {
  return (
    <div>
        <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By: 
            <span className="text-warning font-weight-normal">
               Nora Attobra 
            </span>

             <i className="fab fa-react" /> React JS &amp; Redux JS App
            integrated with movies data API
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OMDB
            </a>
      </div>
    </div>
  );
}

export default Footer;