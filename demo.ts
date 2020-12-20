class Person {
  name = 'jenny';
  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  getTeacherName() {
    return 'teacher';
  }
  getName() {
    return super.getName() + ' Chan';
  }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
