
// select all elements 
let inputNumber = document.querySelector('[name="elements"]');
let inputText = document.querySelector('[name="texts"]');
let select = document.querySelector('[name="type"]');
let optionsOne = document.querySelectorAll('select option')[0];
let optionsTwo = document.querySelectorAll('select option')[1];
let submitBtn = document.querySelector('[name="create"]');
let results = document.querySelector('.results');

// when press the submitBtn
submitBtn.addEventListener('click', createElements);

// create all elements 
function createElements(btn) {
	btn.preventDefault();

	results.innerHTML = '';

	// loop through the input number
	for (let i = 0; i < inputNumber.value; i++) {

		// create element 
		let element = document.createElement(select.value);

		// create text element
		let text = document.createTextNode(inputText.value);

		// add attributs 
		element.className = 'box';
		element.setAttribute('title', 'Element');
		element.setAttribute('id', i + 1);

		// append text in element
		element.appendChild(text);

		// append the created element in the main result
		results.appendChild(element);
	}

	inputNumber.value = '';
	inputText.value = '';
}

