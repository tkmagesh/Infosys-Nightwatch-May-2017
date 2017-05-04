var baseUrl = 'http://localhost:8080/';
var productData = require('./product_data');
//var shopping_cart_data = require('./shopping_cart.js');
var fs = require('fs'),
    path = require('path'),
    parseJson = require('./parseJson');



function hello_world_test(client){
    client
      .url(baseUrl + 'index.html')
      .assert.containsText('#main', 'Hello World!')
      .end();
}

function default_product_test(client){
    client
      .url(baseUrl + 'products.html')
      .assert.containsText('#productList > li:first-child', 'Pen')
      .end()
}

function get_add_product_test(productName){
  return function add_product_test(client){
      client
        .url(baseUrl + 'products.html')
        .setValue('#txtName', productName)
        .click('#btnAdd')
        .pause(2000)
        .assert.containsText('#productList > li:last-child', productName)
        .end();
  }
}

var tests = {
    hello_world_test : hello_world_test,
    default_product_test : default_product_test
}

/*for(var index = 0; index < productData.length; index++){
    var productName = productData[index];
    tests['product_add_test_' + index] = get_add_product_test(productName);
}*/
var shopping_cart_data_filename = path.join(__dirname, 'shopping_cart.json');

var shopping_cart_data = parseJson(shopping_cart_data_filename).products;

function get_shopping_cart_test(productInfo){
  return function(client){
    var expectedResult = (productInfo.cost * productInfo.units) * ((100-productInfo.discount)/100)
    client
      .url(baseUrl + 'shopping_cart.html')
      .setValue('#txtProductName', productInfo.name)
      .setValue('#numCost', productInfo.cost)
      .setValue('#numUnits', productInfo.units)
      .setValue('#numDiscount', productInfo.discount)
      .click('#btnCalculate')
      .assert.containsText('#divResult', expectedResult)
      .end();
  }
}

for(var index = 0; index < shopping_cart_data.length; index++){
    var productInfo = shopping_cart_data[index];
    tests['shopping_cart_test_' + index] = get_shopping_cart_test(productInfo);
}

module.exports = tests;

