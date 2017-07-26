import Ember from 'ember';

export default Ember.Service.extend({
  selections:[],
  add(selection) {
  this.get('selections').pushObject(selection);
}
});
