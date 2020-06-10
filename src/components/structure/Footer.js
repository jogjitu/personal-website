import React from "react";

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: "#000080" }}>
      <div className="content has-text-centered has-text-white">
        <p>
          Built to <i className="fas fa-user-graduate	"></i> by{" "}
          <a href="https://github.com/jogjitu" className="has-text-white">
            <strong>Jitendra Jogeshwar</strong>
          </a>
        </p>
        <p>
          <img
            width="512"
            height="96"
            src="https://bulma.io/images/made-with-bulma--semiwhite.png"
            className="bulma-image"
            alt=""
          />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
