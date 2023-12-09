
//Your task is to write a JS function that loads a github repository asynchronously with AJAX.
//You should use the Fetch API. Obtain the data by making  a GET request to the following
//URL: “https://api.github.com/users/testnakov/repos”

//Transform the body to text with res.text()
//and in the second then() block of the Promise replace the text content of a div element
// with id "res" with the value from the response. Do not format the response in any way.


function loadRepos(){
    //Use fetch() for connection to github api
    fetch('https://api.github.com/users/testnakov/repos')

        //Because we use promises write then() which get arrow function and return
        //param 'res'
        .then((res) => {
            return res.text();
        })

        //Use second then() to get result from first and add it to html using DOm
        .then((resText) => {
            const result = document.getElementById('res');
            result.textContent = resText;
        });
}
















// function loadRepos() {
//    fetch("https://api.github.com/users/testnakov/repos")
//        .then((res) => {
//           if (!res.ok) {
//              throw new Error(`Network response was not ok: ${res.status}`);
//           }
//           return res.text();
//        })
//        .then((responseText) => {
//           const resultDiv = document.getElementById("res");
//           resultDiv.textContent = responseText;
//        })
//        .catch((error) => {
//           console.error("Error during fetch operation:", error);
//        });
// }