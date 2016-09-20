import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		doLogin: function(username, password){
			// console.log('Llegué a doLogin');
			// console.log(username);
			// console.log(password);
			if(username === 'alumno' && password === '123123'){
				// Vaya a la ruta home
				this.transitionTo('home');
			} else {
				alert('Datos invalidos');
			}
		}
	}
});
