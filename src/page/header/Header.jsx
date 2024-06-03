/* eslint-disable react/prop-types */
import { scroller } from "react-scroll";
function Header(){

  const scrollOptions = {
    duration: 750,
    smooth: true,
  };
  const scrollToAboutSection = () => {
    scroller.scrollTo("aboutSection", scrollOptions);
  };
  const scrollToPortfolioSection = ()=> {
     scroller.scrollTo("portfolioSection", scrollOptions);
  }

    return (
      <>
        <header className="container">
          <div className="container--header">
            <div className="header--title">
              <a
                target="__blank"
                href="https://www.linkedin.com/in/diego-auza-a64b1b253/"
                role="link"
                aria-label="Go to Diego's linkedin profile"
              >
                Diego Auza
              </a>
            </div>
            <nav>
              <ul role="list">
                {/* <li>
                  <a href="" aria-label="Go to the contact section" role="link">
                    Contact
                  </a>
                </li> */}

                <li>
                  <a
                    onClick={scrollToPortfolioSection}
                    aria-label="Go to the portfolio section"
                    role="link"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    onClick={scrollToAboutSection}
                    aria-label="Go to the about section"
                    role="link"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
}
export default Header