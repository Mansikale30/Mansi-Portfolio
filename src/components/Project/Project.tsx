import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
// @ts-ignore



export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Indian Culture & Heritage </h3>
              <p>
              Developed an interactive app for Gen Z to explore India, featuring maps, hotels, ATMs, and more.
Focused on a user-friendly design with real-time location-based services for seamless travel.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Android </li>
                <li>Firebase</li>
                <li>Google Maps API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>AGB Automation </h3>
              <p>
              Fine-tuned full-stack web app with dynamic UI and RESTful backend to showcase industrial automation services.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TailwindCSS</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
            </header>
            <div className="body">
              <h3>Netflix</h3>
              <p> Developed a responsive Netflix clone with dynamic content rendering and seamless API integration to enhance user engagement. Implemented a clean, user-friendly interface to deliver an intuitive streaming experience.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React.js</li> <li>HTML</li> <li>CSS</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title> 
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
            </header>
            <div className="body">
              <h3>Xplore </h3>
              <p>
              Designed a responsive travel website with interactive UI and custom styling.
Integrated destination data for dynamic content display.
Optimized layout for cross-device accessibility.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>BootStrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        

      </div>
    </Container>
  );
}