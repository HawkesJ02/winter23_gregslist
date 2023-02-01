import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js"

class HousesService {

  setActiveHouse(houseId){
    const house = appState.house.find(h => h.id == houseId)
    if (!house) {
      throw new Error ('There is no darn house with thta ID buckaroo')
    }
    appState.house = house
  }

  setActiveCar(carId) {
    const car = appState.cars.find(c => c.id == carId)
    if (!car) {
      throw new Error('there is no car with that id')
    }
    appState.car = car
  }
 }

// singleton pattern more on this later
export const housesService = new HousesService()