import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reactf from "../../Assets/Projects/reactf.webp";
import blog from "../../Assets/Projects/blog.jpg";
import books from "../../Assets/Projects/books.png";
import task from "../../Assets/Projects/task.png";
import Shopping from "../../Assets/Projects/Shopping.png";
import cinema_4U from "../../Assets/Projects/cinema_4U.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath ={task}
              isBlog={false}
              title="Task Management App Mern"
              description="A comprehensive task management application designed to enhance productivity through intuitive task tracking and management. This full-stack application includes features like a scrum board, task addition form, user authentication, and premium book access"
              ghLink="https://github.com/ssrlife424/Task_Management_Mern_App_JWT/"
              demoLink="https://taskmanagementjwtmern.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinema_4U}
              isBlog={false}
              title="Cinema_4U"
              description="A dynamic and responsive movie information app built using React, Redux, and Tailwind CSS. This application fetches and displays detailed information about movies and TV shows, including release dates, views, ratings, and trending categories, using The Movie Database (TMDB) API."
              ghLink="https://github.com/ssrlife424/Cinema_4U"
              demoLink="https://cinema-4-u.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={books}
              isBlog={false}
              title="BooksLibrary"
              description=" Developed a full-stack book library application with both frontend and backend capabilities. The application allows users to sign up, log in, and giving access only to the login users books."
              ghLink="https://github.com/ssrlife424/Books-Library"
              demoLink="https://books-library-alpha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactf}
              isBlog={false}
              title="React FireBase Auth"
              description="Developed a simple yet robust application using React and Firebase for user authentication. The app enables users to register, log in, and manage their accounts using email and password with the helop of firebase storage"
              ghLink="https://github.com/ssrlife424/react-firebase-auth"
              demoLink="https://react-firebase-auth-teal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shopping}
              isBlog={false}
              title="Shopping Cart"
              description="This web application is a straightforward yet effective demonstration of a shopping cart system. Built with React and integrated with an API, this app enables users to add products to their cart, view detailed product information, and proceed to checkout. The system is designed to be intuitive and logically sound, showcasing the fundamental features of an e-commerce platform."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://shopping-cart-green-seven-21.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="React-Redux Blog App"
              description="This web application serves as a simplified yet functional demonstration of a blog management system. It allows users to create, edit, and delete blog posts seamlessly. Built with the powerful combination of React and Redux, this app ensures efficient state management and a smooth user experience. The application is designed with a focus on user-friendliness and performance, showcasing my proficiency in modern web development technologies."
              ghLink="https://github.com/ssrlife424/Redux-Blog-App"
              demoLink="https://redux-blog-app-sand.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
