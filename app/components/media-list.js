import Ember from 'ember';

export default Ember.Component.extend({	

	init(){
		this._super(...arguments);
		Ember.run.schedule('afterRender',function(){
		alert($('.list-group-item').length);
		});
	},
	actions:{
		destroyTaskInComponent(item){
			console.log('Soy el destroyTaskInComponent que llamó el component');

			this.sendAction('destroyTaskOutOfComponent', item);
		}


	
	}
});
