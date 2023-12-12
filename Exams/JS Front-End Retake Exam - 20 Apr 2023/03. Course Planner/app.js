const types = [
    'Long',
    'Short',
    'Medium',
];

const baseUrl = `http://localhost:3030/jsonstore/tasks/`;

const courseItem = document.getElementById(`course-name`);
const courseType = document.getElementById('course-type');
const descriptionItem = document.getElementById('description');
const teacherName = document.getElementById('teacher-name');
const list = document.getElementById('list');

const loadBtn = document.getElementById('load-course');
const addBtn = document.getElementById('add-course');
const editBtnSubmit = document.getElementById('edit-course');

loadBtn.addEventListener('click', loadCourses);
addBtn.addEventListener('click', addCourse);
editBtnSubmit.addEventListener('click', editCourse);


async function editCourse(){
    e.preventDefault();

    const title = courseItem.value;
    const type = courseType.value;
    const description = descriptionItem.value;
    const teacher = teacherName.value;

    if(!types.includes(type)){
        return;
    }

    const course = {
        title,
        type, 
        description, 
        teacher,
    };

    await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(course),
    });

    addBtn.disabled = false;
    editBtnSubmit.disabled = true;

    await loadCourses();
}

async function addCourse(e){
    e.preventDefault();

    const title = courseItem.value;
    const type = courseType.value;
    const description = descriptionItem.value;
    const teacher = teacherName.value;

    if(!types.includes(type)){
        return;
    }

    const course = {
        title,
        type, 
        description, 
        teacher,
    };

    await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(course),
    });

    courseItem.value = '';
    courseType.value = '';
    descriptionItem.value = '';
    teacherName.value = '';

    await loadCourses();
}

async function loadCourses() {
    let response = await fetch(baseUrl);
    let courses = await response.json();

    list.innerHTML = '';

    for (const course of Object.values(courses)) {
        list.appendChild(await renderItems(course));
    }
}

async function renderItems(course) {
    let h2Item = document.createElement('h2');
    let h3Item1 = document.createElement('h3');
    let h3Item2 = document.createElement('h3');
    let h4Item = document.createElement('h4');
    h2Item.textContent = course.title;
    h3Item1.textContent = course.teacher;  
    h3Item2.textContent = course.type;
    h4Item.textContent = course.description;

    let editBtn = document.createElement('button');
    let finishBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit Course';
    finishBtn.className = 'finish-btn';
    finishBtn.textContent = 'Finish Course';

    let container = document.createElement('div');
    container.className = 'container';
    container.appendChild(h2Item);
    container.appendChild(h3Item1);
    container.appendChild(h3Item2);
    container.appendChild(h4Item);
    container.appendChild(editBtn);
    container.appendChild(finishBtn);

    editBtn.addEventListener('click', (e) => {
        courseItem.value = course.title;
        courseType.value = course.type;
        teacherName.value = course.teacher;
        descriptionItem.value = course.description;

        let currId = container.getAttribute('data-course-id');
        container.remove();

        addBtn.disabled = true;
        editBtnSubmit.disabled = false;
    });

    finishBtn.addEventListener('click', async (e) => {
        await fetch(baseUrl + course._id, {
            method: 'DELETE',
        });

        await loadCourses();
    });

    return container;
}