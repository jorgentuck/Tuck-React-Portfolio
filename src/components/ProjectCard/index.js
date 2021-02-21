import React from 'react'
import { Col, Card, Button, ButtonGroup } from 'react-bootstrap';

export default function ProjectCard(props) {
    if (!props.imageSrc) {
        return (null);
        // } else {
        //     if (!props.sitelink) {
        //         return (
        //             <Col sm={10} md={10} lg={6}>
        //                 <Card className='border-0'>
        //                     <Card.Img variant='top' src={props.imageSrc} alt={props.title} />
        //                     <Card.Body>
        //                         <Card.Title>{props.title}</Card.Title>
        //                         <Card.Text>{props.desc}</Card.Text>
        //                         <Button block variant='dark'><Card.Link className='text-light' href={props.repolink}>Repo</Card.Link></Button>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         )
        //     } else {
        //         return (
        //             <Col sm={10} md={10} lg={6}>
        //                 <Card className='border-0'>
        //                     <Card.Img variant='top' src={props.imageSrc} alt={props.title} />
        //                     <Card.Body>
        //                         <Card.Title>{props.title}</Card.Title>
        //                         <Card.Text>{props.desc}</Card.Text>
        //                         <ButtonGroup className="d-flex">
        //                             <Button variant='dark'><Card.Link className='text-light' href={props.repolink}>Repo</Card.Link></Button>
        //                             <Button variant='dark'><Card.Link className='text-light' href={props.sitelink}>Site</Card.Link></Button>
        //                         </ButtonGroup>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         )
        //     }
    } else {
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
}
