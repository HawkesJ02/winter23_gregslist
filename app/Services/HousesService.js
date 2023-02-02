import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js"

class HousesService {
  createHouse(formData) {
    let house = new House(formData)
    appState.houses.push(house)
    appState.emit('houses')
    saveState('houses', appState.houses)
  }

  setActiveHouse(houseId){
    const house = appState.house.find(h => h.id == houseId)
    if (!house) {
      throw new Error ('There is no darn house with that ID buckaroo')
    }
    console.log(house);
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