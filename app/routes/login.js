import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),

	actions:{
		doLogin: function(username, password){
			let loginPromise = this.get('ajax').post('http://localhost:3000/login.json', {
				data:{
					username: username,
					password: password,
					grant_type: 'password'
				}
			});

			loginPromise.then(function(){
				this.transitionTo('home');
			}.bind(this)).catch(function(){
				alert('Datos invalidos');
			}.bind(this));
		}
	}
});
