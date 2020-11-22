const arr: (number | string)[] = [1, '2', 3];
const stringArr: string[] = ['a', 'b', 'c'];
const undefinedArr: undefined[] = [undefined, undefined];

// type alias 类型别名
type User = { name: string; age: number };

class Teacher {
  name: string;
  age: number;
}

const objectArr: Teacher[] = [
  new Teacher(),
  {
    name: 'dell',
    age: 28
  }
];

// 元组 tuple
const teacherInfo: [string, string, number] = ['Dell', 'male', 18];

// csv
const teacherList: [string, string, number][] = [
  ['Dell', 'male', 18],
  ['Jenny', 'female', 28],
  ['sumny', 'male', 38]
];
