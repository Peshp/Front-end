function validate() {
    const inputField = document.getElementById('email');
    inputField.addEventListener('change', function (e) {
        let pattern = new RegExp('/[a-z]+@[a-z]+\.[a-z]+/g');
        let inputText = inputField.value;
        if(pattern.test(inputText)){
            e.target.classList.remove('error');
        } else{
            e.target.classList.add('error');
        }
    })
}