'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png')) 
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
  let convertirValue = JSON.stringify(this.allProducts);
  localStorage.setItem('allProducts', convertirValue);
}

AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  let respuestaProductos = localStorage.getItem('allProducts');
  let parseRespuesta = JSON.parse(respuestaProductos);
  console.log(parseRespuesta);

  if (respuestaProductos) {
    this.allProducts = parseRespuesta;
    // for(let i=0; i<parsedProducts.length; i++){
    //   if(parsedProducts[i].name=== 'sweep'){
    //     let reconstructedSweepProduct=new Product(parsedProducts[i].name, 'png');
    //     reconstructedSweepProduct.timesShown=parsedProducts[i].timesShown;
    //     reconstructedSweepProduct.timesClicked=parsedProducts[i].timesClicked;
    //     this.allProducts.push(reconstructedSweepProduct);
    //   }else{
    //     let reconstructedProduct=new Product(parsedProducts[i].name);
    //     reconstructedProduct.timesShown=parsedProducts[i].timesShown;
    //     reconstructedProduct.timesClicked=parsedProducts[i].timesClicked;
    //     this.allProducts.push(reconstructedProduct);
    //   }
    // }
  } else {
    this.instantiateProducts();
  }
  console.log(this.allProducts[0].timesClicked);
  //if(respuestaProductos){
  //   for(let i=0;i<parseRespuesta.length;i++){
  //     if( parseRespuesta[i].name==='sweep'){

  //     }else{

  //     }
  //   }
  //}else{
  //   this.instantiateProducts();
  //}


}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
