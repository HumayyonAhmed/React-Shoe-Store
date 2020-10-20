import React from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';

export default function ProductDetails({ shoes }) {
    const { Handle } = useParams();

    const shoe = shoes.filter(item => item.Handle === Handle)[0];
    if (!shoe) {
        return <h2>Not Found!</h2>
    }

    return (
        <>
            <Row className="mt-5">
                <Col md={6}>
                    <Image src={shoe.Image} alt={shoe.Handle} rounded style={{width: "inherit", height: "", border: "1px solid lightgrey"}}/>
                </Col>
                <Col md={6}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item><h3>{shoe.Name}</h3></ListGroup.Item>
                            <ListGroup.Item><strong>Price: </strong>{shoe.Price}</ListGroup.Item>
                            <ListGroup.Item><strong>Release Date: </strong>{shoe.releaseDate}</ListGroup.Item>
                            <ListGroup.Item><strong>Colors: </strong>{shoe.Colors}</ListGroup.Item>
                            <ListGroup.Item><strong>Descriptions: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ipsum est. Morbi viverra non leo vel pellentesque. Donec non ultricies risus, sed suscipit sapien. Cras vitae malesuada libero, vel viverra ipsum. Etiam ornare tellus sed elit hendrerit bibendum. Aenean at ligula orci. </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </>
    )
}
