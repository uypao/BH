import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Stores } from '../../../libs/collections/stores';

export default class StoresCtrl extends Controller{
	constructor(){
		super(...arguments);
 		this.templateUrl = 'client/templates/stores/new-store.html';

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

StoresCtrl.$inject = ['NewModal'];