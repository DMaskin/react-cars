import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

export function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container className="m-0 ms-2">
        <Navbar.Brand href="#home">Cars</Navbar.Brand>
      </Container>
    </Navbar>
  )
}