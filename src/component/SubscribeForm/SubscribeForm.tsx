import { Button, Card, Col, Form, Row } from "react-bootstrap";
import style from "./subscribeForm.module.css";

export const SubscribeForm = () => {
  return (
    <Row className="justify-content-center">
      <Col sm={9}>
        <Card className="p-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="24" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Higest Education</Form.Label>
              <Form.Control type="text" placeholder="Masters" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="xx xxx xxxxxxx" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                className={style.checkbox}
                type="checkbox"
                label="Do you have any online presence on any social media platform"
              />
            </Form.Group>
            <Button className={`mb-4 ${style.callToActionBtn}`}>
              Join Sonar Today
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
