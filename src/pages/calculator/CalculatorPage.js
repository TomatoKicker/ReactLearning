import React from "react";
import { Col, Row } from "react-bootstrap";
import Calculator from "../../components/Calculator/Calculator";

function CalculatorPage() {
        return(
            <Row>
                <Col>
                    <Calculator/>
                </Col>
            </Row>
        )
}

export default CalculatorPage;