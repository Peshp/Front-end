function colorize() {
    const items = document.querySelectorAll("table tr:nth-child(even)");
    items.forEach((i) => {
        i.style.background = "teal";
    })
}