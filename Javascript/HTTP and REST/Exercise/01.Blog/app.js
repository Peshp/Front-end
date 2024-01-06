function attachEvents() {
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostsBtn = document.getElementById('btnViewPost');
    const postsDropdown = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const comments = document.getElementById('post-comments');

    let allPosts = {};

    loadPostsBtn.addEventListener('click', loadPosts);
    viewPostsBtn.addEventListener('click', viewPosts);

    async function loadPosts() {
        const res = await fetch(postsUrl);
        allPosts = await res.json();

        postsDropdown.innerHTML = '';

        for (const [key, postObj] of Object.entries(allPosts)) {
            let option = document.createElement('option');
            option.value = key;
            option.text = postObj.title;
            postsDropdown.appendChild(option);
        }
    }

    function viewPosts() {
        let postId = postsDropdown.value;

        if (!allPosts[postId]) {
            console.error('Invalid postId:', postId);
            return;
        }

        postTitle.textContent = allPosts[postId].title;
        postBody.textContent = allPosts[postId].body;

        fetch(commentsUrl)
            .then((res) => res.json())
            .then(commentObj => {
                let filtered = Object.values(commentObj).filter(c => c.postId === postId);
                for (const item of filtered) {
                    let li = document.createElement('li');
                    li.textContent = item.text;
                    comments.appendChild(li);
                }
            })
    }
}


attachEvents();