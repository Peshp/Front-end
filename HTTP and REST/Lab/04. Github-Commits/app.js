function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commits = document.getElementById('commits');

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then((res) => {
            if(!res.ok){
                throw new Error(`Error: ${username} (Not Found)`);
            }
            return res.json();
        })
        .then(entries => {
            entries.forEach(e => {
                let li = document.createElement('li');
                let authorName = e.commit.author.name;
                let commit = e.commit.message;

                li.textContent = `${username}: ${commit}`;
                commits.appendChild(li);
            })
        }, (error) => {
            let li = document.createElement('li');
            li.textContent = error.message;
            commits.appendChild(li);
        });
}