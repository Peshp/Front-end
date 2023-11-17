function schedule(input) {
    const meetings = input.reduce((acc, curr) => {
        const [day, name] = curr.split(' ');
        if(acc[day]){
            console.log(`Conflict on ${day}!`);
        } else{
            acc[day] = name;
            console.log(`Scheduled for ${day}`);
        }

        return acc;
    }, {});
}

schedule(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);