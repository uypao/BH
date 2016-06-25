import { Meteor } from 'meteor/meteor';
import { Stores } from '../collections/stores';

Meteor.methods({
	newStore(store){
		const store_id = Stores.insert(store);
		return store_id;
	},
	deleteStore(store_id){
		Stores.remove(store_id);
	}
});