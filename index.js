let countEl = document.getElementById("count-el") // pass in arguments, see below for explanation
let saveEl = document.getElementById("save-el") // Grabs the save-el paragraph and store it in a variable called saveEl

let count = 0 // initializer, sets count to 0

function increment() { // increment the count variable when the button is clicked
    count += 1 // count = count + 1, adds numerical one making a new count
    countEl.textContent = count // tells html to equal countEl (in html) to count (which was given an incremnet of 1)
}

function save() {
    // Create a variable that contains both the count and the dash separator, i.e. "12 - "
    countStr = count + " - "
    // Render the variable in the saveEl using innerText, adding countStr to display in html
    // use textContent instead of innerText, see mdn. Essentially its better to use textContent as its more human readable and gathers contents of all elements. 
    // By changing to saveEl.textContent += countStr, we get our spaces between the numbers saved
    saveEl.textContent += countStr
    countEl.textContent = 0 // changes only the html element to 0, needs code below to set back to 0 as well
    count = 0 // changes js count back to 0
}

