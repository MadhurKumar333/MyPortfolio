import { useState, useEffect } from "react";//useState and useEffect are React hooks used for managing state and performing side effects in functional components.
import { Col, Container, Row ,Nav} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { BrowserRouter as Router } from "react-router-dom";

const Banner = () => {
  // State variables
  const [loopNum, setLoopNum] = useState(0); //loopNum keeps track of the loop number for rotating words.
  const [isDeleting, setIsDeleting] = useState(false); //isDeleting indicates whether the text is currently being deleted.
  const [text, setText] = useState(""); //text stores the current text being displayed.
  const [index, setIndex] = useState(1); //index represents the index of the current word in the toRotate array.
  const [delta, setDelta] = useState(300 - Math.random() * 100); //we use delta to determine how fast one letter comes after the first one is typed //delta determines the delay between typing each letter.//calculates a random number between 0 and 1 using Math.random(),
  const toRotate = ["Web Developer", "Coder", "TT Player"]; //words which i would like to display
  const period = 2000; //indicates how much time passes between one extra letter being typed//period specifies the duration of the full rotation cycle.

  //function responsible for taking care of typing and deleting
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);//when component is unmount or of no use we have to clear it
    };
  }, [text]);
  // Function for typing and deleting effect
  const tick = () => {
    let i = loopNum % toRotate.length; //i is the index as to like from the array we are currently picking and as loop numnber is increasing after certain time we will have to go to first element and repeat
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1); //if deleting and not deleting case

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);//setting delta to it's normal pace
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  // Render the component
  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-tems-center">
            {/*for the row we want items to be center and bootstrap will take care of styling */}
            <Col xs={12} md={6} xl={7}>
              {/*for extra small 12 medium 6 and extra large 7*/}
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>
                      {`Hi I'm Madhur `} <span className="wrap">{text}</span>
                    </h1>
                    <p>
                      With a passion for coding and problem-solving, I exhibit
                      ingenuity and analytical prowess. Meticulously attending
                      to details and keeping up with industry trends, I create
                      visually stunning online experiences. Beyond coding, I
                      excel in table tennis, demonstrating lightning-fast
                      reflexes, strategic thinking, finesse, and precision.
                    </p>
                    <Nav.Link href="#connect">
                      <button onClick={() => console.log("connect")}>
                        Let's Connect
                        <ArrowRightCircle size={25} />
                      </button>
                    </Nav.Link>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
export default Banner;
