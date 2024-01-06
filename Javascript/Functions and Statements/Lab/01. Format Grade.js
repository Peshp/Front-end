function grades(grade){
    if(grade < 3.00){
        console.log('Fail');
    } else if(grade < 3.50){
        console.log('Poor');
    } else if(grade < 4.50){
        console.log('Good');
    } else if(grade < 5.50){
        console.log('Very good');
    } else{
        console.log('Excellent');
    }
}