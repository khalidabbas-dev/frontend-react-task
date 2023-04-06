import { Col, Container, Row } from "react-bootstrap";
import { ServiceCard } from "../../../component";
import style from "./serviceSection.module.css";

export const ServiceSection = () => (
  <Container className="">
    <Row>
      <h1 className={`${style.heading}`}>Our Services</h1>
    </Row>
    <Row>
      <Col md={4} className="mb-4">
        <ServiceCard
          title="Timely Risk Notifications"
          fontAwesomeIconClass="fa-solid fa-bell fa-5x"
        />
      </Col>
      <Col md={4} className="mb-4">
        <ServiceCard
          title="Recommended Interventions"
          fontAwesomeIconClass="fa-solid fa-bullseye fa-5x"
        />
      </Col>
      <Col md={4} className="mb-4">
        <ServiceCard
          title="Individually Reported Data"
          fontAwesomeIconClass="fa-solid fa-database fa-5x"
        />
      </Col>
      <Col md={4} className="mb-4">
        <ServiceCard
          title="Seamless Care Integration"
          fontAwesomeIconClass="fa-solid fa-hand-holding-medical fa-5x"
        />
      </Col>
      <Col md={4} className="mb-4">
        <ServiceCard
          title="Passive Data"
          fontAwesomeIconClass="fa-solid fa-square-poll-vertical fa-5x"
        />
      </Col>

      <Col md={4} className="mb-4">
        <ServiceCard
          title="Minimal Time Commitment"
          fontAwesomeIconClass="fa-solid fa-stopwatch fa-5x"
        />
      </Col>
    </Row>

    <Row className="mt-4"></Row>
  </Container>
);
