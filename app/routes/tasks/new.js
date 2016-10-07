import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),

	model(){
		// Inicialice un nuevo modelo de tipo Task
		return this.store.createRecord('task', {});
	},

	actions: {
		createTask(){
			let currentModel = this.get('currentModel');

			if(currentModel.get('anyFieldEmpty')){

				$('#validationModal').modal('show');

			} else {
				let promise = currentModel.save();

				// let promise = this.get('ajax').post('http://localhost:3000/tasks/crear', {
				// 	data: {
				// 		title: this.get('currentModel.title'),
				// 		due_date: this.get('currentModel.dueDate'),
				// 		description: this.get('currentModel.description')
				// 	}
				// });

				promise.then((response)=>{
					// this.transitionTo('task', {task_id: response.id } );
					this.transitionTo('home');
				}).catch(()=>{
					debugger
				});
			}

		}
	}
});
