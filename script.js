// HTML elements
const choices_div = document.getElementById("choices")


// function to create a choice button
function create_choice(text, action) {
    let newButton = document.createElement('button');
    newButton.textContent = text;
    newButton.addEventListener("click", action); // action must be a function
    choices_div.appendChild(newButton);
    return newButton;
};