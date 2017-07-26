// import Ember from 'ember';
//
// export default Ember.Component.extend({
// });


import Ember from 'ember';

export default Ember.Component.extend({
  addNewJob:false,

  actions: {
    showJobForm(){
      this.set('addNewJob',true);
    },
    saveJob(){
      var params = {
        title:this.get('title')?this.get('title'):"",
        from:this.get('from')?this.get('from'):"",
        to:this.get('to')?this.get('to'):"",
        amount:this.get('amount')?this.get('amount'):"",
        carryingDate:this.get('carryingDate')?this.get('carryingDate'):"",
        author:this.get('author')?this.get('author'):"",
        phoneNumber:this.get('phoneNumber')?this.get('phoneNumber'):"",
        email:this.get('email')?this.get('email'):""
      };
      this.set('addNewJob',false);
      this.sendAction('saveJob', params);
    }
  }
});
