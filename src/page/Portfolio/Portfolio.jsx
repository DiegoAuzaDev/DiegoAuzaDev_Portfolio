import { useInView } from "react-intersection-observer";

function Portfolio() {
  const { ref: firstItemIframe, inView: firstItemIframeIsVisibe } = useInView();
  const { ref: secondtItemIframe, inView: secondItemIframeIsVisibe } = useInView();
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
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <div className="portfolio--grid">
                    <article>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore quo, quos libero similique minus dolor quibusdam
                        vero perspiciatis corporis culpa consequuntur ex
                        eligendi doloremque veritatis laboriosam animi nobis,
                        iusto voluptate fugit! Odio temporibus praesentium, sunt
                        quaerat suscipit exercitationem reprehenderit illum
                        natus tenetur necessitatibus dolor facilis repellat
                        pariatur quasi quisquam hic.
                      </p>
                    </article>
                    <div
                      ref={firstItemIframe}
                      className={`portfolio--item--color item--first ${
                        firstItemIframeIsVisibe ? "isVisible" : ""
                      }`}
                    >
                      <span className="material-symbols-outlined">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <button className="button">Go to Github</button>
                </li>
                <li className="portfolio--container--color">
                  <h3>Lorem ipsum dolor sit amet.</h3>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore quo, quos libero similique minus dolor quibusdam
                        vero perspiciatis corporis culpa consequuntur ex
                        eligendi doloremque veritatis laboriosam animi nobis,
                        iusto voluptate fugit! Odio temporibus praesentium, sunt
                        quaerat suscipit exercitationem reprehenderit illum
                        natus tenetur necessitatibus dolor facilis repellat
                        pariatur quasi quisquam hic.
                      </p>
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
                          "https://github.com/DiegoAuzaDev/movie_JavaScript",
                          "_blank"
                        );
                      }}
                    >
                      Visit Movie+ Page
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
