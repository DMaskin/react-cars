import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { MapWindow } from "./modal/MapWindow"
import { useAppDispatch } from "../app/hooks"
import { sortCars } from "../feature/carSlice"

export function Header() {
  const [modalShow, setModalShow] = React.useState(false)
  const dispatch = useAppDispatch()

  const clickSortHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(sortCars(e.currentTarget.name))
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Cars</Navbar.Brand>
        <Nav className="me-auto my-2 my-lg-0 justify-content-end" style={{ maxHeight: "100px" }} navbarScroll>
          <NavDropdown title="Сортировать">
            <NavDropdown.Item name="year" onClick={(e: React.MouseEvent<HTMLButtonElement>) => clickSortHandler(e)}>
              Год выпуска
            </NavDropdown.Item>
            <NavDropdown.Item name="price" onClick={(e: React.MouseEvent<HTMLButtonElement>) => clickSortHandler(e)}>
              Цена
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link onClick={() => setModalShow(true)}>Карта</Nav.Link>
        </Nav>
      </Container>
      <MapWindow onHide={() => setModalShow(false)} show={modalShow} />
    </Navbar>
  )
}
