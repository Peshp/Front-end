function lockedProfile() {
    const profiles = Array.from(document.querySelectorAll('div.profile'));

    for (const profile of profiles) {
        let button = profile.querySelector('button');
        let lockedButton = profile.getElementsByTagName('input')[1];

        button.addEventListener('click', (e) => {
            let current = e.target.parentNode;
            console.log(lockedButton.checked);

            if(lockedButton.checked)
            {
                if(button.textContent === 'Show more'){
                    current.querySelector('div').style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    current.querySelector('div').style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    }
}