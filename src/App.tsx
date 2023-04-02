import React, {useEffect} from 'react';
import {Header} from "./component/Header";
import {CarBox} from "./component/CarBox";
import 'bootstrap/dist/css/bootstrap.css';
import {CarsAPI} from "./service/CarsAPI";
import {appSlice} from "./store/reducers/AppSlice";
import {useAppDispatch} from "./hook/reduxHook";

function App() {
  const {setCars, setError, setIsLoading} = appSlice.actions
  const dispatch = useAppDispatch()

  useEffect(() => {
    setIsLoading(true)
    CarsAPI.fetchCars().then((res) => {
      // console.log(res)
      dispatch(setCars(res))
    })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      <Header/>
      <CarBox/>
    </>
  );
}

export default App;
