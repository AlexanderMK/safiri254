import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  secondName:DS.attr(),
  phone:DS.attr(),
  image:DS.attr(),
  type:DS.attr(),
  tonnage:DS.attr(),
  email:DS.attr()

});
