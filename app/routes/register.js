import Ember from 'ember';

export
default Ember.Route.extend({
    model: function () {
        return this.store.createRecord('user');
    },
    setupController: function (controller, user) {
        controller.set('model', user);
    }
});