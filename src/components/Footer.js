import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/your-logo3.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/codeforces-white.svg";
import navIcon4 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/madhur-kumar-b70849226/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/MadhurKumar333">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://codeforces.com/profile/mad__33_">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/kamboj_madhur/">
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p>Madhur | Portfolio &#169; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
