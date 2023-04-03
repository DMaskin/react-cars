import React, {useState} from 'react'
import {ICar} from "../model";
import {Col, Form, Modal, Row} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {useAppDispatch} from "../hook/reduxHook";
import {appSlice} from "../store/reducers/AppSlice";

interface WindowProps {
  show: boolean
  onHide: () => void,
  car: ICar
}

export function Window({onHide, car, show}: WindowProps) {
  const {updateCar} = appSlice.actions
  const dispatch = useAppDispatch()

  const [form, setForm] = useState({
    name: car.name,
    model: car.model,
    price: car.price
  })

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const updateHandler = () => {
    const newCar = {...car, name: form.name, model: form.model, price: form.price}
    dispatch(updateCar(newCar))
    onHide()
  }

  return (
    <Modal
      {...car}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Обновить <strong>{car.name} {car.model}</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="mb-3">Введите марку, модель и стоимость:</h4>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column md="2">
              Марка:
            </Form.Label>
            <Col md="10">
              <Form.Control type="text"
                            name="name"
                            value={form.name}
                            onChange={changeHandler}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column md="2">
              Модель:
            </Form.Label>
            <Col md="10">
              <Form.Control type="text"
                            name="model"
                            value={form.model}
                            onChange={changeHandler}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column md="2">
              Цена:
            </Form.Label>
            <Col md="10">
              <Form.Control type="text"
                            name="price"
                            value={form.price}
                            onChange={changeHandler}
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"success"}
                onClick={updateHandler}
        >
          Обновить
        </Button>
        <Button onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}