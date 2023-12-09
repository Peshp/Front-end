function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const infoBox = document.getElementsByClassName('info')[0];

    let stopId = 'depot';
    let stopMame = 'Depot';

    async function depart() {
        try{
            let response = await fetch(baseUrl + stopId);
            let stopInfo = await response.json();
            infoBox.textContent = `Next stop ${stopInfo.name}`;
            stopId = stopInfo.next;
            stopMame = stopInfo.name;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch {
            departButton.disabled = true;
            infoBox.textContent = 'Error';
        }
    }

    function arrive() {
        infoBox.textContent = `Arriving at ${stopMame}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();