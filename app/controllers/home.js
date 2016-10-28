import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['view'],
	view: null,

	query: null,
	anotherArray: [1,2,3,4,5],
	filteredModel: Ember.computed('query', 'model.[]', function(){
		let query = this.get('query');
		let model = this.get('model');

		if(!query){ return model; }

		return model.filter(function(task){
			return task.get('title').toLowerCase().indexOf(query.toLowerCase()) != -1;
		});
	}),
	tasksCountLabel: Ember.computed('query', 'filteredModel.[]', 'model.[]', function(){
		let modelLength = this.get('model.length');
		let filteredModelLength = this.get('filteredModel.length');
		let query = this.get('query');

		if(!query){ return `${modelLength} tasks`; }
		else{
			if( filteredModelLength === 0){
				return `No tasks found that matches "${query}"`;
			}else{
				return `${filteredModelLength} of ${modelLength} tasks`;
			}
		}
	}),

	actions:{
		destroyTaskInController(item){
			console.log('Soy el destroyTaskInController que llamó el Controller');
			this.send('destroyTask', item);
		},
		otroAction(){},

		guardaTask(t){
			t.save()
		},

		cancela(t){
			
		},
		rollbackTask(task){
			task.rollbackAttributes();
		},
		 
		toggleCompleteTask(task){
			task.set('complete', event.target.checked)
			task.save();
		}



	}

});
