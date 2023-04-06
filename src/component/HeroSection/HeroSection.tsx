import { Col, Container, Row } from "react-bootstrap";
import { SubscribeForm } from "../SubscribeForm";
import style from "./hero.module.css";

export const HeroSection = () => {
  return (
    <Container>
      <Row
        className={`justify-content-center align-items-center ${style.wrapper}`}
      >
        <Col
          md={{ span: 6, order: "first" }}
          xs={{ order: "last" }}
          className="p-3 text-center d-flex flex-column justify-content-center"
        >
          <h1 className={`${style.headLine} mb-5 pt-3`}>
            <span className={`${style.highlight}`}>3 districts</span> committed
            to pilot in <span className={`${style.highlight}`}>H1-2023</span>
          </h1>
          <h1 className={`${style.headLine} mb-5 pt-3`}>
            <span className={`${style.highlight}`}>85%</span> of eager youth{" "}
            <span className={`${style.highlight}`}>
              waitlisted to revolutionize personal growth
            </span>{" "}
            through data-sharing!
          </h1>
          <h1 className={`${style.headLine}`}>
            <span className={`${style.highlight}`}>
              75% of surveyed parents
            </span>{" "}
            ready to invest{" "}
            <span className={`${style.highlight}`}>$133/year</span> in their
            child's growth!
          </h1>
        </Col>
        <Col md={6}>
          <SubscribeForm />
        </Col>
      </Row>
    </Container>
  );
};
