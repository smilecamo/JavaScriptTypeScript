// (public:默认公共的,完全开放,protected:对子类开放,private:私有的只对自己开放)
class Person {
  protected name: String
  age: Number
  private height: Number
  constructor(name: String, age: Number) {
    this.name = name
    this.age = age
    this.height = 180
  }
  ages() {
    console.log(`${this.name} age is ${this.age}`)
    console.log(`${this.name} height is ${this.height}`)
  }
}

class Students extends Person {
  private weight: Number
  constructor(name: String, age: Number, weight: Number) {
    super(name, age)
    this.weight = weight
  }
  say() {
    console.log(`${this.name} say my weight is ${this.weight}`)
  }
}
let zhang = new Students('zhang', 18, 120)
zhang.say()
zhang.ages()
