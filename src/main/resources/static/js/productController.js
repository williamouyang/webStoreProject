/**
 * http://usejsdoc.org/
 */
var myApp = angular.module('myApp');

myApp.controller('productController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

	$scope.getProducts = function(){
		$http.get('/api/products').success(function(response){
			$scope.products = response;
		});
	}
        $scope.getProduct = function(){
		var id = $routeParams.id;
		$http.get('/api/products/'+id).success(function(response){
			$scope.product = response;
		});
	}
       $scope.updateProduct = function(){
		$http.put('/api/products/', $scope.product).success(function(response){
			window.location.href='#/listProduct';
		});
	} 
       $scope.deleteProduct = function(id){
		$http.delete('/api/products/'+id).success(function(response){
                    window.location.href='#/listProduct';
		});
	}
	$scope.addProduct = function(){
		$http.post('/api/products/', $scope.product).success(function(response){
			window.location.href='/order.html';
		});
	}
        $scope.orderList = [];
	$scope.addToCart= function(pro){
            $scope.orderList.push(pro);
	}
        $scope.removeToCart= function(pro){
            var oldList = $scope.orderList;
            $scope.orderList = [];
            angular.forEach(oldList, function(x) {
            if (x.name!=pro.name) $scope.orderList.push(x);
            });	
        }
        
        $scope.createOrder= function(){
            
            var orderList={};
            
            var order=[];
            angular.forEach($scope.orderList, function(x) {
                var list={};
                list.p=x;
                list.quantity=x.quantity;
                list.orderPrice=x.price;
                order.push(list)
            });	
            orderList.list=order;
            orderList.checkOut="false";
                var d=new Date();
                var t=d.getTime();
                
            orderList.orderName="Order"+t;
           
            $http.post('/api/orders/', orderList).success(function(response){
			window.location.href='/order.html';
		}); 
        }
        
	
}]);