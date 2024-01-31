function About(){
    return (
      <>
        <section className="container">
          <div className="about--container">
            <article className="about--article">
              <h2>About Me</h2>
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
            <div className="about--experience">
              <h2>My experience</h2>
              <ul>
                <li>
                  <h3 className="experience--title">
                    Program Assistance, Part-time.
                  </h3>
                  <article>
                    <div>
                      <a
                        href="https://www.algonquincollege.com/"
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
                        Supporting students in the Mobile App Design program by
                        assisting with coding challenges and reinforcing
                        fundamental development concepts. Conducting engaging
                        lab sessions to enhance comprehension of mobile and web
                        development, fostering an environment where questions
                        are welcomed. Collaborating with professors in
                        fast-paced classes to address code issues and ensure a
                        smooth learning experience for everyone.
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