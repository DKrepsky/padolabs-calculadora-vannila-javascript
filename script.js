let display = "0";

const displayElement = document.querySelector("#display");
const buttonElements = document.querySelectorAll(".btn");

buttonElements.forEach((buttonElement) => {
  buttonElement.onclick = onBtnClickEvent;
});

function onBtnClickEvent(event) {
  const buttonElement = event.target;
  const button = buttonElement.innerText;

  switch (button) {
    case "C":
      reset();
      break;
    case "=":
      calc();
      break;
    default:
      append(button);
      break;
  }

  updateDisplay();
}

function reset() {
  display = "0";
}

function calc() {
  try {
    display = eval(display);
  } catch (error) {
    console.log(error);
    display = "ERR!";
  }
}

function append(button) {
  if (display === "0" && button != ".") display = "";
  display += button;
}

function updateDisplay() {
  
}
