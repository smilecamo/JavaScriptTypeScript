// 布尔类型 boolean 支持true或false
// let a: boolean = false
// 数字类型 number 下面的都是20
/*
  let declLinteral:number = 20
  let hexLinteral:number = 0x24
  let binaryLinteral:number = 0b10100
  let octalLinteral:number = 0o24
  */
// 字符类型 String
/*
  let names: string = "bob";
  names = "smith";
  console.log(names);
*/
// 模板字符串
/*
  let student:string = "zhangsan"
  let age:number = 18
  let studentAge = `${student} is ${age} old,
  he say hello
  `
  console.log(studentAge);
  */
// 数组
// 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：
/* 
  let list:number[] = [1,2,3]
  console.log(list); 
*/
// 第二种方式是使用数组泛型，Array < 元素类型 >：
/* 
  let list1:Array<number> = [4,5,6]
  console.log(list1) 
*/
// 元组 Tuple,
// let x: [string, number];
// x = ['hello', 18]
// substr(start,length) 方法可在字符串中抽取从 start 下标开始的 length指定数目的字符。
// console.log(x[0].substr(1,2));


// 枚举 enum
// 可以指定索引
// enum Color {
//   red = 1,
//   blue = 3,
//   yellow = 2
// }
// 根据名字获取索引
// let c: Color = Color.blue
// 通过索引获取名字
// let colorName: string = Color[2]
// console.log(c, colorName);


// any 取消类型检测 可以为任意类型
// let arr: any[] = [1, 2, 'a', 'd', 'c']
// arr[2] = 3
// console.log(arr);


// void 没有任何类型 当一个函数没有返回值时，你通常会见到其返回值类型
// function person(): void{
//   console.warn('this is my warn message');
// }
// person()



// Object 非原始类型 
// 也就是除了 number string boolean symbol null undefined
// function create(o: object | null | number){
//   console.log(o);
// }
// create({ person: 'yang' })  // success
// create(null) // success
// create('yang')

// 类型断言

// let someValue: any = '3333'
// let valueLength: number = (someValue as string).length
// console.log(valueLength);
