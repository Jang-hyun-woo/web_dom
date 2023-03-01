let paragraphElement = document.querySelector("p");

function changeParagrapText(event) {
  paragraphElement.textContent = "clicked!";
  console.log(event);
}
paragraphElement.addEventListener("click", changeParagrapText);


let inputElement = document.querySelector("input");
function retrieveUserInput(event) {
  //let enteredText = inputElement.value;
  let enteredText = event.target.value;
  //let enteredText = event.data;
  console.log(enteredText);
  //console.log(event);
}
inputElement.addEventListener("input", retrieveUserInput);

