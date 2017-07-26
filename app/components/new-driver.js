import Ember from 'ember';

export default Ember.Component.extend({
  addNewDriver: false,
  actions:{
    profileFormShow(){
      this.set('addNewDriver',true);
    },
    saveDriver(){
      var params={
        firstName:this.get('firstName')? this.get('firstName') : "",
        secondName:this.get('secondName')? this.get('secondName') : "",
        phone:this.get('phone')? this.get('phone') : "",
        image:this.get('image')? this.get('image') : "",
        type:this.get('type')? this.get('type') : "",
        tonnage:this.get('tonnage')? this.get('tonnage') : ""
      };
      this.set('addNewDriver',false);
      this.sendAction('saveDriver2',params);
    }
  }
});
