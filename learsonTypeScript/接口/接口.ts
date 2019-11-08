// interface 接口定义

interface LabelValue {
  label: string
}

function objectLabel(labelObject: LabelValue) {
  console.log(labelObject.label)
}
let obj = { size: 10, label: 'Size 10' }

objectLabel(obj)


// **********
interface Square{
  color: string,
  area: number
}

interface SquareConfig{
  // 可选 ?:
  color?: string,
  width?: number
}

function createSquare(config: SquareConfig ):Square{
  let newSquare = { color: 'white', area: 10}
  if(config.color){
    newSquare.color = config.color
  }
  if (config.width){
    newSquare.area = config.width * config.width
  }
  return newSquare
}
let mySquare = createSquare({})

console.log(mySquare)