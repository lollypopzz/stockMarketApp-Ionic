angular.module('stockMarketApp.services', [])

.factory('stockDataService', function($q, $http) {

  //http://finance.yahoo.com/webservice/v1/symbols/YHOO/quote?format=json&view=detail
  $http.get("http://finance.yahoo.com/webservice/v1/symbols/YHOO/quote?format=json&view=detail")
    .then(function(jsonData) {
      console.log(jsonData.data.list.resources[0].resource.fields);
    }
  );

  return null;

})

;
