function encodeAndDecodeMessages() {
    const [encodeBtn, decodeBtn] = document.getElementsByTagName('button');
    const [encodeText, decodeText] = document.getElementsByTagName('textarea');

    encodeBtn.addEventListener('click', (e) => {
        let chars = encodeText.value;
        let result = "";

        for (let i = 0; i < chars.length; i++) {
           let ascii = chars[i].charCodeAt(0);
           result += String.fromCharCode(ascii + 1);
        }

        decodeText.textContent = result;
    });

    decodeBtn.addEventListener('click', (e) => {
        let chars = decodeText.value;
        let result = "";

        for (let i = 0; i < chars.length; i++) {
            let ascii = chars[i].charCodeAt(0);
            result += String.fromCharCode(ascii - 1);
        }

        decodeText.textContent = result;
    });
}