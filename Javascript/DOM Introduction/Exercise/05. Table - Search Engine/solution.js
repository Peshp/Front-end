function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let students = document.querySelectorAll('table tbody tr');
      let search = document.getElementById('searchField').value;
      document.getElementById('searchField').value = "";

      for (const student of Array.from(students)) {
         student.classList.remove('select');

         for (const element of Array.from(student.children)) {
            if(element.textContent.includes(search)){
               student.className = 'select';
               break;
            }
         }
      }

   }
}