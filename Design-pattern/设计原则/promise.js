function loadImg(src) {
  let promise = new Promise((res, rej) => {
    let img = document.createElement('img')
    img.onload = () => {
      res(img)
    }
    img.onerror = () => {
      rej('图片加载出错')
    }
    img.src = src
  })
  return promise
}

let src =
  'https://images.unsplash.com/photo-1563724680425-560215e83057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'

let result = loadImg(src)
result
  .then(img => {
    console.log(img.width)
    return img
  })
  .then(img => {
    console.log(img.height)
  })
  .catch(err => {
    console.log(err)
  })

// 面试真题 打车

// 有一家打车公司,显示车的信息(名字和车牌号)有两种类型的车 快车一块 专车两块
// 开始时 打印车辆信息
// 结束时 显示金额

class Car {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
}

class Zhuanche extends Car {
  constructor(name, number) {
    super(name, number)
    this.price = 2
  }
}

class Kuaiche extends Car {
  constructor(name, number) {
    super(name, number)
    this.price = 1
  }
}

class Travel {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log(`您打的车类型为${this.car.name},车牌号为${this.car.number}`)
  }
  end() {
    console.log(`您需要支付${this.car.price * 5}$`)
  }
}

let car = new Kuaiche('BMW', 66666)
let travel = new Travel(car)
travel.start()
travel.end()
