function focused() {
    const elements = Array.from(document.getElementsByTagName('input'));
    for (const element of elements) {
        element.addEventListener('focus', (e) => {
            e.target.parentElement.className = 'focused';
        });

        element.addEventListener('blur', (e) => {
            e.target.parentElement.className = '';
        })
    }
}