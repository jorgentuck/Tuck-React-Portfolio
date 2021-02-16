import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { H1, Hr } from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import ProjectCard from '../components/ProjectCard';
import projects from '../projects.json';

export default function Portfolio() {
  return (
    <Col sm={12} md={10} lg={8}>
      <Jumbotron>
        <H1>Portfolio</H1>
        <Hr />
        <Container fluid rowHeight>
          <Row>
            {projects.map(pro => {
              return (
                <ProjectCard
                  key={pro.id}
                  title={pro.title}
                  imageSrc={pro.imageSrc}
                  repolink={pro.repolink}
                  sitelink={pro.sitelink}
                />
              )
            })}
          </Row>
        </Container>
      </Jumbotron>
    </Col>
  )
}
