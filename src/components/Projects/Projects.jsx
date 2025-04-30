import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectStyle";
import ProjectCard from "../Card/ProjectCard";
import { projects } from "../../data/constant";

function Projects({openModal , setOpenModal}) {
  const [toggle, setToggle] = useState("all");


  return (
    <Container id="projects">
    <Wrapper>
      <Title>Projects</Title>
      <Desc>
        I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
      </Desc>
      <ToggleButtonGroup >
        {toggle === 'all' ?
          <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          :
          <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
        }

        <Divider />

        {toggle === 'frontend web' ?
          <ToggleButton active value="frontend web" onClick={() => setToggle('frontend web')}>FRONTEND WEB</ToggleButton>
          :
          <ToggleButton value="frontend web" onClick={() => setToggle('frontend web')}>FRONTEND WEB</ToggleButton>
        }
        <Divider />
        {toggle === 'backend web' ?
          <ToggleButton active value="backend web" onClick={() => setToggle('backend web')}>BACKEND WEB</ToggleButton>
          :
          <ToggleButton value="backend web" onClick={() => setToggle('backend web')}>BACKEND WEB</ToggleButton>
        }
        <Divider />
        {/* <Divider />
        {toggle === 'web app' ?
          <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          :
          <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
        }
        <Divider />
        {toggle === 'android app' ?
          <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          :
          <ToggleButton value="android app" onClick={() => setToggle('android app')}>FRONTEND WEB'S</ToggleButton>
        }
        <Divider />
        {toggle === 'machine learning' ?
          <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>BACKEND PROJECT</ToggleButton>
          :
          <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>BACKEND PROJECT</ToggleButton>
        } */}
      </ToggleButtonGroup>
      <CardContainer>
      {toggle === 'all' && projects
            .map((project,index) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} index={index}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project,index) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} index={index}/>
            ))}
      </CardContainer>
    </Wrapper>
  </Container>
  )
}

export default Projects;
