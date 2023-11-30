function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('mouseover', (event) => {
        let power = event.offsetX / event.target.clientWidth;
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power.toString();
    });
    gradientElement.addEventListener('mouseout', (event) => {
        document.getElementById('result').textContent = "";
    });
}