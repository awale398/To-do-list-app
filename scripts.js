const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = inputBox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode for '×' (delete button)
    li.appendChild(span);

    listContainer.appendChild(li);
    inputBox.value = "";

    saveData();
}

// Event Listener for Task Actions
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save & Load Data
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

loadData();
