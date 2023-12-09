function solve(input) {
    let horses = input.shift().split('|');

    while (input.length > 0) {
        let currentCommand = input.shift().split(' ');
        let command = currentCommand[0];

        if (command === 'Finish') {
            break;
        }
        console.log(command);
        switch (command) {
            case 'Retake':
                retake(currentCommand.slice(1), horses);
                break;
            case 'Trouble':
                trouble(currentCommand[1], horses);
                break;
            case 'Rage':
                rage(currentCommand[1], horses);
                break;
            case 'Miracle':
                miracle(horses);
                break;
        }
    }

    function retake(arr, horses) {
        let first = horses.indexOf(arr[0]);
        let second = horses.indexOf(arr[1]);

        if (first < second) {
            [horses[first], horses[second]] = [horses[second], horses[first]];
            console.log(`${arr[0]} retakes ${arr[1]}.`);
        }
    }

    function trouble(name, horses) {
        let index = horses.indexOf(name);
        if (index < horses.length - 1) {
            [horses[index], horses[index + 1]] = [horses[index + 1], horses[index]];
            console.log(`Trouble for ${name} - drops one position.`);
        }
    }

    function rage(name, horses) {
        let index = horses.indexOf(name);
        if (index < 2) {
            console.log('aaaaaaaaaa');
            [horses[0], horses[index]] = [horses[index], horses[0]];
            console.log(`${name} rages 2 positions ahead.`);
        }
    }

    function miracle(horses) {
        [horses[0], horses[2]] = [horses[2], horses[0]];
        console.log(`What a miracle - ${horses[0]} becomes first.`);
    }
}

solve(['Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish']
);

