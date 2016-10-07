import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	//host: 'http://localhost:3000', // 'http://5f653fec.ngrok.io'

	urlForCreateRecord(modelName, snapshot){
		let plural = modelName.pluralize();
		let actionName = 'crear';

		return `/${plural}/${actionName}`;
	},

	urlForFindAll(modelName, snapshot){
		let plural = modelName.pluralize();
		let actionName = 'list';

		return `/${plural}/${actionName}`;
	},

	urlForDeleteRecord(id, modelName, snapshot){
		let plural = modelName.pluralize();
		let actionName = 'delete';

		return `/${plural}/${id}/${actionName}`;
	}
});
