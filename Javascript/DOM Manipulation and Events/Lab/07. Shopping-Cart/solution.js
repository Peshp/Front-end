function solve() {
   const addButton = Array.from(document.getElementsByClassName('add-product'));
   const checkout = document.querySelector('button.checkout');
   const inputField = document.getElementsByTagName('textarea')[0];

   let totalPrice = 0;
   let totalProducts = [];

    for (const addButtonElement of addButton) {
        addButtonElement.addEventListener('click', function (e){
            let current = e.target.parentNode.parentNode;
            let price = current.querySelector('div.product-line-price').textContent;
            let product = current.querySelector('div.product-title').textContent;

            totalPrice += Number(price);
            totalProducts.push(product);

            inputField.textContent += `Added ${product} for ${price} to the cart.\n`;
        })
    }

    checkout.addEventListener('click', function (e){
        inputField.textContent += `You bought ${totalProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;
        checkout.disabled = true;
        addButton.forEach(b => {
            b.disabled = true;
        })
    })

}