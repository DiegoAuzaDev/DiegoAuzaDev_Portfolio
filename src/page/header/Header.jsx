
function Header(){
    return (
      <div className="container--color">
        <header className="container">
          <div className="container--header">
            <div>
              <a href="*">
                <p>Diego Auza</p>
              </a>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="" aria-label="Go to the about section">
                    About
                  </a>
                </li>
                <li>
                  <a href="" aria-label="Go to the skills section">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="" aria-label="Go to the portfolio section">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="" aria-label="Go to the contact section">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
}
export default Header