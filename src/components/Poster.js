import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Poster() {
  const [lupnum, setLupnum] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const toChange = [
    "I am Tsione Abraham",
    "I am Software Developer",
    "FullStack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(400 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = lupnum % toChange.length;
    let fullText = toChange[i];
    let updatedText = isDeleted
      ? fullText.substring(0, text.length - 2)
      : fullText.substring(0, text.length + 2);

    setText(updatedText);

    if (isDeleted) {
      setDelta((pervDelta) => pervDelta / 2);
    }

    if (!isDeleted && updatedText === fullText) {
      setIsDeleted(true);
      setIndex((pervIndex) => pervIndex - 1);
      setDelta(period);
    } else if (isDeleted && updatedText === "") {
      setIsDeleted(false);
      setLupnum(lupnum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((pervIndex) => pervIndex + 1);
    }
  };

  return (
    <section className="poster" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Hi there!</span>
            <h1>
              '<span className="wrap">{text}</span>'
            </h1>
            <p>
              {" "}
              I specialize in creating websites that are not only visually
              stunning but also user-friendly and functional.
            </p>
            <button onClick={() => console.log("connect")}></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <img src={Header} alt="Header" /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Poster;
