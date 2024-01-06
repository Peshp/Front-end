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
                let energyNeeded = arr[2];
                astronauts[name].energy -= energyNeeded;
                if(astronauts[name].energy >= energyNeeded){
                    console.log(`${name} has successfully explored a new area and now has ${astronauts[name].energy} energy!`);
                } else{
                    console.log(`${name} does not have enough energy to explore!`);
                }
                break;
            case 'Refuel':
                astronauts[name].energy += Number(arr[2]);
                if(astronauts[name].energy > 200){
                    console.log(`${name} refueled their energy by ${Number(arr[2]) + (200 - astronauts[name].energy)}!`);
                    astronauts[name].energy = 200;
                } else if(astronauts[name].energy === 200){
                    console.log(`${name} refueled their energy by ${0}!`);
                } else{
                    console.log(`${name} refueled their energy by ${arr[2]}!`);
                }
                break;
            case 'Breathe':
                astronauts[name].oxygen += Number(arr[2]);
                if(astronauts[name].oxygen > 100){
                    console.log(`${name} took a breath and recovered ${Number(arr[2]) - (Number(arr[2]) - 100_} oxygen!`);
                    astronauts[name].oxygen = 100;
                } else if(astronauts[name].oxygen - Number(arr[2]) === 100){
                    console.log(`${name} took a breath and recovered 0 oxygen!`);
                } else{
                    console.log(`${name} took a breath and recovered ${arr[2]} oxygen!`);
                }
                break;
        }
    }
}

solve([  '4',
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
        'End'
    ]
);