import Ember from 'ember';

export default Ember.Component.extend({
  driverCart: Ember.inject.service(),
  model(){
  return this.store.findAll('job');
},
  actions: {
    addToCart(selection) {
      this.get('driverCart').add(selection);
    }
  }
});
