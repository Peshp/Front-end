window.addEventListener("load", solve);

function solve() {
    const playerName = document.getElementById('player');
    const playerScore = document.getElementById('score');
    const playerRound = document.getElementById('round');
    const ul = document.getElementById('sure-list');
    const ul2 = document.getElementById('scoreboard-list');
    const clearBtn = document.getElementsByClassName('btn clear')[0];

    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', () => {
        const player = {
            name: playerName.value,
            score: playerScore.value,
            round: playerRound.value,
        };

        if(!player.name || !player.score || !player.round){
            addBtn.disabled = true;
        }

        renderItems(player);

        playerName.value = '';
        playerScore.value = '';
        playerRound.value = '';
    });

    clearBtn.addEventListener('click', () => {
        location.reload();
    });

    function renderItems(player){
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        p1.textContent = player.name;
        p2.textContent = `Score: ${player.score}`;
        p3.textContent = `Round: ${player.round}`;

        let article = document.createElement('article');
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        let editBtn = document.createElement('button');
        let okBtn = document.createElement('button');
        editBtn.classList.add('btn');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        okBtn.classList.add('btn');
        okBtn.classList.add('ok');
        okBtn.textContent = 'Ok';

        let li = document.createElement('li');
        li.className = 'dart-item';
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(okBtn);
        ul.appendChild(li);

        addBtn.disabled = true;

        editButton(player, li, editBtn);
        okButton(okBtn, editBtn, li);
    }

    function editButton(player, li, editBtn){
        editBtn.addEventListener('click', () => {
            playerName.value =  player.name;
            playerScore.value = player.score;
            playerRound.value = player.round;
            addBtn.disabled = false;

            li.remove();
        });
    }

    function okButton(okBtn, editBtn, li){
        okBtn.addEventListener('click', () => {
           ul2.appendChild(li);
           editBtn.remove();
           okBtn.remove();

           addBtn.disabled.false;
        });
    }
}
  