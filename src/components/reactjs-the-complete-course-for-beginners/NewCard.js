import React from "react";
import { Card, Button, Col } from "react-bootstrap";


class NewCard extends React.Component {
    render() {
        return (
            <Col xs={12} md ={3}>
            <Card>
                <Card.Img 
                variant="top" 
                src="https://images.pexels.com/photos/7364280/pexels-photo-7364280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                />

                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
        )
    }

}

export default NewCard;