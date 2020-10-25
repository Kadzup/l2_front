class Task {
    constructor(text, dueDate) {
        this.text = new String(text);
        this.dueDate = new Date(dueDate).getTime();
        this.daysLeft = ((this.dueDate - new Date().getTime()) / (1000 * 3600 * 24) > 0 ? Math.ceil((this.dueDate - new Date().getTime()) / (1000 * 3600 * 24)) : 0)
    }
}

const table = document.querySelector('tbody');

function addRow(textParam, dueDateParam) {

    let text = textParam || document.getElementById('text').value;
    if (!text) {
        alert('no text');
        return;
    }
    let dueDate = dueDateParam || document.getElementById('dueDate').value
    if (!dueDate) {
        alert('no date');
        return;
    }
    const newTask = new Task(text, dueDate);
    const row = table.insertRow();

    row.insertCell(0).innerText = newTask.text
    row.insertCell(1).innerText = dueDate
    row.insertCell(2).innerText = newTask.daysLeft
}

addRow('wash car', '10/15/2020')

function request() {
    const article = document.getElementById('responseArticle');
    article.innerHTML = '';
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            for (const chunk of json) {
                article.innerHTML += `<h5>User with email ${chunk.email}, whose name is ${chunk.name}</h5>`;

            }
        })
}