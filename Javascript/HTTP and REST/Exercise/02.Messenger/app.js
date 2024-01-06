function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    const messages = document.getElementById('messages');
    const [nameInput, contentInput, sendButton, refreshButton] = document.getElementsByTagName("input");

    sendButton.addEventListener('click', async () => {
        const newMessage = {
            author: nameInput.value,
            content: contentInput.value,
        };

        await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(newMessage),
        });

        nameInput.value = '';
        contentInput.value = '';
    })

    refreshButton.addEventListener('click', async () => {
        let allMessages = [];

        let res = await fetch(baseUrl);
        let oneMessage = await res.json();

        for (const item of Object.values(oneMessage)) {
            allMessages.push(`${item.author}: ${item.content}`);
        }

        messages.textContent = allMessages.join('\n');
    })
}

attachEvents();