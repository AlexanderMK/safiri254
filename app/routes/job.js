import Ember from 'ember';

export default Ember.Route.extend({
model(){
  return this.store.findAll('job');
},
actions:{
saveJob(params) {
      var newJob = this.store.createRecord('job', params);
      newJob.save();
      this.transitionTo('job');
    }
    }
});
