import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    // this.route('welcome',{path: '/welcome'})
    this.route('home', {path: '/'});
    this.route('login', {path: '/login'});
});

export default Router;
