import { useInView } from "react-intersection-observer";
import VideoHub from "../../assets/Hub350Video.mp4";
import Java from "../../assets/rc24-duke-java-mascot.webp";
import RPA from "../../assets/rpa.png";

function Portfolio() {
  const { ref: firstItemIframe, inView: firstItemIframeIsVisibe } = useInView();
  const { ref: secondtItemIframe, inView: secondItemIframeIsVisibe } =
    useInView();
  const { ref: javaItemframe, inView: javaItemframeIsVisibe } = useInView();
  const { ref: canadaItemframe, inView: canadaItemframeIsVisibe } =
    useInView();

  return (
    <>
      <section className="container">
        <div className="portfolio--container" id="portfolioSection">
          <div>
            <article className="portfolio--article">
              <h2>Portfolio</h2>
              <p>
                In this section, we will thoroughly examine my main project,
                exploring the technologies I utilized for development. I will
                also discuss aspects I would prefer to have done differently and
                outline the next steps for this project
              </p>
            </article>
            <div>
              <ul role="list" className="portfolio--ul">
                <li className="portfolio--container--color">
                  <h3>
                    Automating Student Transcript Upload Using
                    <span className="special--text"> RPA</span>
                  </h3>
                  <div className="portfolio--grid">
                    <article>
                      <p>
                        <span className="special--text">Tech stack : </span>
                        Ui Path, Outlook, Jira Software
                      </p>
                      <p>
                        <span className="special--text">Description : </span>
                        {`Our mission is to collaboratively work towards the
                        successful implementation of the RPA solution, ensuring
                        the seamless automation of the transcript upload process
                        to Jira. We are committed to delivering a high-quality
                        solution that meets the client's requirements and
                        contributes to the efficiency of the HR department.`}
                      </p>
                    </article>
                    <div
                      ref={canadaItemframe}
                      className={`portfolio--item--color item--second ${
                        canadaItemframeIsVisibe ? "isVisible" : ""
                      }`}
                    >
                      <img src={RPA} alt="RPA logo" />
                    </div>
                  </div>

                  <div className="item--button">
                    <button
                      className="button"
                      onClick={() => {
                        window.open(
                          "https://docs.google.com/presentation/d/1aWWawaEcxClS903a1a00HyQcBjHgHjuml-m8cUbytYQ/edit?usp=sharing",
                          "_blank"
                        );
                      }}
                    >
                      Go to Slides
                    </button>
                  </div>
                </li>
                <li className="portfolio--container--color">
                  <h3>
                    Hub350{" "}
                    <span className="special--text">Interactive Map</span>
                  </h3>
                  <div className="portfolio--grid">
                    <article>
                      <p>
                        <span className="special--text">Tech stack : </span>
                        React JS, SASS, MUI and Firebase, mapbox.
                      </p>
                      <p>
                        <span className="special--text">Description : </span> I
                        developed an interactive and responsive map website
                        using React, Material MUI, and Mapbox, adhering to best
                        practices. In a fast-paced environment, I led the
                        creation of a secure and scalable backend with{" "}
                        <span className="special--text">
                          Google Cloud and Firebase
                        </span>{" "}
                        . I effectively translated business objectives into code
                        and excelled in producing clear, accessible
                        documentation
                      </p>
                    </article>
                    <div
                      ref={firstItemIframe}
                      className={`portfolio--item--color item--first ${
                        firstItemIframeIsVisibe ? "isVisible" : ""
                      }`}
                    >
                      <video loop src={VideoHub} controls="controls" autoPlay />
                    </div>
                  </div>
                  <button
                    className="button"
                    onClick={() => {
                      window.open(
                        "https://github.com/DiegoAuzaDev/Hub350",
                        "_blank"
                      );
                    }}
                  >
                    Go to Github
                  </button>
                </li>
                <li className="portfolio--container--color">
                  <h3>
                    Movi<span className="special--text">e+</span>
                  </h3>
                  <div className="portfolio--grid">
                    <div
                      ref={secondtItemIframe}
                      className={`portfolio--item--color item--second ${
                        secondItemIframeIsVisibe ? "isVisible" : ""
                      }`}
                    >
                      <iframe
                        className={`portfolio--movie`}
                        src="https://diegoauza-movie-js.netlify.app/#/movie/Thor"
                        id="portfolio--movie"
                      ></iframe>
                    </div>
                    <article>
                      <p>
                        <span className="special--text">Tech stack : </span>
                        Vanilla JavaScript, HTML and CSS.
                      </p>
                      <p>
                        <span className="special--text">Description : </span>{" "}
                        When I was in my first semester, I developed my final
                        project using all the knowledge I had learned about
                        about <span className="special--text">DOM</span>,{" "}
                        <span className="special--text">events</span>,{" "}
                        <span className="special--text"> fetch</span> and
                        <span className="special--text"> History API</span>.
                      </p>
                      <p>
                        It is a{" "}
                        <span className="special--text">
                          {" "}
                          mobile first web app
                        </span>{" "}
                        hat lets the user search for movies or TV shows and then
                        see the full cast for the movie or show
                      </p>
                      <p className="special--text">Features : </p>
                      <ul>
                        <li>
                          <p>
                            The user should be able to easily tell if they are
                            searching for a movie or a show
                          </p>
                        </li>
                        <li>
                          <p>
                            The user should be able to easily tell if they
                            viewing search results for a movie or a show.
                          </p>
                        </li>
                        <li>
                          <p>
                            If the image value for a movie, show, or actor is
                            null then there needs to be a placeholder image in
                            the card.
                          </p>
                        </li>
                      </ul>
                    </article>
                  </div>
                  <div className="item--button">
                    <button
                      className="button"
                      onClick={() => {
                        window.open(
                          "https://github.com/DiegoAuzaDev/movie_JavaScript",
                          "_blank"
                        );
                      }}
                    >
                      Go to Github
                    </button>
                    <button
                      className="button"
                      onClick={() => {
                        window.open(
                          "https://diegoauza-movie-js.netlify.app/#/movie/Thor",
                          "_blank"
                        );
                      }}
                    >
                      Visit Movie+ Page
                    </button>
                  </div>
                </li>
                <li className="portfolio--container--color">
                  <h3>
                    Mastering <span className="special--text">Java</span>
                  </h3>
                  <div className="portfolio--grid">
                    <div
                      ref={javaItemframe}
                      className={`portfolio--item--color item--second ${
                        javaItemframeIsVisibe ? "isVisible" : ""
                      }`}
                    >
                      <img src={Java} alt="Java logo" />
                    </div>
                    <article>
                      <p>
                        <span className="special--text">Tech stack : </span>
                        Java
                      </p>
                      <p>
                        {`This repo has two main folders, the first one is
                        Challenges where you can find all the challenges I had
                        completed during the time I was taking the Udemy course
                        and some extra taken from the book as well. The second
                        folder "MasterClass" contains code related with core
                        java lessons`}
                      </p>

                      <p className="special--text">Resources : </p>
                      <a href="https://www.udemy.com/course/java-the-complete-java-developer-course/?couponCode=ST19MT60324">
                        Java 17 Masterclass: Start Coding in 2024
                      </a>
                      <br />
                      <a href="https://horstmann.com/corejava/">
                        Core Java Volume I Fundamentals
                      </a>
                    </article>
                  </div>
                  <div className="item--button">
                    <button
                      className="button"
                      onClick={() => {
                        window.open(
                          "https://github.com/DiegoAuzaDev/Mastering-Java",
                          "_blank"
                        );
                      }}
                    >
                      Go to Github
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Portfolio;
