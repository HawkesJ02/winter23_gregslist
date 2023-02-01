import { generateId } from "../Utils/generateId.js"

export class House {

constructor(data){
  this.id = generateId()
   this.year = data.year
   this.name = data.name
   this.bedrooms = data.bedrooms
   this.bathrooms = data.bathrooms
   this.sqft = data.sqft
   this.price = data.price
   this.description = data.description
   this.imgUrl = data.imgUrl
}

get HouseCardTemplate(){
  return /*html*/ `
  <div class="col-md-4 my-3">
  <div class="card elevation-2 car" onclick="app.housesController.setHouse('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
    <img
      src="${this.imgUrl}"
      alt="${this.price}" class="rounded">
    <p><b>${this.price} ${this.sqft} - $${this.price}</b></p>
  </div>
</div>
  `
}

 }

 