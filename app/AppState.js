import { Car } from "./Models/Car.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { House } from "./Models/House.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', [Car])
  /** @type {import('./Models/Car').Car} */
  car = null

  houses = loadState('houses', [House])



 house = [
   new House(
      {
        name: 'Test House',
       year: 2013,
       bedrooms: 2,
       bathrooms: 3,
       sqft: 2130,
       price: 200000,
       description: 'A lovely test home that I love and have a lot of time and love for I love this omg wowzas!',
        imgUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'
     }
   ),
   new House(
      {
       name: 'Sample House',
       year: 2130,
       bedrooms: 1,
       bathrooms: 1,
       sqft: 100,
       price: 5,
       description: 'A proper house sampler, it\'s got everything you need I promise',
       imgUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2873&q=80'
       }
     )
   ]
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
