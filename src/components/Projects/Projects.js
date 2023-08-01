import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FcSupport } from "react-icons/fc";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import web_hosting from "../../Assets/Projects/web_hosting.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Services </strong> I offer
        </h1>
        <p style={{ color: "white" }}>
          See something you would like setup or need assistance with? <br />
          Prices discussed upon creating a ticket. Remote services offered 😃<br/>
          Submit a ticket by clicking on the Wrench below and creating an account
        </p> 

        <li className="social-icons">
                <a
                  href="https://leet-tech.atlassian.net/servicedesk/customer/portals"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FcSupport />
                </a>
         </li>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web_hosting.png}
              isBlog={false}
              title="Web & service hosting"
              description="Host numerous service like websites, VPNs, cloud storage, virtual machines. Also setup and manage domain names making it easier to access your resources remotely"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hardware repair"
              description="Desktop part replacement (GPU, CPU, MOBO, RAM, Storage). Laptop repair (screen, battery, keyboards)"
             // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Software installations"
              description="OS (operating systems) installs. All non licensed software (unless licesnse is provided)"
             // ghLink="https://github.com/soumyajit4419/Editor.io"
             // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Simple scripting"
              description="Using python to automate tasks I write scripts for windows and linux to execute certain commands"
            //  ghLink="https://github.com/soumyajit4419/Plant_AI"
             // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Tutoring"
              description="Tutor across many different topics including C++ and python. OOP (object orientated programming)"
             // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Special Serv"
              description="Install networking (routers, switches, Access Points/extenders), computer (inquire about special request), IOT equipment (smart devices, raspberry PIs)"
            //  ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
