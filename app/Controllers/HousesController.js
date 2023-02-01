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
  }

  show(){
    console.log('TODO houses')
    _drawHouses()
  }

  
  setHouse(houseId) {
    try {
      housesService.setHouse(houseId)
      console.log('muh');
    } catch (error) {
      Pop.error(error)
    }
  }
}
