// Create variables
let count = 0
let saved = 0

// Get Elements
let countEl = document.getElementById("count-el")
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")


// Button 1
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    saved = countEl.textContent +  " - "
    saveEl.textContent += saved
    countEl.textContent = 0
    count = 0
}

