import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		submitClicked(){
			var usernameInput = document.getElementById('username');

			if(usernameInput.value == ''){
				alert('El username no puede estar vacio')
			}else{
				this.set('username', usernameInput.value );
			}
		}
	}
});
