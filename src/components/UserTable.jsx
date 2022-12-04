import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useAquacabo } from '../hooks/useAquacabo';

function UserTable() {
  
  const { clients } = useAquacabo()
  const {resetPassword} = useAquacabo()

  const handleResetPassword = (email) => {
    resetPassword({email}).then(()=>{
      alert('Correo enviado a ' + email + ' con instrucciones para restablecer la contraseña')
    }).catch((err)=>{
      console.log({err})
      alert('Error al enviar el correo')
    })
  }

 
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
          <th>Contraseña</th>
         
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
            <td>  
              <Button variant="warning" onClick={()=>handleResetPassword(driver.email)}>Reestablecer contraseña</Button>
            </td>
            

          </tr>
        ))}

      </tbody>
    </Table>
  );
}

export default UserTable;