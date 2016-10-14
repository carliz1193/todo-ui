import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	model: function(params){
		let tid = params.task_id;
		// Opcion A)
		//return this.get('ajax').request('http://localhost:3000/tasks/' + tid);
		//
		// Opcion B)
		// let promise = this.get('ajax').request('http://localhost:3000/tasks/' + tid);
		// return promise.then(function(response){
		// 	return response;
		// }.bind(this));
		//
		// Opcion C)
		return this.store.find('task', tid);
	}
});
