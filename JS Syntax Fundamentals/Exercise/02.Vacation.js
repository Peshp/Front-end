function theatre(num, people, day){
    var result = num;
    switch (people){
        case 'Students':
            if(day === 'Friday'){
                result *= 8.45;
            } else if(day === 'Saturday'){
                result *= 9.8;
            } else if(day === 'Sunday'){
                result *= 10.46;
            }
            if(num >= 30)
                result -= result * 0.15;
            break;
        case 'Business':
            if(day === 'Friday'){
                result *= 10.9;
            } else if(day === 'Saturday'){
                result *= 15.6;
            } else if(day === 'Sunday'){
                result *= 16;
            }
            if(num >= 100)
                result -= result * 0.1;
            break;
        case 'Regular':
            if(day === 'Friday'){
                result *= 15;
            } else if(day === 'Saturday'){
                result *= 20;
            } else if(day === 'Sunday'){
                result *= 22.5;
            }
            if(num >= 10 && num <= 20)
                result -= result * 0.05;
            break;
    }

    console.log(`Total price: ${result.toFixed(2)}`);
}

theatre(40, "Regular", "Saturday");