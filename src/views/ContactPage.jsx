import { Container } from "react-bootstrap";

import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuéntanos, ¿En qué podemos ayudarte?</h1>
      <Contact />
    </Container>
  );
};
export default ContactPage;
