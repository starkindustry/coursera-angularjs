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

  function hasValue(item) {
    return item.trim() != '';
  };

  function isEmpty(items) {
    if (String(items).trim() == '') {
      return true;
    }
    if (items.split(',').filter(hasValue).length == 0) {
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
    var item_array = items.split(',').filter(hasValue);
    setStyle('green');
    if (item_array.length <= 3) {
      return "Enjoy!";
    } else {
      return "Too much!";
    }
  };
};
})();