import Ember from 'ember';

export default Ember.Component.extend({
    firebase: Ember.inject.service(),
  updateDriverForm: false,
  actions:{
    updateDriverForm(){
      this.set('updateDriverForm',true);
    },
    update(driver){
      var params={
        firstName:this.get('firstName')? this.get('firstName') : "",
        secondName:this.get('secondName')? this.get('secondName') : "",
        phone:this.get('phone')? this.get('phone') : "",
        image:this.get('image')? this.get('image') : "",
        type:this.get('type')? this.get('type') : "",
        tonnage:this.get('tonnage')? this.get('tonnage') : ""
      };
      this.set('updateDriverForm',false);
      this.sendAction('update',driver,params);
    }
  }
});
