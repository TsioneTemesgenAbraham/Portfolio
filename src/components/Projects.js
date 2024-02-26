import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { PCards } from "./PCards";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects = [
    {
      title: "STAR APP",
      description:
        "An app where students can record the skills based on the STAR(Situation, Task, Action and Result) method.",
      imgUrl: require("../assets/Star.png"),
      href: "https://cyf-tsionetemesgenabraham-tv.netlify.app/",
      alt: "",
    },
    {
      title: "TV Show",
      description:
        "An App where you can search for TV shows or select from the dropdown menu.",
      imgUrl: require("../assets/T.png"),
      href: "https://cyf-tsionetemesgenabraham-tv.netlify.app/",
      alt: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div>
                <h2>Projects</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => {
                          return <PCards key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
