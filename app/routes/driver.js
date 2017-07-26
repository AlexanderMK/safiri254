import Ember from 'ember';

export default Ember.Route.extend({
    firebase: Ember.inject.service(),
  model(){
    // return drivers;
    return this.store.findAll('driver');
  },
  actions: {

   update(driver, params) {
     Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         driver.set(key,params[key]);
       }
     });
     driver.save();
     this.transitionTo('driver');
   },
   saveDriver3(params) {
     var newDriver = this.store.createRecord('driver', params);
     newDriver.save();
     this.transitionTo('driver');
   }
}
});
