let count = 0;
let num = document.getElementById("number");
let previous = document.getElementById("previous");

function adder() {
  count++;
  num.textContent = count;
  console.log(count);
}

function substracter() {
  if (count < 1) {
    count = 0;
    num.textContent = count;
  } else {
    count--;
    num.textContent = count;
  }
}

function saveNum() {
  previous.textContent = `${previous.innerText}  ${count} ,`;
}

function clearNum() {
  count = 0;
  previous.textContent = "";
  num.textContent = count;
}
