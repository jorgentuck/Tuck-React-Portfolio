import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { H1, Hr } from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projects from '../projects.json';

export default function Portfolio() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={10} lg={8}>
          <div className="jumbotron bg-white">
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
          </div>
        </Col>
      </Row>
    </Container>

  )
}
