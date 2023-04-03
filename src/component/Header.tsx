import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {useAppDispatch} from "../hook/reduxHook";
import {appSlice} from "../store/reducers/AppSlice";

export function Header() {
  const dispatch = useAppDispatch()
  const {sortCars} = appSlice.actions

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(sortCars(e.currentTarget.name))
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Cars</Navbar.Brand>
        <Nav
          className="me-auto my-2 my-lg-0 justify-content-end"
          style={{maxHeight: '100px'}}
          navbarScroll
        >
          <NavDropdown title="Сортировать">
            <NavDropdown.Item name="year" onClick={(e: React.MouseEvent<HTMLButtonElement>) => clickHandler(e)}>
              Год выпуска
            </NavDropdown.Item>
            <NavDropdown.Item name="price" onClick={(e: React.MouseEvent<HTMLButtonElement>) => clickHandler(e)}>
              Цена
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>Карта</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}