import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Products({ shoes }) {
    return (
        <>
            <Row className="mt-3">
                <h1 className="text-white">All Products</h1>
            </Row>
            <hr/>
            <Row className="mt-5">
                {
                    shoes.map((item, index) => (
                        <Col md={3} key={index}>
                            <Card style={{ width: "17rem", height: "100%" }}>
                                <Card.Img variant="top" style={{ height: "50%" }} src={item.Image} />
                                <Card.Body>
                                    <Card.Title>{item.Name}</Card.Title>
                                    <Card.Text>Shoe Description Here</Card.Text>
                                    <Button block variant="outline-primary" as={Link} to={`${item.Handle}`}>Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}
