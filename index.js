let btn = document.querySelector("button");
let span = document.querySelector("span");

function add() {
  let input1 = document.querySelector(".input1").value;
  let input2 = document.querySelector(".input2").value;
  let newval = parseInt(input1) + parseInt(input2);
  console.log(input1);
  console.log(input2);
  console.log(newval);
  span.innerHTML = newval;
}
