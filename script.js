const form = document.getElementById("form");
const subscribe = document.querySelector(".container");
const success = document.querySelector("#succes_message");
const dismiss = document.querySelector("#dismiss")

function handleSubmit(e) {
  e.preventDefault();
  subscribe.style.display = "none";
  success.style.display = "block"

}

form.addEventListener("submit", handleSubmit);

dismiss.addEventListener("click", dismissHandler);

function dismissHandler(){
  subscribe.style.display = "block";
  success.style.display = "none";
}