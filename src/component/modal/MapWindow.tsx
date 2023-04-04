import React from 'react'
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Map} from "../map/Map";

interface WindowProps {
  show: boolean
  onHide: () => void,
}

export function MapWindow({onHide, show}: WindowProps) {

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          <strong>Отображение автомобилей на карте</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Map/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}