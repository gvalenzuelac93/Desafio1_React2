import { Form } from "react-bootstrap";

const Contact = () => {
  return (
    <Form>
      <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  )
};
export default Contact;
