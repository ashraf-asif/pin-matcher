// input fields
const generatorField = document.getElementById("generator-field");
const inputField = document.getElementById("input-field");

// generate random pin
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
	const randomPin = Math.floor(1000 + Math.random() * 9000);
	generatorField.value = randomPin;
});

// access all the buttons
const buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
	const element = buttons[i].addEventListener("click", function () {
		const buttonValue = this.innerText;
		inputField.value += buttonValue;
	});
}

// backspace button
const backspace = document.getElementById("backspace");
backspace.addEventListener("click", function () {
	inputField.value = inputField.value.substring(0, inputField.value.length - 1);
});

// clear button
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function () {
	inputField.value = "";
});

// check matched or not
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
	const emptyField = document.getElementById("empty-field");
	const notMatchedAlert = document.getElementById("not-matched");
	const matchedAlert = document.getElementById("matched");
	if (generatorField.value == "" || inputField.value == "") {
		emptyField.style.display = "block";
		notMatchedAlert.style.display = "none";
		matchedAlert.style.display = "none";
	} // if input fields are empty
	else if (generatorField.value === inputField.value) {
		emptyField.style.display = "none";
		notMatchedAlert.style.display = "none";
    matchedAlert.style.display = "block";
    
    // reset input value
    generatorField.value = "";
    inputField.value = "";
	} // if input fields matches
	else if (generatorField.value != inputField.value) {
		emptyField.style.display = "none";
		notMatchedAlert.style.display = "block";
    matchedAlert.style.display = "none";

    // reset input value
    inputField.value = "";
    
    // lose the chances to correct
    const chancesToCorrect = document.getElementById("chances-to-correct");
    const remainingChance = parseInt(chancesToCorrect.innerText);
    chancesToCorrect.innerText = remainingChance -1;
    if (chancesToCorrect.innerText < 0) {
      const submitSection = document.getElementById("submit-section");
      submitSection.style.display = "none";
    }
  } // if input fields doesn't match
});
