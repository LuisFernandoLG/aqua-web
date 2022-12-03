import React from 'react'
import UserTable from '../components/UserTable'

const Users = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Clientes</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <UserTable />
        </div>
      </div>
    </div>
  )
}

export default Users