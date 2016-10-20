import Ember from 'ember';

export function upcase(params, hash) {
	let text = params[0];

	if(hash.format === 'capital'){
		return text.capitalize();
	}

  return text.toUpperCase();
}

export default Ember.Helper.helper(upcase);
