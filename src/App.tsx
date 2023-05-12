import React, { useEffect } from "react"
import { Header } from "./component/Header"
import { CarBox } from "./component/CarBox"
import { useAppDispatch } from "./app/hooks"
import { CarsAPI } from "./feature/carsAPI"
import { setCars, setError, setIsLoading } from "./feature/carSlice"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    setIsLoading(true)
    CarsAPI.fetchCars()
      .then((res) => dispatch(setCars(res)))
      .catch((e) => dispatch(setError(e.message)))
      .finally(() => dispatch(setIsLoading(false)))
  }, [])

  return (
    <>
      <Header />
      <CarBox />
    </>
  )
}

export default App
