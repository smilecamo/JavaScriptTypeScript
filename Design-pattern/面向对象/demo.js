class Person {
  constructor(name, house) {
    this.name = name
    this.house = house
  }
  saySome() {}
  showCity() {
    console.log(`house in ${this.house}`)
  }
}

class A extends Person {
  constructor(name, house) {
    super(name, house)
  }
  saySome() {
    console.log('i am A')
  }
}
class B extends Person {
  constructor(name, house) {
    super(name, house)
  }
  saySome() {
    console.log('i am B')
  }
}

class House {
  constructor(city) {
    this.city = city
  }
  showCity() {
    console.log(`house in ${this.city}`)
  }
}
let aHouse = new House('beijing')
let zhang = new A('zhang', aHouse.city)
zhang.saySome()
zhang.showCity()
let li = new B('li')
li.saySome()
