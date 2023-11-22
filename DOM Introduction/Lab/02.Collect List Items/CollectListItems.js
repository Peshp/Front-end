function extractText() {
    const items = Array.from(document.getElementById("items").children);
    let extracted = [];

    items.forEach((i) => {
        extracted.push(i.textContent);
    });

    document.getElementById("result").value = extracted.join("\n");
}