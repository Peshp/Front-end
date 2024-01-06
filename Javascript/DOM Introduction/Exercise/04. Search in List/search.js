function search() {
   let count = 0;
   let search = document.getElementById("searchText").value;
   let towns = document.querySelectorAll('ul li');

   for (const town of towns) {
      town.style.textDecoration = "none";
      town.style.fontWeight = "normal";

      if(town.textContent.includes(search)){
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         count++;
      }
   }

   document.getElementById("result").textContent = `${count} matches found`;
}
