(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var buy = this;
  buy.items = ShoppingListCheckOffService.getItemsToBuy();
  buy.purchaseItem = function(index, item) {
    ShoppingListCheckOffService.purchaseItem(index, item);
  };
  buy.isEmpty = function() {
    return ShoppingListCheckOffService.isBuyEmpty();
  }
};

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();
  bought.isEmpty = function() {
    return ShoppingListCheckOffService.isBoughtEmpty();
  }
};

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
    {
      name: 'bag(s) of cookies',
      quantity: '2'
    },
    {
      name: 'jug(s) of milk',
      quantity: '1'
    },
    {
      name: 'case(s) of beer',
      quantity: '3'
    },
    {
      name: 'boxes(s) of Kraft Dinner',
      quantity: '3'
    },
    {
      name: 'key(s) of cocaine',
      quantity: '7'
    }
  ];

  var boughtItems = [];

  service.getItemsToBuy = function() {
    return itemsToBuy;
  };

  service.getBoughtItems = function() {
    return boughtItems;
  };

  service.isBuyEmpty = function() {
    return (itemsToBuy.length == 0) ? true : false;
  }
  service.isBoughtEmpty = function() {
    return (boughtItems.length == 0) ? true : false;
  }

  service.purchaseItem = function(index, item) {
    itemsToBuy.splice(index, 1);
    boughtItems.push(item);
  };
};

})();