

function solve(pass){
    let isValid = true;
    if(pass.length < 6 || pass.length > 10){
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
    if(!/^[A-Za-z0-9]+$/.test(pass)){
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }
    if(!/[\d{2,}]/.test(pass)){
        console.log('Password must have at least 2 digits');
        isValid = false;
    }
    if(isValid)
        console.log('Password is valid')
}

solve('Pa$s$s');