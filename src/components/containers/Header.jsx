import { useContext } from "react"
import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import styled from "styled-components"
import logoImg from "../../assets/logo.png"
import { authContext } from "../../context/AuthContext"

export const Header = ()=>{

  const {session, setLogout} = useContext(authContext)

  return <HeaderStyled>
    <Container className="d-flex justify-content-between w-100">
    <div className="d-flex"> 
    <Logo src={logoImg}/>
    <NameLogo>Aquacabo</NameLogo>
    </div>
    <Link to={"/inicio-sesion"}>
    { session ? <Button onClick={setLogout} variant="outline-primary">Cerrar sesión</Button> : <Button variant="outline-primary">Iniciar sesión</Button>}
    </Link>

    </Container>
  </HeaderStyled>
}

const Logo = styled.img`
width: 50px;
height: 50px;
object-fit: contain;
`

const HeaderStyled = styled.div`
width: 100vw;
background: #fff;
padding: 1rem;
display: flex;
align-items: center;
font-family: Arial;
font-size: 1.2rem;
box-shadow: 0 0 10px #8f8c8c22;
`

const NameLogo = styled.h2`

`