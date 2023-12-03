function attachEventsListeners() {
    const convertValues = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    };

    const [inputUnits, outputUnits] = document.querySelectorAll('select').values();
    const [inputField, outputField] = document.querySelectorAll('input[type=text]');
    const convertBtn = document.getElementById('convert');

    convertBtn.addEventListener('click', () => {
        let currInput = inputUnits.value;
        let currOutput = outputUnits.value;
        let inputValue = inputField.value;

        outputField.value = inputValue * convertValues[currInput] / convertValues[currOutput];
    })
}