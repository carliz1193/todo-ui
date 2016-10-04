import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	actions: {
		createTask(title, dueDate, description){
			let promise = this.get('ajax').post('http://localhost:3000/tasks/crear', {
				data: {
					title: title,
					due_date: dueDate,
					description: description
				}
			});

			promise.then((response)=>{
				// this.transitionTo('task', {task_id: response.id } );
				this.transitionTo('home');
			}).catch(()=>{
				debugger
			});

		}
	}
});
