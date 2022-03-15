// let carts = document.querySelectorAll('.add-cart')

// let products = [
//   {
//     name: 'Peanut butter',
//     teg: 'none',
//     price: 29,
//     inCart: 0,
//   },

//   {
//     name: 'Peanut butter none',
//     teg: 'none',
//     price: 30,
//     inCart: 0,
//   },

//   {
//     name: 'Peanut butter red',
//     teg: 'none',
//     price: 19,
//     inCart: 0,
//   },

//   {
//     name: 'Peanut butter blue',
//     teg: 'none',
//     price: 290,
//     inCart: 0,
//   },
// ]

// for (let i = 0; i < carts.length; i++) {
//   carts[i].addEventListener('click', () => {
//     cartNumbers(products[i])
//   })
// }

// function onLoadCartNumbers() {
//   let productNumbers = localStorage.getItem('cartNumbers')
//   if (productNumbers) {
//     document.querySelector('.cart span').textContent = productNumbers
//   }
// }

// function cartNumbers(product) {

//   let productNumbers = localStorage.getItem('cartNumbers');
//   productNumbers = parseInt(productNumbers)

//   if (productNumbers) {
//     localStorage.setItem('cartNumbers', productNumbers + 1)
//     document.querySelector('.cart span').textContent = productNumbers + 1
//   } else {
//     localStorage.setItem('cartNumbers', 1)
//     document.querySelector('.cart span').textContent = 1
//   }


//   setItems(product);
// }


// function setItems(product){


// product.inCart = 1;

// let cartItems = {
//     [product.tag]: product
// }

// localStorage.setItem('productsInCart', JSON.stringify

// (cartItems));





// }
// onLoadCartNumbers()


let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    
          name: 'Peanut butter',
          teg: 'none',
          price: 29,
          inCart: 0
      
  },

  {
    
    name: 'Peanut butter two',
    teg: 'none',
    price: 29,
    inCart: 0

},
{
    
  name: 'Peanut butter three',
  teg: 'none',
  price: 29,
  inCart: 0

}



]