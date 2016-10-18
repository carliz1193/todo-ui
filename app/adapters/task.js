import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin,{
	//host: 'http://localhost:3000', // 'http://5f653fec.ngrok.io'
	authorizer: 'authorizer:oauth2',

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
