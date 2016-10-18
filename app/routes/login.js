import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	session: Ember.inject.service('session'),

	actions:{
		doLogin: function(username, password){
			// let loginPromise = this.get('ajax').post('http://localhost:3000/login.json', {
			// 	data:{
			// 		username: username,
			// 		password: password,
			// 		grant_type: 'password'
			// 	}
			// });

			// loginPromise.then(function(){
			// 	this.transitionTo('home');
			// }.bind(this)).catch(function(){
			// 	alert('Datos invalidos');
			// }.bind(this));

			this.get('session').authenticate('authenticator:oauth2', username, password).catch(()=>{
				debugger
			}).then(()=>{
				this.transitionTo('home');
			})
		}
	}
});
