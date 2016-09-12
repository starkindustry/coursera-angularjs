(function() {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunch_items = [];

  $scope.checkLunchSize = function(items) {
    $scope.message = generateMessage(items);
  };

  function isValid(item) {
    item = item.trim();
    return item !== '';
  };

  function isEmpty(items) {
    if (typeof items === 'object') {
      return true;
    }
    items = items.trim();
    if (items === '') {
      return true;
    }
    return false;
  };

  function setStyle(color) {
    $scope.message_style = { "color":`${color}` };
    $scope.textbox_style = { "border-color":`${color}` };
  }

  function generateMessage(items) {
    if (isEmpty(items)) {
      setStyle('red');
      return "Please enter data first.";
    }
    var item_array = items.split(',').filter(isValid);
    setStyle('green');
    if (item_array.length <= 3) {
      return "Enjoy!";
    } else {
      return "Too much!";
    }
  };
};
})();