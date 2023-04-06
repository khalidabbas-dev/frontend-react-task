import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import MailService from "../../services/mailService";
import style from "./home.module.css";

export const HomePage = () => {
  const [email, setEmail] = useState("");

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendInvite = async () => {
    const { hasError } = await MailService.sendInvite(email);

    if (hasError) {
      toast.error("Failed to send invite");
    } else {
      toast.success("Invite sent sucessfully");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendInvite();
  };

  return (
    <Container
      fluid
      className={style.container}
      style={{ backgroundImage: `url(/assets/hero-section-bg.svg)` }}
    >
      <img src="/assets/logo.png" className={style.logo} alt="logo" />
      <Row>
        <Col>
          <Card className="p-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={handleClick}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className={style.inviteBtn}
              >
                Send Invite
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
