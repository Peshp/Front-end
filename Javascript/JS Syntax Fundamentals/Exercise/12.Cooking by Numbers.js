function solve(...input){
    for (let i = 0; i < input.length; i++){
        let result = 0;
        for (let i = 0; i < input.length; i++) {
            switch (input[i]) {
                case "chop":
                    result /= 2;
                    break;
                case "dice":
                    result = Math.sqrt(result);
                    break;
                case "spice":
                    result += 1;
                    break;
                case "bake":
                    result *= 3;
                    break;
                case "fillet":
                    result *= 0.8;
                    break;
                default:
                    result = parseFloat(input[i]);
                    continue;
            }
            console.log(result);
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');