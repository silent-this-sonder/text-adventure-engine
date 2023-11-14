// script that holds the engine for the game


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


// Game data
let current_id = 0;
let GAME_TREE = {}; // object to store all the scenarios

function create_scenario(location, text) {
    let my_id = current_id++;
    let my_info = {
        "id": my_id,
        "location": location,
        "text": text,
        "choices": []
    };

    GAME_TREE[my_id] = my_info;
    return my_id;
};

function create_scenario_choice(parent_scenario_id, choice_text, linked_scenario_id) {
    let my_parent_id = parent_scenario_id;
    let my_text = choice_text;
    let my_link_id = linked_scenario_id;

    let my_info = {
        "link_id": my_link_id,
        "text": my_text
    };

    GAME_TREE[my_parent_id].choices.push(my_info);
    return my_link_id
};


// change the HTML to reflect the scenario
function display_scenario(scenario_id) {
    let me = GAME_TREE[scenario_id];
    let my_choices = me.choices
    change_location(me.location);
    change_story_text(me.text);
    // create the choices
    choices_div.innerHTML = ""
    for (let i = 0;
        i < my_choices.length;
        i = ++i) {
            create_choice(my_choices[i].text,
                () => {
                    display_scenario(my_choices[i].link_id) // links to the next scenario
                });
    };
};