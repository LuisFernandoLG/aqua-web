import React from 'react'
import styled from 'styled-components'

const NotAuth = () => {
  return (
    <BeautyNotAuthMessage>Lo sentimos, pero no tiene permisos para acceder a esta página</BeautyNotAuthMessage>

  )
}

export default NotAuth

const BeautyNotAuthMessage = styled.div`
  font-size: 2rem;
  color: red;
  text-align: center;
  margin: 2rem;
`