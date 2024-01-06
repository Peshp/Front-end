// closure function
function solve(num1, num2, num3){
    function check(){
        let nums = 0;
        if(num1 < 0){
            nums++;
        }

        if(num2 < 0){
            nums++;
        }

        if(num3 < 0){
            nums++;
        }

        return nums;
    }

    if(check() == 3){
        console.log('Negative');
    } else if(check() == 2){
        console.log('Positive');
    } else if(check() == 1) {
        console.log('Negative');
    } else{
        console.log('Positive')
    }
}

solve(-3, -12, 14);