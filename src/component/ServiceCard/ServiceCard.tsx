import { Card } from "react-bootstrap";
import { ServiceCardProps } from "./serviceCard.types";
import style from "./serviceCard.module.css";

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <Card>
      <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
        <i className={`${props.fontAwesomeIconClass} ${style.icon}`}></i>
        <Card.Title className={style.title}>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
