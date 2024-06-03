
import { useInView } from "react-intersection-observer";



// eslint-disable-next-line react/prop-types
function About(){

const { ref: readSectionRef, inView: readIsVisibe } = useInView();

    return (
      <>
        <section className="container">
          <div className="about--container">
            <article className="about--article">
              <h2 id="aboutSection">About Me</h2>
            </article>
            <div>
              <p>
                Hello! I am Diego Auza, and I am happy to share the projects I
                have been working on. I am a Mobile and Web developer who loves
                learning and getting better at what I do
              </p>
              <p>
                I mainly work on mobile apps using
                <span className="special--text"> Flutter</span> and
                <span className="special--text"> React Native</span>, and for
                websites, I use
                <span className="special--text"> HTMl</span>,
                <span className="special--text"> CSS</span>, and popular
                frameworks like <span className="special--text"> React</span>{" "}
                and
                <span className="special--text"> Angular</span>. I also have
                some experience with backend technologies like
                <span className="special--text"> Firebase</span>,
                <span className="special--text"> Node JS</span>,
                <span className="special--text"> Java</span>,
                <span className="special--text"> MongoDB</span>, and
                <span className="special--text"> Redis</span>.
              </p>
              <p>
                But it is not just about tech stuff, I strongly believe that
                being a good developer means having good people skills too. My
                colleagues say I am a
                <span className="special--text"> team player</span> ready to
                <span className="special--text"> help </span>
                out.
              </p>
            </div>

            <div
              ref={readSectionRef}
              className={`about--experience ${readIsVisibe ? "isVisible" : ""}`}
            >
              <div className="title--button">
                <h2>My experience</h2>
              </div>
              <ul>
                <li>
                  <h3 className="experience--title">Development Lead</h3>
                  <article>
                    <div>
                      <a
                        href="https://www.cse-cst.gc.ca/en"
                        aria-label="Go to Communications Security Establishment Canada Web page"
                        className="special--links"
                      >
                        Location
                      </a>
                      <p>Communications Security Establishment</p>
                    </div>
                    <div>
                      <p className="special--text">Description</p>
                      <p>
                        {`This project aims to automate the process of uploading
                        students' transcripts to Jira for the Human Resources
                        Student Program at the Communication Security
                        Establishment. The team will be implementing Robotic
                        Process Automation (RPA) using UiPath to enhance
                        operational efficiency, minimize manual intervention,
                        and reduce errors associated with handling student
                        transcripts`}
                      </p>
                    </div>
                  </article>
                </li>
                <li>
                  <h3 className="experience--title">
                    Program Assistance, Part-time.
                  </h3>
                  <article>
                    <div>
                      <a
                        href="https://www.algonquincollege.com/"
                        aria-label="Go to Algonquin College webpage"
                        className="special--links"
                      >
                        Location
                      </a>
                      <p>
                        Algonquin College of Applied Arts and Technology ·
                        Contract
                      </p>
                    </div>
                    <div>
                      <p className="special--text">Description</p>
                      <p>
                        Supporting Mobile App Design students by aiding with
                        coding challenges, reinforcing development concepts, and
                        conducting engaging lab sessions. Collaborating with
                        professors to address code issues in fast-paced classes,
                        fostering a welcoming environment for questions and
                        ensuring a smooth learning experience.
                      </p>
                    </div>
                  </article>
                </li>
                <li>
                  <h3 className="experience--title">
                    Full-stack Developer, Part-time.
                  </h3>
                  <article>
                    <div>
                      <a
                        href="https://www.kanatanorthba.com/"
                        className="special--links"
                        aria-label="Go to katanata north webpage"
                      >
                        Location
                      </a>
                      <p>Kanata North Business Association</p>
                    </div>
                    <div>
                      <p className="special--text">Description</p>
                      <p>
                        Developed an authenticated web app using Mapbox, React,
                        Firebase, and MUI to display companies in The Kanata
                        Business Park, with role-based access for enhanced
                        security and functionality
                      </p>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
}
export default About;