function create(words) {
   const content = document.getElementById('content');
   for (const word of words) {
      let p = document.createElement('p');
      let div = document.createElement('div');

      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);

      div.addEventListener('click', () => {
         div.children[0].style.display = "";
      });

      content.appendChild(div);
   }
}