import Ember from 'ember';

export function upcase(params, hash) {
	// Params tiene todos los argumentos enviados al helper separados por espacio
	let text = params[0];

	// Hash tiene todos los argumentso enviados al helper como llave=valor
	if(hash.format === 'capital'){
		return text.capitalize();
	}

  return text.toUpperCase();
}

export default Ember.Helper.helper(upcase);
