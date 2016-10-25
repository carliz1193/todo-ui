import Ember from 'ember';

export default Ember.Component.extend({

	actions:{
		destroyTaskInComponent(item){
			console.log('Soy el destroyTaskInComponent que llamó el component');

			this.sendAction('destroyTaskOutOfComponent', item);
		}


	
	}
});
