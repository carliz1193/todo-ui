import Ember from 'ember';

export default Ember.TextField.extend({
	onDidInsertElement: function(){
		// Jquery!!
		this.$().datetimepicker();
	}.on('didInsertElement')
});
