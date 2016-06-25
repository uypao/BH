import 'angular-animate';
import 'angular-meteor';
import 'angular-moment';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';
//Modules Start
import RoutesConfig from '../routes'
import StoresCtrl from '../controllers/stores';
import OrdersCtrl from '../controllers/orders';
import AppModal from '../appModal';

const App = 'BetterHealth';

//App
Angular.module(App,[
	'angular-meteor',
	'angularMoment',
	'ionic'
	]);

new Loader(App)
	.load(StoresCtrl)
	.load(OrdersCtrl)
	.load(AppModal)
	.load(RoutesConfig);

//Startup
if (Meteor.isCordova){
	Angular.element(document).on('deviceready', onReady);
}
else {
	Angular.element(document).ready(onReady);
}

function onReady(){
	Angular.bootstrap(document, [App]);
}