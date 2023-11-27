function solve(inputValue) {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputValue = document.getElementById('input');

      const best = ' ';
      const workers = ' ';


      const arr =inputValue.split(',');
      for (let i = 0; i < arr.length; i++) {
         let newArr = arr[i].split(', ');

         for (let j = 0; j < newArr.length; j++) {
            newArr.pop();
            if (i % 2 === 0) {
               let newArr2 = newArr.split(' ');
               for (let k = 0; k < newArr2; k++) {
                  if(newArr2 % 2 === 0){
                     avPrice += Number(newArr2)[i]);
                  }

               }
            }
         }
      }
      }
   }
