import React from 'react'
import { Col } from 'react-bootstrap';

export default function ProjectCard(props) {
    if (!props.sitelink) {
        return (
            <Col sm={12} md={12} lg={6} className='card border-0'>
                <img
                    src={props.imageSrc}
                    alt={props.title}
                    className="img-fluid float-left mr-3 my-2 card-img-top"
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.title}</h5>
                    <div className="btn-group mt-auto">

                        <a
                            target="_blank"
                            href={props.repolink}
                            className="btn btn-dark"
                            rel="noreferrer"
                        >Repo</a>
                    </div>
                </div>
            </Col>
        )
    } else {
        return (
            <Col sm={12} md={12} lg={6} className='card border-0'>
                <img
                    src={props.imageSrc}
                    alt={props.title}
                    className="img-fluid float-left mr-3 my-2 card-img-top"
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.title}</h5>
                    <div className="btn-group mt-auto">
                        <a
                            target="_blank"
                            href={props.repolink}
                            className="btn btn-dark"
                            rel="noreferrer"
                        >Repo</a>
                        <a
                            target="_blank"
                            href={props.sitelink}
                            className="btn btn-dark"
                            rel="noreferrer"
                        >Site</a>
                    </div>
                </div>
            </Col>
        )
    }
}
