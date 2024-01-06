function getInfo(){
    const busStopId = document.getElementById('stopId').value;
    const ul = document.getElementById('buses');
    const stopName = document.getElementById('stopName');

    ul.innerHTML = "";

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${busStopId}`)
        .then((res) => res.json())
        .then(busStop => {
            stopName.textContent = busStop.name;
            for (const [busId, time] of Object.entries(busStop.buses)) {
                const text = `Bus ${busId} arrives in ${time} minutes`;
                const li = document.createElement('li');
                li.textContent = text;
                ul.appendChild(li);
            }
        })
        .catch(error => {
            // console.log(error);
            document.getElementById('stopName').textContent = 'Error';
        });
}