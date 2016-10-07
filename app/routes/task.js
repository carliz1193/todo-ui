import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	model: function(params){
		let tid = params.task_id;

		return this.store.find('task', tid);
		// A)
		//return this.get('ajax').request('http://localhost:3000/tasks/' + tid);
		//
		// B)
		// let promise = this.get('ajax').request('http://localhost:3000/tasks/' + tid);

		// return promise.then(function(response){
		// 	return response;
		// }.bind(this));
	}
});
