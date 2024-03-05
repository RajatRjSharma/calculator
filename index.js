const container = document.getElementById("container");

if (container) container.style.height = window.innerHeight + "px";

const number = document.getElementById("number");
const sign = document.getElementById("sign");

const kids = document.querySelectorAll(".kid");

let first = "";
let flag = false;

kids.forEach((_) =>
  _.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        number.innerText = "";
        sign.innerText = "";
        first = "";
        flag = false;
        break;
      case "<":
        number.innerText = number.innerText?.substring(
          0,
          number.innerText.length - 1
        );
        break;
      case "%":
        if (!flag) {
          first = cal(sign.innerText, first, number.innerText);
          number.innerText = first;
        }
        flag = true;
        sign.innerText = "%";
        break;
      case "/":
        if (!flag) {
          first = cal(sign.innerText, first, number.innerText);
          number.innerText = first;
        }
        flag = true;
        sign.innerText = "/";
        break;
      case "*":
        if (!flag) {
          first = cal(sign.innerText, first, number.innerText);
          number.innerText = first;
        }
        flag = true;
        sign.innerText = "*";
        break;
      case "-":
        if (!flag) {
          first = cal(sign.innerText, first, number.innerText);
          number.innerText = first;
        }
        flag = true;
        sign.innerText = "-";
        break;
      case "+":
        if (!flag) {
          first = cal(sign.innerText, first, number.innerText);
          number.innerText = first;
        }
        flag = true;
        sign.innerText = "+";
        break;
      case "=":
        if (!flag) {
          first = cal(sign.innerText, first, number.innerText);
          number.innerText = first;
        }
        flag = true;
        sign.innerText = "=";
        break;
      default:
        if (number && number.innerText?.length < 15)
          if (flag) {
            number.innerText = "";
            number.innerText = number.innerText + e.target.innerText;
            flag = false;
          } else number.innerText = number.innerText + e.target.innerText;
        break;
    }
  })
);

const cal = (sign, first, second) => {
  switch (sign) {
    case "%":
      if (first === "") first = Number(second);
      else first = Number(first) % Number(second);
      return first;
    case "/":
      if (first === "") first = Number(second);
      else first = Number(first) / Number(second);
      return first;
    case "*":
      if (first === "") first = Number(second);
      else first = Number(first) * Number(second);
      return first;
    case "-":
      if (first === "") first = Number(second);
      else first = Number(first) - Number(second);
      return first;
    case "+":
      if (first === "") first = Number(second);
      else first = Number(first) + Number(second);
      return first;
    default:
      return Number(second);
  }
};
