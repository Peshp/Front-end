function addItem() {
    let textValue = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = textValue.value;
    option.value = value.value;

    textValue.value = "";
    value.value = "";

    document.getElementById('menu').appendChild(option);
}