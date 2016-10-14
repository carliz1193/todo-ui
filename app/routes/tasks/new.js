import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),

	model(){
		// Inicializar un nuevo modelo de tipo Task, con atributos vacíos
		return this.store.createRecord('task', {});
	},

	actions: {
		createTask(){
			let currentModel = this.get('currentModel');

			if(currentModel.get('anyFieldEmpty')){
				$('#validationModal').modal('show');
			} else {
				// Opcion A)
				let promise = currentModel.save();

				// Opcion B)
				// let promise = this.get('ajax').post('http://localhost:3000/tasks/crear', {
				// 	data: {
				// 		title: this.get('currentModel.title'),
				// 		due_date: this.get('currentModel.dueDate'),
				// 		description: this.get('currentModel.description')
				// 	}
				// });

				promise.then((response)=>{
					this.transitionTo('home');
				}).catch(()=>{
					debugger
				});
			}
		}
	}
});
