import { driver } from "localforage";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { convertTimeStamp } from "../helpers/convertTimeStamp";
import { useAquacabo } from "../hooks/useAquacabo";

function DriverTable() {
  const { drivers, trucks } = useAquacabo();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = drivers.map((driver) => {
      const truck = trucks.find((truck) => truck.driverId === driver.id);
      return { ...driver, ...truck };
    });
    setUsers(users);
  }, [drivers, trucks]);

  console.log({ users });

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Puesto</th>
          <th>Última conexión</th>
          <th>Última ubicación</th>
        </tr>
      </thead>
      <tbody>
        {users.map((driver, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{driver.name}</td>
            <td>{driver.email}</td>
            <td>{driver.phone}</td>
            <td>Conductor</td>
            <td>{convertTimeStamp(driver.lastStatus)}</td>
            <td>
              long:{driver.longitude} lat:{driver.latitude}
            </td>
           
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DriverTable;
