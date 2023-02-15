import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import NewCard from "../../components/reactjs-the-complete-course-for-beginners/NewCard";

function ConditionalRendering() {
    const [toggle, updateToggle] = useState(false)
    const cardTotal = 4;

    const cards = [];
    for (let i = 0; i < cardTotal; i++) {
        cards.push(<NewCard key={i} />)
    }

    return (
        <div className="toggleBootstrapCard">
            <Row className="py-5">
                <Col xs={12} className={'text-center'}>
                    <Button
                        onClick={() => { updateToggle(!toggle) }}
                    >
                        {toggle ? 'hide' : 'show'}
                    </Button>
                </Col>
            </Row>
            <Row className="py-5">
                {toggle && cards}
            </Row>
        </div>
    )
}


export default ConditionalRendering;