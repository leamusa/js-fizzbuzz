console.log("Fizz or Buzz?");

const container = document.getElementById("container");
const ul = document.getElementById("list_item");

for (let i = 1; i <= 100; i++) {
  let li = document.createElement("li");

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    li.innerHTML = "Fizz Buzz";
    li.className = "fizz_buzz";
  } else if (i % 5 == 0) {
    console.log("Buzz");
    li.innerHTML = "Buzz";
    li.className = "buzz";
  } else if (i % 3 == 0) {
    console.log("Fizz");
    li.innerHTML = "Fizz";
    li.className = "fizz";
  } else {
    console.log(i);
    li.innerHTML = i;
  }

  ul.append(li);
  ul.className = "fizz-list";
}
