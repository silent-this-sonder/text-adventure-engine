// HTML elements
const story_div = document.getElementById("story-view");
const story_location = story_div.children[0];
const story_p = story_div.children[1];

const choices_div = document.getElementById("choices");


// function to change location
function change_location(newLocation) {
    story_location.innerHTML = newLocation;
};


// function to change the story description
function change_story_text(text) {
    story_p.innerHTML = text
};


// function to create a choice button
function create_choice(text, action) {
    let newButton = document.createElement('button');
    newButton.textContent = text;
    newButton.addEventListener("click", action); // action must be a function
    choices_div.appendChild(newButton);
    return newButton;
};