// const hideButton = document.getElementById("hideButton");
// const textElement = document.getElementById("text");
// hideButton.addEventListener("click", function () {
//   textElement.style.display = "none";
// });

// //2
// function handler() {
//   alert(1);
// }

// button.addEventListener("click", handler);
// button.removeEventListener("click", handler);

//3

document.addEventListener("DOMContentLoaded", function () {
  let messages = document.querySelectorAll(".message");
  messages.forEach((message) => {
    let closeButton = document.createElement("span");
    closeButton.className = "closeButton";
    closeButton.textContent = "×";
    closeButton.addEventListener("click", () => {
      message.style.display = "none";
    });
    message.appendChild(closeButton);
  });
});
