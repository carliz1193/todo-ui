import DS from 'ember-data';

//  string
//  number
//  boolean
//  date
//  array**
//  object**

export default DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	complete: DS.attr('boolean'),
	dueDate: DS.attr('date'),

	// Ember computed property
	anyFieldEmpty: Ember.computed('title', 'description','dueDate', function(){
		if(this.get('title') == '' || this.get('description') == '' || this.get('dueDate') == null ){
			return true;
		}
		return false;
	})
});
