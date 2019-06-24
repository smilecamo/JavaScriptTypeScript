// 布尔类型 boolean 支持true或false
let a: boolean = false
// 数字类型 number 下面的都是20
let declLinteral:number = 20
let hexLinteral:number = 0x24
let binaryLinteral:number = 0b10100
let octalLinteral:number = 0o24
// 字符类型 String
let names: string = "bob";
names = "smith";
// 模板字符串
let student:string = "zhangsan"
let age:number = 18
let studentAge = `${student} is ${age} old,
he say hello
`
// 数组
// 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：
let list:number[] = [1,2,3]
// 第二种方式是使用数组泛型，Array < 元素类型 >：
let list1:Array<number> = [4,5,6]
// 元组 Tuple
let x: [string,number];
x=['hello',18]
// x[3]='9'