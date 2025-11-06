class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  introduce() {
    console.log(`Меня зовут ${this.name}, я ${this.position}`);
  }
}

const worker = new Employee("Алексей", "разработчик");
worker.introduce(); 
