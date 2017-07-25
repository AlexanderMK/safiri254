import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
  update(driver, params) {
    this.sendAction('update', driver, params);
  }
  }
});
