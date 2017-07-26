import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  from:DS.attr(),
  to:DS.attr(),
  amount:DS.attr(),
  carryingDate:DS.attr(),
  author:DS.attr(),
  phoneNumber:DS.attr(),
  email:DS.attr()

});
