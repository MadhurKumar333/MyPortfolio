import React, { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/your-logo3.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/codeforces-white.svg";
import navIcon4 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

const MyNavbar = () => {
  //creating functional component
  const [activeLink, setActiveLink] = useState("home"); //to check on which link we are on at a moment
  const [scrolled, setScrolled] = useState(false); //whether user has scrolled or not

  useEffect(() => {
    //useEffect hook is used to add an event listener to the scroll event of the window.
    //function to determine what happen on scroll // we store this information so that we can change bg color on scrolling
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll); //it will be fired on scroll
    return () => window.removeEventListener("scroll", onScroll); //we have to remove it when component get remove from dom
  }, []);

  const onUpdateActiveLink = (value) => {//to check which link is currently active
    setActiveLink(value);
  };
  //wrapping the MyNavbar component with the Router component enables the usage of routing features. It allows you to use the href prop on the Nav.Link components to define the target paths for navigation.
  return (
    <Router>
      <BootstrapNavbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <BootstrapNavbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>

          </BootstrapNavbar.Toggle>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skill"
                className={
                  activeLink === "skill" ? "active navbar-link" : "navbar-link" //f activeLink is equal to "skills", it applies the CSS class "active navbar-link".Otherwise, it applies the CSS class "navbar-link".
                }
                onClick={() => onUpdateActiveLink("skill")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "project"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("project")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/madhur-kumar-b70849226/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/MadhurKumar333">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://codeforces.com/profile/mad__33_">
                  <img src={navIcon3} alt="" />
                </a>
                <a href="https://www.instagram.com/kamboj_madhur/">
                  <img src={navIcon4} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                {/*The HashLink component is used to create a link that navigates to a specific section identified by the provided hash (#connect).
                For example, if you have a section with the id attribute set to connect, the HashLink will scroll the page to that section when the button is clicked. */}
                <button className="vvd" onClick={() => console.log("connect")}>
                  <span>Let's Connect</span> {/*take us to contact form*/}
                </button>
              </HashLink>
            </span>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </Router>
  );
};

export default MyNavbar;
