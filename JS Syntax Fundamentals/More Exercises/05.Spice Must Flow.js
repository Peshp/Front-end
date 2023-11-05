function solve(yield){
    let days = 0;
    let extracted = 0;
    while (yield > 99) {
        extracted += yield;
        extracted -= 26;
        yield -= 10;
        days++;
    }
    if(extracted >= 26){
        extracted -= 26;
    } else{
        extracted -= extracted;
    }


    console.log(days);
    console.log(extracted);
}

solve(450);