import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  password: "",
  repassword: "",
};

const DriverForm = () => {
  const [form, setForm] = useState(initialForm);
  const [formErrors, setFormErrors] = useState();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (
      formErrors.name === null &&
      formErrors.email === null &&
      formErrors.phone === null &&
      formErrors.password === null &&
      formErrors.repassword === null
    ) {
      console.log("Formulario enviado");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });

    validate(name, value);
  };

  const validate = (name, value) => {
    switch (name) {
      case "name":
        const nameRegex = /^[a-zA-Z ]{2,30}$/;
        if (!nameRegex.test(value)) {
          setFormErrors({
            ...formErrors,
            name: "El nombre debe tener entre 2 y 30 caracteres",
          });
        } else {
          setFormErrors({
            ...formErrors,
            name: null,
          });
        }
        break;
      case "email":
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailRegex.test(value)) {
          setFormErrors({
            ...formErrors,
            email: "El correo no es válido",
          });
        } else {
          setFormErrors({
            ...formErrors,
            email: null,
          });
        }
        break;
      case "phone":
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) {
          setFormErrors({
            ...formErrors,
            phone: "El teléfono debe tener 10 dígitos",
          });
        } else {
          setFormErrors({
            ...formErrors,
            phone: null,
          });
        }
        break;
      case "password":
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(value)) {
          setFormErrors({
            ...formErrors,
            password:
              "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número",
          });
        } else {
          setFormErrors({
            ...formErrors,
            password: null,
          });
        }
        break;
      case "repassword":
        if (value !== form.password) {
          setFormErrors({
            ...formErrors,
            repassword: "Las contraseñas no coinciden",
          });
        } else {
          setFormErrors({
            ...formErrors,
            repassword: null,
          });
        }
        break;
      default:
        break;
    }
  };

  return (
    <Container className="m-3 w-75 border radius-2 p-5">
      <h1>Agregar conductor</h1>
      <Form>
        <Form.Group
          className="mb-3"
          controlId="formBasicName"
          onSubmit={handleSubmit}
        >
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Nombre"
          />
          <Form.Text className="text-danger">{formErrors?.name}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Correo"
          />
          <Form.Text className="text-danger">{formErrors?.email}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            name="password"
            value={form.password}
            onChange={handleChange}
            // type="password"
            placeholder="Contraseña"
          />
          <Form.Text className="text-danger">{formErrors?.password}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRepassword">
          <Form.Label>Confirmar contraseña</Form.Label>
          <Form.Control
            required
            name="repassword"
            value={form.repassword}
            onChange={handleChange}
            // type="password"
            placeholder="Confirmar contraseña"
          />
          <Form.Text className="text-danger">
            {formErrors?.repassword}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default DriverForm;
