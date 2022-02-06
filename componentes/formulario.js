import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { schema } from "../schemas/schema";
const Formulario = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const registro = (objeto) => {
    console.log(objeto);
  };
  return (
    <Form onSubmit={handleSubmit(registro)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="nombre" ref={register} />
        {errors.nombre && (
          <Alert variant="danger" className="mt-3 mb-3">
            Error nombre
          </Alert>
        )}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" name="apellido" ref={register} />
        {errors.apellido && (
          <Alert variant="danger" className="mt-3 mb-3">
            Error apellido
          </Alert>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Formulario;
