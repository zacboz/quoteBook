angular.module('quotebook').controller('mainCtrl', function($scope, mainService){

  $scope.getQuotes = function(){
        $scope.quotes = mainService.getQuotes();
  }

  $scope.getQuotes();

  $scope.deleteMe = function(textToRemove){
      mainService.removeQuote(textToRemove);
  }

  $scope.addMe = function(){
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor
    }
    if(mainService.addQuote(newQuote)){
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';

    }
  }



})
