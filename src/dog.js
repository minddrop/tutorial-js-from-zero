class Dog {
  constructor(name) {
    this.name = name;
    console.log(`${this.name} is born now.`);
  }

  bark() {
    return `Wah Wah, I am ${this.name}`;
  }
}

export default Dog;
