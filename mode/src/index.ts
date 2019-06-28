// 面向对象 
// 1.继承 
// 2.封装:该外露的就外露,不该的就不外露,利于权限的管理(_ 在es5种一般表示私有)  public 公共的 protected 只能自己或子类能访问 private 只能自己内部使用

// 父类
class People {
  name: string
  age: number
  protected weight: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.weight = 120
  }
  ageIs() {
    alert(`this is ${this.name}, age is ${this.age}`)
  }
}
// 子类

class Student extends People {
  number: string
  private girld: string
  constructor(name: string, age: number, number: string) {
    super(name, age)
    this.number = number
    this.girld = 'xizang'
  }
  study() {
    alert(`${this.name} studyId is ${this.number}`)
  }
  getGirld() {
    alert(`${this.girld} weight is ${this.weight}`)
  }
}

let xianMing = new Student('xianMing', 19, 'A1')
xianMing.getGirld()
xianMing.ageIs()
xianMing.study()
