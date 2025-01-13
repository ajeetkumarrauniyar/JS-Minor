// DOM manipulation: create a button dynamically

let body = document.querySelector("body");
let button = document.createElement("button");

function dynamicBtn() {
  button.innerText = "Click Me";
  button.style.backgroundColor = "red";
  button.style.color = "white";
  body.appendChild(button);
  button.addEventListener("click", () => {
    console.log("Button clicked");
  });
}

dynamicBtn();
