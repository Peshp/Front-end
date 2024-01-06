function solve(input) {
  const arr = input.map(line => line.split(' '));
  const horses = arr.shift()[0].split('|');
  while (true) {
    let command = arr.shift();
    switch (command[0]) {
      case 'Finish':
        console.log(horses.join('->'));
        console.log(`The winner is: ${horses[horses.length - 1]}`);
        return;
      case 'Retake':
        let first = horses.indexOf(command[1]);
        let second = horses.indexOf(command[2]);
        if (second > first) {
          [horses[first], horses[second]] = [horses[second], horses[first]];
          console.log(`${command[1]} retakes ${command[2]}.`);
        }
        break;
      case 'Trouble':
        let index = horses.indexOf(command[1]);
        if (index !== horses.length - 1) {
          [horses[index - 1], horses[index]] = [horses[index], horses[index - 1]];
          console.log(`Trouble for ${command[1]} - drops one position.`);
        }
        break;
      case 'Rage':
        let index2 = horses.indexOf(command[1]);
        if (index2 < horses.length - 2) {
          [horses[index2], horses[index2 + 2]] = [horses[index2 + 2], horses[index2]];
          console.log(`${command[1]} rages 2 positions ahead.`);
        }
        break;
      case 'Miracle':
        let lastHorse = horses[horses.length - 1];
        horses.pop();
        horses.unshift(lastHorse);
        console.log(`What a miracle - ${lastHorse} becomes first.`);
        break;
    }
  }
}

solve(['Onyx|Domino|Sugar|Fiona',
  'Trouble Onyx',
  'Retake Onyx Sugar',
  'Rage Domino',
  'Miracle',
  'Finish']
);