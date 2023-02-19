import React from "react";
import { Col, Row } from "react-bootstrap";
import WeatherContainer from "../../components/Weather/WeatherContainer";

function WeatherPage() {
    return(
            <Row>
                <Col>
                    <WeatherContainer/>
                </Col>
            </Row>
    )
}

export default WeatherPage;