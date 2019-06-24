"use strict";
// 布尔类型 boolean 支持true或false
var a = false;
// 数字类型 number 下面的都是20
var declLinteral = 20;
var hexLinteral = 0x24;
var binaryLinteral = 20;
var octalLinteral = 20;
// 字符类型 String
var names = "bob";
names = "smith";
// 模板字符串
var student = "zhangsan";
var age = 18;
var studentAge = student + " is " + age + " old,\nhe say hello\n";
// 数组
// 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：
var list = [1, 2, 3];
// 第二种方式是使用数组泛型，Array < 元素类型 >：
var list1 = [4, 5, 6];
// 元组 Tuple
var x;
x = ['hello', 18];
// x[3]='9'
