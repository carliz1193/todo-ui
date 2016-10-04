import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('welcome',{path: '/welcome'})
  this.route('login', {path: '/login'});
  this.route('home', {path: '/'});
  this.route('task', {path: '/:task_id'});

  this.route('tasks', function() {
    this.route('new');
  });
});

export default Router;
