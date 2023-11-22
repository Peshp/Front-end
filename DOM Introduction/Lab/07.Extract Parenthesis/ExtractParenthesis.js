function extract(content) {
    let result = [];
    const text = document.getElementById(content).textContent;
    let arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0 && arr[i][0] === '(') {
            result.push(arr[i].substring(1, arr[i].length - 1));
        }
    }

    return result.join("; ");
}

