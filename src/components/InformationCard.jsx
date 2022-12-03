import { useState } from "react";
import { Badge, Dropdown, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { convertTimeStamp } from "../helpers/convertTimeStamp";

export const InformationCard = ({ drivers, driver, selectDriver }) => {
  return (
    <Card>
      <Dropdown className="mb-2">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Camión
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {drivers &&
            drivers.map((item) => (
              <Dropdown.Item key={item.id} onClick={() => selectDriver(item)}>
                {item.email}
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>

      <ListGroup>
        <ListGroup.Item className="d-flex gap-2">
          Id:{" "}
          <h6>
            {" "}
            <Badge bg="secondary">{driver.id}</Badge>
          </h6>{" "}
        </ListGroup.Item>
        <ListGroup.Item className="d-flex gap-2">
          Correo:{" "}
          <h6>
            {" "}
            <Badge bg="secondary">{driver.email}</Badge>
          </h6>{" "}
        </ListGroup.Item>
        <ListGroup.Item className="d-flex gap-2">
          Nombre:{" "}
          <h6>
            {" "}
            <Badge bg="secondary">{driver.name}</Badge>
          </h6>{" "}
        </ListGroup.Item>
        <ListGroup.Item className="d-flex gap-2">
          Teléfono:{" "}
          <h6>
            {" "}
            <Badge bg="secondary">{driver.phone}</Badge>
          </h6>{" "}
        </ListGroup.Item>
        <ListGroup.Item className="d-flex gap-2">
          Tipo:{" "}
          <h6>
            {" "}
            <Badge bg="secondary">{driver.type}</Badge>
          </h6>{" "}
        </ListGroup.Item>
        
        <ListGroup.Item className="d-flex gap-2">
          Última conexión:
          <h6>
            <Badge bg="secondary">{convertTimeStamp(driver.lastStatus)}</Badge>
          </h6>
        </ListGroup.Item>
        
        <ListGroup.Item className="d-flex gap-2">
          última ubicación:
          <h6>
            <Badge bg="secondary">{driver.latitude}</Badge>
              <Badge bg="secondary">{driver.longitude}</Badge>
          </h6>
        </ListGroup.Item>


      </ListGroup>
    </Card>
  );
};

const Card = styled.div`
  flex-grow: 1;
`;
