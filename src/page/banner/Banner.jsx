import img from "../../assets/diego_Auza_Photo.webp";
import git from "../../assets/Github_icon.webp"
import link from "../../assets/LinkedIn_icon.webp"
function Banner(){
    return (
      <>
        <section className="container">
          <div className="container--banner">
            <div className="banner--background">
              <div className="banner--picture">
                <img src={img} alt="Diego Auza picture" />
              </div>
              <div className="banner--content">
                <div>
                  <p>Diego Auza</p>
                  <h1>Mobile and Web developer</h1>
                </div>
                <ul className="banner--links">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/diego-auza-a64b1b253/"
                      aria-label="go Diego's linkedin profile"
                    >
                      <img src={link} alt="LinkeIn logo" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/DiegoAuzaDev"
                      aria-label="go Diego's github account"
                    >
                      <img src={git} alt="Github logo" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default Banner;