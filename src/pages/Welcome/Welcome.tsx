import { Col, Row } from "react-bootstrap";
import { HeroSection } from "../../component";
import { ServiceSection } from "./ServiceSection";
import { Header } from "../../component";
export const WelcomePage = () => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url(/assets/hero-section-bg.svg)`,
          backgroundSize: "cover",
        }}
      >
        <HeroSection />
      </div>

      <ServiceSection />
      <Row className="mt-5">
        <Col></Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default WelcomePage;
