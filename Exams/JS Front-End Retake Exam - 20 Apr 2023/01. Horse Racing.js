function solve(arr) {
    let arr2 = arr.toString().split(',');
    let horses = arr2[0].split('|');
    while (arr2.length > 0){
        arr2.shift();

        let command = arr2.toString().split(' ');
        switch (command[0]){
            case 'Retake':
                let first = horses.indexOf(command[1]);
                let second = horses.indexOf(command[2]);
                console.log(command[2])
                if(first < second){
                    let temp = horses[first];
                    horses[first] = horses[second];
                    horses[second] = temp;
                    console.log(`${horses[first]} retakes ${horses[second]}.`);
                }
                break;
        }
    }
}

solve(['Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish']
);

