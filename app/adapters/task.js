import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://localhost:3000', // 'c44eaa09.ngrok.io'

	urlForCreateRecord(modelName, snapshot){
		let plural = modelName.pluralize();
		let actionName = 'crear';

		return `/${plural}/${actionName}`;
	}
});
