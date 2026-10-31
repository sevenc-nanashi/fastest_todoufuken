const start = document.getElementById("start");
const submit = document.getElementById("submit");
const restart = document.getElementById("restart");
const input = document.getElementById("input");
const result = document.getElementById("result");

const phases = [...document.querySelectorAll(".phase")];

start.addEventListener("click", () => {
  phases[0].classList.remove("phase-active");
  phases[1].classList.add("phase-active");
});

submit.addEventListener("click", () => {
  const userInput = input.value.trim();
  if (!userInput) {
    alert("出身地を入力してください。");
    return;
  }
  result.textContent = userInput;
  phases[1].classList.remove("phase-active");
  phases[2].classList.add("phase-active");
});

restart.addEventListener("click", () => {
  input.value = "";
  result.textContent = "";
  phases[2].classList.remove("phase-active");
  phases[0].classList.add("phase-active");
});
