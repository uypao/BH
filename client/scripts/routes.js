import { Config } from 'angular-ecmascript/module-helpers';

export default class RoutesConfig extends Config {
	configure(){
		this.$stateProvider
		.state('tab', {
			url: '/tab',
			abstract: true,
			templateUrl: 'client/templates/tabs.html'
			})
		.state('tab.products', {
			url: '/products',
			views: {
				'tab-products': {
					templateUrl: 'client/templates/products/products.html',
					// controller: 'ChatsCtrl as chats'
					}
				}
			})
		.state('tab.orders', {
			url: '/orders',
			views: {
				'tab-orders': {
					templateUrl: 'client/templates/orders/orders.html',
					controller: 'OrdersCtrl as orders'
					}
				}
			})
		.state('tab.stores', {
			url: '/stores',
			views: {
				'tab-stores': {
					templateUrl: 'client/templates/stores/stores.html',
					controller: 'StoresCtrl as stores'
					}
				}
			});

		this.$urlRouterProvider.otherwise('tab/orders');
	}
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']