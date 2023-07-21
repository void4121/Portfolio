import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ricardo Ramirez </span>
            from <span className="purple"> New york, NY.</span>
            <br /> I am a final year student pursuing Computer Science & Information Systems
            at John Jay of Criminal Justice.
            <br />
            Additionally, I am currently employed as a Junior Network Technician.
            <br />
            <br />
            Apart from IT, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> 3D printing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You have power over your mind — not outside events. 
            Realize this and you will find strength."{" "}
          </p>
          <footer className="blockquote-footer">Marcus Aurelius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
