import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/3527178.jpg";
import projImg2 from "../assets/img/portfolio.jpg";
import projImg3 from "../assets/img/Checklist-2.jpg";
import projImg4 from "../assets/img/2810266.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

 const Projects = () => {
  const projects = [
    {
      title: "ConnectChat",
      description: "Innovative Real-Time MERN Chat Application ",
      imgUrl: projImg1,
    },
    {
      title: "Dynamic Portfolio Showcase",
      description: "Showcasing Skills and Creativity with Interactive Design",
      imgUrl: projImg2,
    },
    {
      title: "To-Do List",
      description: " Streamline Your Workflow with an Intuitive To-Do List",
      imgUrl: projImg3,
    },
    {
      title: "Analog Clock",
      description: "Design & Development",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have successfully completed a range of projects that
                    showcase my skills and creativity. These include Connect
                    Chat, a user-friendly chat application, a functional to-do
                    list app, a captivating portfolio website, and an elegant
                    analog clock. These projects highlight my expertise in
                    real-time messaging, task management, web development, and
                    front-end design.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background-image"
      ></img>
    </section>
  );
 };
export default Projects;
