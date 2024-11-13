import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjay Rawat </span>
            from <span className="purple"> Uttarakhand, India.</span>
            passionate self-taught web developer based in India. With a
            background in commerce and a strong determination to excel in the
            tech industry, I've learned the skills required for both frontend
            and backend development.{" "}
          </p>{" "}
          <p>
            {" "}
            I specialize in building dynamic and interactive web applications
            using the MERN stack (MongoDB, Express.js, React, and Node.js),
            along with HTML, CSS, and JavaScript. My learning journey has been
            fueled by online resources, YouTube tutorials, and countless hours
            of hands-on coding.{" "}
          </p>{" "}
          <br />
          <br />
          <p>
            {" "}
            I believe in the power of creativity and collaboration, and I'm
            always eager to take on new challenges and contribute to exciting
            projects. Let's connect and create
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            ""Creating with purpose, transforming ideas into impactful solutions." "{" "}
          </p>
          <footer className="blockquote-footer">Sanjay Rawat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
