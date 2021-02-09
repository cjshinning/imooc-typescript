// readonly
// class Person {
//   public readonly name: string;
//   constructor( name: string) {
//     this.name = name;
//   }
// }

// const person = new Person('Dell');
// person.name = 'hello';
// console.log(person.name);

// 抽象类
// abstract class Geom {
//   getType() {
//     return 'Gemo';
//   }
//   abstract getArea(): number;
// }

// class Circle extends Geom {
//   getArea() {
//     return 123;
//   }
// }

// class Square {}

// class Triangle {}

// 接口回顾
interface Person {
  name: string;
}

interface Teacher extends Person {
  teachingAge: number;
}

interface Student extends Person {
  age: number;
}

const teacher = {
  name: 'Jenny',
  teachingAge: 3
};

const student = {
  name: 'Chan',
  age: 18
};

const getUserInfo = (user: Person) => {
  console.log(user.name);
};

getUserInfo(teacher);
getUserInfo(student);
