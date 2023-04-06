import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import style from "./header.module.css";

export const Header = () => {
  return (
    <div className={`${style.header}`}>
      <Navbar>
        <Container>
          <Navbar.Brand className="m-auto">
            <img
              src="/assets/logo.png"
              className={`${style.logo}`}
              alt="logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};
