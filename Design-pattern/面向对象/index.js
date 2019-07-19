/**  面向对象
 * 三要素
 * 继承: 子类可以继承父类 (extends,super)
 * 封装: 数据权限与保密 (public:默认公共的,完全开放,protected:对子类开放,private:私有的只对自己开放)
 * 多态: 同一个接口不同的实现
 */
// 父类 公共的
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat() {
    console.log(`我是父类的函数:${this.name} age is ${this.age}`)
  }
}
// 关键字 extends 继承父类;只能子类访问父类的数据
class Student extends Person {
  constructor(name, age, studentNum) {
    // super 继承了父类的构造函数
    super(name, age)
    this.studentNum = studentNum
  }
  Num() {
    console.log(`我是子类的函数:${this.name} studentNum is ${this.studentNum}`)
  }
}

let wang = new Person('wang', 17)
wang.eat()

let student = new Student('Zhang', 22, 'A888')
student.Num()
student.eat()
