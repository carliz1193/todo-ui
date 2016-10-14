import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	// beforeModel
	// model
	// Lo que esta funcion regrese, se va a pasar al template en forma de una
	// variable llamada "model"
	model: function(){
		// Opcion A)
		// Model es un arreglo*
		// let promise = this.get('ajax').request('http://localhost:3000/tasks/list');
		// return promise.then(function(data){
		// 	return data.tasks;
		// }.bind(this));
		//
		// Opcion B)
		// Model es una promesa
		// return this.get('ajax').request('http://localhost:3000/tasks/list');
		//
		// Opcion C)
		// Model es un arreglo de tipo DS.RecordArray (promise+arreglo)
		return this.store.findAll('task');
	},
	// afterModel
	// actions
	actions:{
		destroyTask(item){
			console.log('Soy el destroyTask que llamó la ruta');

			// Opcion A)
			// Usando peticiones AJAX normales
			// let promise = this.get('ajax').del('http://localhost:3000/tasks/' + item.id + '/delete');
			//
			// Opcion B)
			// Mediante Ember-data
			let promise = item.destroyRecord();

			promise.then((response)=>{
				this.get('currentModel').removeObject(item);
			}).catch(()=>{
				alert('No se pudo eliminar');
			});
		}
	}
});
