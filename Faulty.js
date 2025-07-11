function greetUser(name {
  if name === "Alice" {
    console.log("Hello Alice!")
  } else if (name = "Bob") {
    console.log("Hello Bob!");
  } else {
    console.log("Hello " + name)
}

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i <= numbers.length; i++) {
  total += numbers[i];
}

let result = add(10);
console.log("Result is: " + result);

function add(a, b) {
  return a + b;
}

const user = {
  name: "Charlie",
  age: "twenty-five",
  greet: () => {
    console.log("Hi, " + this.name);
  }
};

user.greet();
