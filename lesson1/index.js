//ЗАДАНИЕ 1

function loop(times = 0, callback = null) {
  if (!callback) return;

  for (let i = 0; i < times; i++) {
    callback();
  }
}

//ЗАДАНИЕ 2

function calculateArea(w, h) {
  const width = w || null;
  const height = h || null;

  const area = h ? w * h : w * w;
  const figure = h ? 'Rectangle' : 'Square';
  const input = { width, height };

  return {
    area,
    figure,
    input
  };
}

//ЗАДАНИЕ 3

class Human {
  constructor(name, age, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Date of Birth: ${
      this.dateOfBirth
    }`;
  }
}

class Employee extends Human {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth);
    this.salary = salary;
    this.department = department;
  }

  displayInfo() {
    return (
      super.displayInfo() +
      `, Salary: ${this.salary}, Department: ${this.department}`
    );
  }
}

class Manager extends Employee {
  constructor(name, age, dateOfBirth, salary, department, id) {
    super(name, age, dateOfBirth, salary, department);
    this.id = id;
    this.developers = [];
  }

  addDeveloper(developer) {
    this.developers.push(developer);

    developer.changeManager(this);
  }

  removeDeveloper(id) {
    this.developers = developers.filter(dev => dev.id !== id);
  }
}

class Developer extends Employee {
  constructor(name, age, dateOfBirth, salary, department, id) {
    super(name, age, dateOfBirth, salary, department);
    this.id = id;
  }

  changeManager(manager) {
    this.manager.developers = this.manager.developers.filter(
      dev => dev.id !== this.id
    );
    this.manager = manager;
  }
}

const dev1 = new Developer('Dima', 20, '11.15.1996', 10000, 'Web developer', 1);
const dev2 = new Developer('Ivan', 25, '03.11.1992', 23000, 'Web developer', 2);
const dev3 = new Developer('Vova', 23, '09.03.1993', 30000, 'Web developer', 3);

const manager = new Manager('Julia', 23, '09.03.1993', 100000, 'Manager', 1);

manager.addDeveloper(dev1);
manager.addDeveloper(dev2);
manager.addDeveloper(dev3);

console.log(manager.developers);
