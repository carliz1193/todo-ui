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
	due_date: DS.attr('date'),

	// Ember computed property
	// anyFieldEmpty: Ember.computed('title', 'description','due_date', function(){
	// 	if(this.get('title') == '' || this.get('description') == '' || this.get('due_date') == null ){
	// 		return true;
	// 	}
	// 	return false;
	// }),

	anyFieldEmpty: Ember.computed.or('titleIsEmpty', 'descriptionIsEmpty', 'dueDateIsEmpty'),
	titleIsEmpty: Ember.computed.empty('title'),
	descriptionIsEmpty: Ember.computed.empty('description'),
	dueDateIsEmpty: Ember.computed.empty('due_date')
});
