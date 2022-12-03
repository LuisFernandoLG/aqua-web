import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { convertTimeStamp } from '../helpers/convertTimeStamp';
import { useAquacabo } from '../hooks/useAquacabo';

function UserTable() {

  const { clients } = useAquacabo()

 
  console.log({clients})

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Puesto</th>
         
        </tr>
      </thead>
      <tbody>

        {clients.map((driver, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{driver.name}</td>
            <td>{driver.email}</td>
            <td>{driver.phone}</td>
            <td>Cliente</td>
            

          </tr>
        ))}

      </tbody>
    </Table>
  );
}

export default UserTable;