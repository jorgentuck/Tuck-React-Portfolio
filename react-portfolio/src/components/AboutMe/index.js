import React from 'react';
import { Accordion, Button } from 'react-bootstrap';

export default function AboutMe() {
  return (
    <>
      <div>
        <img
          src={process.env.PUBLIC_URL + "images/Me.jpg"}
          alt="Me with my hair curled"
          className="img-fluid float-left mr-3 my-2"
        />
        <p>
          I am currently the CRM Support Specialist working for Roadster. I grew up in Provo, UT, and currently live in Lehi, UT. I enjoy Off-Roading, working on my cars, video games, and learning.
          </p>
        <p>
          My dream job is where I can work remotly and support my family,
          which is why becoming a web developer is such an attractive
          option.
          </p>
        <p>
          If you would like to follow me on social media I can be found on
            <a
            target="_blank"
            href="https://www.linkedin.com/in/james-jorgen-tuck"
            rel="noreferrer"
          > LinkedIn </a
          >
             and
            <a
            target="_blank"
            href="https://github.com/jamesjtuckbc"
            rel="noreferrer"
          > GitHub</a
          >
        </p>
      </div>


      <Accordion>
        {/* <button
        className="btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target="#collapseResume"
        aria-expanded="false"
        aria-controls="collapseResume"
      > */}
        <Accordion.Toggle as={Button} variant="button btn-dark" eventKey="0">
          View Resume
      </Accordion.Toggle>
        {/* </button> */}
        {/* <div className="collapse" id="collapseResume"> */}
        <Accordion.Collapse eventKey="0">
          <object
            data={process.env.PUBLIC_URL + "docs/JorgenResume.pdf"}
            type="application/pdf"
            width="100%"
            height="800px"
          >
            <p>
              It appears you don't have a PDF plugin for this browser. No
              biggie... you can
                <a href={process.env.PUBLIC_URL + "docs/JorgenResume.pdf"}
              > click here to download the PDF file.</a
              >
            </p>
          </object>
        </Accordion.Collapse>
        {/* </div> */}
      </Accordion>
    </>
  )
}