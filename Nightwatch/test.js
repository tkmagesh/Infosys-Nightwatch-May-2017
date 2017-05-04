var baseUrl = 'http://localhost:8080/';
var productData = require('./product_data');

function hello_world_test(client){
    client
      .url(baseUrl + 'index.html')
      .assert.containsText('#main', 'Hello World!');
}

function default_product_test(client){
    client
      .url(baseUrl + 'products.html')
      .assert.containsText('#productList > li:first-child', 'Pen')
}

function get_add_product_test(productName){
  return function add_product_test(client){
      client
        .url(baseUrl + 'products.html')
        .setValue('#txtName', productName)
        .click('#btnAdd')
        .pause(2000)
        .assert.containsText('#productList > li:last-child', productName);
  }
}

var tests = {
    hello_world_test : hello_world_test,
    default_product_test : default_product_test
}

for(var index = 0; index < productData.length; index++){
    var productName = productData[index];
    tests['product_add_test_' + index] = get_add_product_test(productName);
}

module.exports = tests;

