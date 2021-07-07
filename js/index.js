let container = document.querySelector(".container"),
  switchBtn = document.querySelector(".switch"),
  switchBox = document.querySelector(".switch-box"),
  heading = document.querySelector("h1");

let summa = 0;
switchBtn.addEventListener("click", () => {
  document.body.classList.toggle("bg-white");
  switchBox.classList.toggle("bg-dark");
  switchBtn.classList.toggle("left");
  switchBtn.classList.toggle("bg-green");
  summa = summa + 1;
  if (summa % 2 == 0) {
    heading.textContent = "OFF";
  } else {
    heading.textContent = "ON";
  }
  console.log(summa);
});
