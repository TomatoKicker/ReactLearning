import React from "react";
import { useState } from "react";
import RenderText from "./RenderText";
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
            <Row>
                <Col xs={12} md={6}>
                    <Button
                        onClick={() => { updateToggle(!toggle) }}
                    >
                        Toggle
                    </Button>
                </Col>
            </Row>
            <Row>
                {toggle && cards}
            </Row>
        </div>
    )
}


export default ConditionalRendering;