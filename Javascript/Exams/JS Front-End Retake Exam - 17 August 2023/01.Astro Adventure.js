function solve(inputArray){
    const n = inputArray.shift();
    const astronauts = {};

    for (let i = 0; i < n; i++) {
        const [name, oxygen, energy] = inputArray.shift().split(' ');
        astronauts[name] = {
            name,
            oxygen: Number(oxygen),
            energy: Number(energy),
        };
    }

    while (inputArray.length > 0){
        let arr = inputArray.shift().split(' - ');
        let command = arr[0];
        if(command === 'End'){
            break;
        }
        let name = arr[1];

        switch (command){
            case 'Explore':
                let currEng = astronauts[name].energy;
                let energyNeeded = arr[2];
                currEng -= energyNeeded;
                if(currEng >= 0){
                    console.log(`${name} has successfully explored a new area and now has ${currEng} energy!`);
                    astronauts[name].energy = currEng;
                } else{
                    console.log(`${name} does not have enough energy to explore!`);
                }
                break;
            case 'Refuel':
                let currEnergy = astronauts[name].energy;
                let amountEn = Number(arr[2]);
                currEnergy += amountEn;
                if(currEnergy > 200){
                    currEnergy -= amountEn;
                    console.log(`${name} refueled their energy by ${200 - currEnergy}!`);
                    astronauts[name].energy = 200;
                } else{
                    console.log(`${name} refueled their energy by ${arr[2]}!`);
                    astronauts[name].energy += amountEn;
                }
                break;
            case 'Breathe':
                let currOxygen = Number(astronauts[name].oxygen);
                let amountOx = Number(arr[2]);
                currOxygen += amountOx;
                if(currOxygen > 100){
                    currOxygen -= amountOx;
                    console.log(`${name} took a breath and recovered ${100 - currOxygen} oxygen!`);
                    astronauts[name].oxygen = 100;
                } else{
                    console.log(`${name} took a breath and recovered ${arr[2]} oxygen!`);
                    astronauts[name].oxygen += amountOx;
                }
                break;
        }
    }

    for (const astronaut of Object.values(astronauts)) {
        console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`);
    }
}

solve([    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']

);