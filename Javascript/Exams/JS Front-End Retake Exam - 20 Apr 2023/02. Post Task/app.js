window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById('publish-btn');

  const titleItem = document.getElementById('task-title');
  const categoryItem = document.getElementById('task-category');
  const contentItem = document.getElementById('task-content');

  const ul = document.getElementById('review-list');
  const ul2 = document.getElementById('published-list');

  
  publishBtn.addEventListener('click', () => {
    let title = titleItem.value;  
    let category = categoryItem.value;
    let content = contentItem.value;

    if(!title || !category || !content){
        return;
    }

    let h4Item = document.createElement('h4');
    let p1Item = document.createElement('p');
    let p2Item = document.createElement('p');

    h4Item.textContent = title;
    p1Item.textContent = `Category: ${category}`;
    p2Item.textContent = `Content: ${content}`;

    let articleItem = document.createElement('article');
    articleItem.appendChild(h4Item);
    articleItem.appendChild(p1Item);
    articleItem.appendChild(p2Item);
    

    let editBtn = document.createElement('button');
    let postBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    postBtn.textContent = 'Post';
    editBtn.className = 'action-btn edit';
    postBtn.className = 'action-btn post';

    let liItem = document.createElement('li');
    liItem.className = 'rpost';
    liItem.appendChild(articleItem);
    liItem.appendChild(editBtn);
    liItem.appendChild(postBtn);

    ul.appendChild(liItem);

    titleItem.value = '';
    categoryItem.value = '';
    contentItem.value = '';

    editBtn.addEventListener('click', (e) => {
        titleItem.value = title;
        categoryItem.value = category;
        contentItem.value = content;

        liItem.remove();
    });

    postBtn.addEventListener('click', () => {
        ul2.appendChild(liItem);

        postBtn.remove();
        editBtn.remove();
    });
  })
}