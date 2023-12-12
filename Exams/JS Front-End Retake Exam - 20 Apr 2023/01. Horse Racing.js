function solve(input) {
    const horses = input.shift().split('|');
    while (input.length > 0){
        let arr = input[0].split(' ');
        let command = arr[0];

        switch (command){
            case 'Retake':
                let overtaking = arr[1];
                let overtaken = arr[2];
                let indexI = horses.indexOf(overtaking);
                let indexA = horses.indexOf(overtaken);
                if(indexI < indexA){
                    horses[indexI] = overtaken;
                    horses[indexA] = overtaking;
                    console.log(`${overtaking} retakes ${overtaken}.`);
                }
                break;
            case 'Trouble':
                let horse = arr[1];
                let indexH = horses.indexOf(horse);
                let horse2 = horses[indexH - 1];
                if(indexH > 0){
                    horses[indexH - 1] = horse;
                    horses[indexH] = horse2;
                    console.log(`Trouble for ${horse} - drops one position.`);
                }
                break;
            case 'Rage':
                let horse1 = arr[1];
                let index = horses.indexOf(horse1);
                if(index < horses.length){
                    if(index === horses[horses.length - 2]){
                        let horseFirst = horses[horses.length - 1];
                        horses[horses.length - 2] = horseFirst;
                        horses[horses.length - 1] = horse1;
                        console.log(`${horse1} rages 2 positions ahead.`);
                    } else if(index === horses[horses.length - 3]){
                        horses[horses.length - 2] = horseFirst;
                        horses[horses.length - 1] = horse1;
                    } else{
                        let horseRandom = horses[index + 2];
                        horses[index + 2] = horse1;
                        horses[index - 1] = horseRandom;
                    }
                }
                break;
            case 'Miracle':
                break;
        }

        input.shift();
    }
}

solve(['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish']
);

