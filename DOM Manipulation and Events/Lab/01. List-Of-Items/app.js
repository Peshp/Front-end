function addItem() {
    const inputText = document.getElementById('newItemText');
    const newItem = document.createElement('li');

    document.getElementById('items').appendChild(newItem);
    newItem.textContent = inputText.value;

    inputText.value = '';
}