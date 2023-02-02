import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { setHTML, setText } from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js";

function _drawHouses(){
  console.log('draw houses working!');
  let template = ``
  appState.house.forEach(h => template += h.HouseCardTemplate)
  setHTML('listings', template)
}

function _drawHouse (){
  console.log('your drew the selected house! too bad its not fully working yet');
}
export class HousesController {

  constructor() {
    console.log('Hello this is the houses Controller and I am surely working')
    console.log(appState.house);
    appState.on('houses', _drawHouses)
    appState.on('house', _drawHouse)
  }


  show(){
    console.log('TODO houses')
    _drawHouses()
  }

  
  setActiveHouse(houseId) {
    try {
      housesService.setActiveHouse(houseId)
      console.log('muh');
    } catch (error) {
      Pop.error(error)
    }
  }

  handleFormSubmit() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)

      housesService.createHouse(formData)

      console.log(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
    }
  }

}
