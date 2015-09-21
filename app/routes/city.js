import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('city');
  },
  actions: {
    destroyCity(city) {
      city.destroyRecord();
      this.transitionTo('city');
    },
    saveTheDamnCity(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('city');
    }
  }
});
