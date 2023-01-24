// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span")
  let quantity = product.querySelector(".quantity input")


  let totalPrice = price.innerText
  let totalQuantity = quantity.value
  let subTotal = totalPrice * totalQuantity
  

  let subTotalDom = product.querySelector(".subtotal span")
  subTotalDom.innerText = subTotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  let product = document.querySelectorAll(".product")
  let totalSumDom = document.querySelector("#total-value span")

  //mostrando el precio * producto en cada producto
  product.forEach((eachProduct)=>{
    updateSubtotal(eachProduct)
    // console.log(eachProduct)
  })
    
  // ITERATION 3
  let sumSubTotal = 0
  product.forEach((eachProduct)=>{
    let subTotal = eachProduct.querySelector(".subtotal span")
    sumSubTotal += Number(subTotal.innerText)
  })
  // console.log(sumSubTotal)
  totalSumDom.innerText = sumSubTotal 

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  event.target.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let buttonDelete = document.querySelectorAll(".btn btn-remove")
  buttonDelete.forEach((eachButton)=>{
    eachButton.addEventListener("click",removeProduct)
  })
  
  
});
