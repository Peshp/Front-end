function loadRepos() {
	const username = document.getElementById('username').value;
	const list = document.getElementById('repos');

	fetch(`https://api.github.com/users/${username}/repos`)
		.then((res) => res.json())
		.then(repos => {
			repos.forEach((repo) => {
				let link = document.createElement('a');
				let li = document.createElement('li');

				link.textContent = repo.full_name;
				link.href = repo.html_url;

				li.appendChild(link);
				list.appendChild(li);
			})
		});
}