import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),

	actions:{
		doLogin: function(username, password){
			// console.log('Llegué a doLogin');
			// console.log(username);
			// console.log(password);
			//

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

			// if(username === 'alumno' && password === '123123'){
			// 	// Vaya a la ruta home
			// 	this.transitionTo('home');
			// } else {
			// 	alert('Datos invalidos');
			// }
		}
	}
});
