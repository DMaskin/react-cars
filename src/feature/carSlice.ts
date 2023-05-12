import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICar } from "../model"
import { RootState } from "../app/store"

interface CarState {
  cars: ICar[]
  isLoading: boolean
  error: string
}

const initialState: CarState = {
  cars: [] as ICar[],
  isLoading: false,
  error: "",
}

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCars(state, action: PayloadAction<ICar[]>) {
      state.cars = action.payload
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    updateCar(state, action: PayloadAction<ICar>) {
      state.cars = [...state.cars.map((car) => (car.id === action.payload.id ? { ...action.payload } : car))]
    },
    deleteCar(state, action: PayloadAction<number>) {
      state.cars = [...state.cars.filter((car) => car.id !== action.payload)]
    },
    sortCars(state, action: PayloadAction<string>) {
      const property = action.payload
      state.cars = [
        ...state.cars.sort((a: ICar, b: ICar) => (a[property as keyof ICar] > b[property as keyof ICar] ? 1 : -1)),
      ]
    },
  },
})

export const { setCars, updateCar, sortCars, deleteCar, setError, setIsLoading } = carSlice.actions

export const selectCars = (state: RootState) => state.cars.cars
export const selectIsLoading = (state: RootState) => state.cars.isLoading
export const selectError = (state: RootState) => state.cars.error

export default carSlice.reducer
