function repeat(text, times){
    let rep = '';
    for (let i = 0; i < times; i++) {
        rep += text;
    }

    console.log(rep);
}

repeat("abc", 3);