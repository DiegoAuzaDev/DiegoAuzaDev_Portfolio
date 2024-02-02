import img from "../../assets/diego_Auza_Photo.webp";
import git from "../../assets/Github_icon.webp"
import link from "../../assets/LinkedIn_icon.webp"
import backimg from "../../assets/backImage.webp";
function Banner(){
    const backgroundImageStyle = {
      backgroundImage: `url(${backimg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "90vh",
      display : "flex",
    };
    return (
      <div  style={backgroundImageStyle}>
        <div className="banner--color">
          <section className="container">
            <div className="container--banner">
              <div className="banner--background">
                <img src={img} alt="Diego Auza picture" />
              </div>
              <div className="banner--content">
                <div className="banner--text">
                  <p>Hello, I am Diego Auza</p>
                  <h1>Mobile and Web developer</h1>
                </div>
                <ul className="banner--links" role="list">
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
                      <img src={git} alt="Github logo" className=""/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
}
export default Banner;