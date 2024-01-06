window.addEventListener("load", solve);

function solve() {
    const studentItem = document.getElementById('student');
    const universityItem = document.getElementById('university');
    const scoreItem = document.getElementById('score');
    const ul = document.getElementById('preview-list');
    const ul2 = document.getElementById('candidates-list');

    const score = scoreItem.value;
    const uni = universityItem.value;
    const student = studentItem.value;

    const nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', () => {
        const score = scoreItem.value;
        const uni = universityItem.value;
        const student = studentItem.value;

        if (!score || !uni || !student) {
            return;
        }

        let h4 = document.createElement('h4');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        h4.textContent = student;
        p1.textContent = uni;
        p2.textContent = score;

        let article = document.createElement('article');
        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);

        let editBtn = document.createElement('button');
        let applyBtn = document.createElement('button');
        editBtn.classList.add('action-btn');
        editBtn.classList.add('edit');
        editBtn.textContent = 'edit';
        applyBtn.classList.add('action-btn');
        applyBtn.classList.add('apply');
        applyBtn.textContent = 'apply';

        let li = document.createElement('li');
        li.className = 'application';
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(applyBtn);

        ul.appendChild(li);

        nextBtn.disabled = true;

        studentItem.value = '';
        universityItem.value = '';
        scoreItem.value = '';

        editBtn.addEventListener('click', () => {
          studentItem.value = student;
          universityItem.value = uni;
          scoreItem.value = score;

          nextBtn.disabled = false;
          li.remove();
        })

        applyBtn.addEventListener('click', () => {
            ul2.appendChild(li);

            nextBtn.disabled = false;
            editBtn.remove();
            applyBtn.remove();
        })
    });
}
  