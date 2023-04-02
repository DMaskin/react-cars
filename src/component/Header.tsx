import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

export function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container >
        <Navbar.Brand>Cars</Navbar.Brand>
      </Container>
    </Navbar>
  )
}