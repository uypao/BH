import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class OrdersCtrl extends Controller{
	constructor(){
		super(...arguments);
 		this.templateUrl = 'client/templates/orders/new-order.html';
	    // this.helpers({
	    //   data() {
	    //     return Chats.find();
	    //   }
	    // });
	}

	showModal() {
   		this.NewModal.showModal(this.templateUrl);
  	}

  	hideModal(){
  		this.NewModal.hideModal();
  	}
}

OrdersCtrl.$inject = ['NewModal'];