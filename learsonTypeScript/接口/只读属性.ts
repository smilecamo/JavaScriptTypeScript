
// 只读属性 readonly

interface Point{
  readonly x: number,
  readonly y: number
}
// 只读属性 数组 ReadonlyArray
let num: Point = {x:1, y:2}
let a: number[] = [1,2,3]
let b: ReadonlyArray<number> = a
console.log(b)
