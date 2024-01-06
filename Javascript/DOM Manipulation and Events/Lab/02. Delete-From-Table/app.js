function deleteByEmail() {
    const emailValue = document.getElementsByName("email")[0].value;
    const emails = Array.from(document.querySelectorAll("tbody tr td:last-child"));

    const emailToDelete = emails.find(e => e.textContent === emailValue);
    const resultElement = document.getElementById("result");

    if(emailToDelete){
        emailToDelete.parentElement.remove();
        resultElement.textContent = 'Deleted';
    } else{
        resultElement.textContent = 'Not Found';
    }

}