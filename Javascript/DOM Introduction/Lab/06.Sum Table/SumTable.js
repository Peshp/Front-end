function sumTable() {
    let total = 0;
    document.querySelectorAll('table tr td:nth-child(2)')
        .forEach((i) => {
            total += Number(i.textContent);
        })

    document.getElementById("sum").textContent = total;
}