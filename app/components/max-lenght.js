import Ember from 'ember';

export default Ember.Component.extend({
	maxLenght: Ember.computed('contar', 'limite', function(){
		return this.get('limite') - this.get('contar');
	}),

	close: Ember.computed('maxLenght', 'noticeCount', function(){
		return this.get('maxLenght') <= this.get('noticeCount');
	})
});