function addItem() {
    const inputText = document.getElementById('newItemText');
    const newItem = document.createElement('li');
    newItem.textContent = inputText.value;

    const deleteButton = document.createElement("a");
    deleteButton.href = '#';
    deleteButton.textContent = "[Delete]";
    newItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    document.getElementById('items').appendChild(newItem);
    inputText.value = '';
}