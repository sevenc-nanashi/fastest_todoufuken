const start = document.getElementById("start");
const submit = document.getElementById("submit");
const restart = document.getElementById("restart");
const input = document.getElementById("input");
const result = document.getElementById("result");
const restartButton = document.getElementById("restart-bisect");
const bisectYes = document.getElementById("bisect-yes");
const bisectNo = document.getElementById("bisect-no");
const bisectStart = document.getElementById("start-bisect");
const bisectResult = document.getElementById("result-bisect");
const list = document.getElementById("list");
const reset = document.getElementById("reset");

const phases = [...document.querySelectorAll(".phase")];
const prefectures = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];
let candidates = [];

function showPhase(index) {
  phases.forEach((phase, phaseIndex) => {
    phase.classList.toggle("phase-active", phaseIndex === index);
  });
}

function showQuestion() {
  if (candidates.length === 1) {
    bisectResult.textContent = candidates[0];
    showPhase(5);
    return;
  }

  list.replaceChildren(
    ...candidates
      .slice(0, Math.ceil(candidates.length / 2))
      .map((prefecture) => {
        const item = document.createElement("li");
        item.textContent = prefecture;
        return item;
      }),
  );
  showPhase(4);
}

start.addEventListener("click", () => {
  showPhase(1);
});

submit.addEventListener("click", () => {
  const userInput = input.value.trim();
  if (!userInput) {
    alert("出身地を入力してください。");
    return;
  }
  result.textContent = userInput;
  showPhase(2);
});

function restartGame() {
  input.value = "";
  result.textContent = "";
  bisectResult.textContent = "";
  candidates = [];
  list.replaceChildren();
  showPhase(0);
}

restart.addEventListener("click", restartGame);
reset.addEventListener("click", restartGame);

restartButton.addEventListener("click", () => {
  showPhase(3);
});

bisectStart.addEventListener("click", () => {
  candidates = [...prefectures];
  showQuestion();
});

bisectYes.addEventListener("click", () => {
  candidates = candidates.slice(0, Math.ceil(candidates.length / 2));
  showQuestion();
});

bisectNo.addEventListener("click", () => {
  candidates = candidates.slice(Math.ceil(candidates.length / 2));
  showQuestion();
});
