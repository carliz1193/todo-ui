import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	//beforeModel
	//model
	//afterModel
	model: function(){
		//let promise = this.get('ajax').request('http://localhost:3000/tasks/list');
		//
		return this.store.findAll('task');

		// return promise.then(function(data){
		// 	return data.tasks;
		// }.bind(this));
			// return this.get('ajax').request('http://localhost:3000/tasks/list');
	},
	actions:{
		destroyTask(item){
			console.log('Soy el destroyTask que llamó la ruta')

			let promise = item.destroyRecord();

			// let promise = this.get('ajax').del('http://localhost:3000/tasks/' + item.id + '/delete');

			// A)
			// promise.then((function(){

			// }.bind(this)));

			// B)
			promise.then((response)=>{
				this.get('currentModel').removeObject(item);
			}).catch(()=>{
				alert('No se pudo eliminar');
			});
		}
	}
});
