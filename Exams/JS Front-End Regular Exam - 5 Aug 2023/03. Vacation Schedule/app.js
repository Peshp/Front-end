const baseUrl = 'http://localhost:3030/jsonstore/tasks/';
const loadBtn = document.getElementById('load-vacations');
const editVacationBtn = document.getElementById('edit-vacation');
const addBtn = document.getElementById('add-vacation');

const nameItem = document.getElementById('name');
const numDaysItem = document.getElementById('num-days');
const dateitem = document.getElementById('from-date');
const divli = document.getElementById('list');

let currentVacationId = '';

loadBtn.addEventListener('click', loadVacation);
addBtn.addEventListener('click', addVacation);
editVacationBtn.addEventListener('click', editVacation);

async function editVacation(e) {
    e.preventDefault();

    let name = nameItem.value;
    let numDays = numDaysItem.value;
    let date = dateitem.value;

    const vacation = {
        name,
        numDays,
        date,
    };

    await fetch(baseUrl + currentVacationId, {
        method: 'PUT',
        body: JSON.stringify(vacation),
    });

    nameItem.value = '';
    numDaysItem.value = '';
    dateitem.value = '';

    addBtn.disabled = false;
    editVacationBtn.disabled = true;

    await loadVacation();
}

async function addVacation(e) {
    e.preventDefault();

    let name = nameItem.value;
    let numDays = numDaysItem.value;
    let date = dateitem.value;

    const vacation = {
        name,
        numDays,
        date
    };

    await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(vacation),
    });

    nameItem.value = '';
    numDaysItem.value = '';
    dateitem.value = '';

    await loadVacation();
}

async function loadVacation() {
    let response = await fetch(baseUrl);
    let vacations = await response.json();
    console.log(vacations);

    divli.innerHTML = '';

    for (const vacation of Object.values(vacations)) {
        let vacationItem = loadElements(vacation);
        vacationItem.setAttribute('data-vacation-id', vacation._id);
        divli.appendChild(vacationItem);
    }

    editVacationBtn.disabled = true;
}

function loadElements(vacation) {
    let currId = vacation._id;
    let h2 = document.createElement('h2');
    h2.textContent = vacation.name;
    let h3 = document.createElement('h3');
    h3.textContent = vacation.date;
    let h32 = document.createElement('h3');
    h32.textContent = vacation.numDays;

    let changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.textContent = 'Change';
    let doneBtn = document.createElement('button');
    doneBtn.className = 'done-btn';
    doneBtn.textContent = 'Done';

    let container = document.createElement('div');
    container.className = 'container';
    container.appendChild(h2);
    container.appendChild(h3);
    container.appendChild(h32);
    container.appendChild(changeBtn);
    container.appendChild(doneBtn);

    changeBtn.addEventListener('click', () => {
        nameItem.value = vacation.name;
        numDaysItem.value = vacation.numDays;
        dateitem.value = vacation.date;

        currentVacationId = container.getAttribute('data-vacation-id');
        container.remove();

        editVacationBtn.disabled = false;
        addBtn.disabled = true;
    })

    doneBtn.addEventListener('click', async () => {
        await fetch(baseUrl + vacation._id, {
            method: 'DELETE',
        });

        await loadVacation();
    });

    return container;
}