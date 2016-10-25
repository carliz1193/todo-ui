import Ember from 'ember';

export default Ember.Component.extend({
	editing: false,
	value: ' ',

	actions: {
		cancelEditing: function() {
			this.sendAction('cancela');
			this.set('editing', false)
		},

		stopEditing: function(value){
			this.sendAction('doSave');
			this.set('editing', false);
  		},

		startEditing: function(value){
			this.set('editing', true);
  		}


	}
});
