import { Container, Row, Col } from "react-bootstrap";
import Instagram from "../assets/instagram-white-icon.svg";
import Facebook from "../assets/facebook-app-round-white-icon.svg";
import Linkedin from "../assets/linkedin-app-white-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={Facebook} alt="Icon" />
              </a>
              <a href="#">
                <img src={Instagram} alt="Icon" />
              </a>
              <a href="#">
                <img src={Linkedin} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
