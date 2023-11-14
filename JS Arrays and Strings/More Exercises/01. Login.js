function solve(input){
    let username = input[0];
    let password = username.split('').reverse().join('');
    let count = 0;

    for (let i = 1; i < input.length; i++) {
        if(input[i] === password){
            console.log(`User ${username} logged in.`)
            break;
        } else{
            count++
            if(count > 3){
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}

solve(['sunny','rainy','cloudy','sunny','not sunny']);