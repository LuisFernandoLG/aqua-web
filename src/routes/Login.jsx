import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { authContext } from "../context/AuthContext";
import { firebaseErrors } from "../constants/firebaseErrors";
import { useNavigate } from "react-router-dom";

const initialForm = {
  email: "",
  password: "",
};

const Login = () => {

  const [form, setForm] = useState(initialForm);
  const [formErrors, setFormErrors] = useState();
  const { setLogin, session } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (formErrors.email === null && formErrors.password === null) {
      setLoading(true);
      setLogin(form.email, form.password)
        .then(() => {
          setLoading(false);
          redirect("/conductores")
        })
        .catch((err) => {
          setLoading(false);
          console.log({ err });
          setError(firebaseErrors[err]);
          console.log(err);
        });
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
      case "password":
        const isEmpty = value.trim() === "";
        if (isEmpty) {
          setFormErrors({
            ...formErrors,
            password: "Contraseña requerida",
          });
        } else {
          setFormErrors({
            ...formErrors,
            password: null,
          });
        }
        break;
      default:
        break;
    }
  };

  if(session){
    navigate("/conductores")
  }

  return (
    <Container className="my-3 mx-auto w-50 border radius-2 p-5">
      <h1 className="text-center">Inicio de sesión</h1>
      <Form onSubmit={handleSubmit}>
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

        {/* Cente button */}
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            {loading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Iniciar sesión"
            )}
          </Button>
        </div>
        {/* center text */}
        <div className="d-flex justify-content-center">
          <Form.Text className="text-danger">
            {error ? <p className="text-center">{error}</p> : ""}
          </Form.Text>
        </div>

      </Form>
    </Container>
  );
};

export default Login;
