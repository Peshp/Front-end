function attachEventsListeners() {
    const daysButton = document.getElementById('daysBtn');
    const hoursButton = document.getElementById(('hoursBtn'));
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    const daysField = document.getElementById('days');
    const hoursField = document.getElementById('hours');
    const minutesField = document.getElementById('minutes');
    const secondsField = document.getElementById('seconds');

    daysButton.addEventListener('click', () => displayAll(Number(daysField.value) * 86400));
    hoursButton.addEventListener('click',() => displayAll(Number(hoursField.value) * 3600));
    minutesBtn.addEventListener('click', () => displayAll(Number(minutesField.value) * 60));
    secondsBtn.addEventListener("click", () => displayAll(Number(secondsField.value)));

    function displayAll(seconds){
        secondsField.value = seconds;
        minutesField.value = seconds / 60;
        hoursField.value = Number(minutesField.value) / 60;
        daysField.value = Number(hoursField.value) / 24;
    }
}