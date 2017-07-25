import Ember from 'ember';

export default Ember.Route.extend({
  firebase:Ember.inject.service(),
  actions:{
    signIn(params){
      this.get('session').open('firebase',{
        provider:"password",
        email:params.email,
        password:params.password
      })
.catch(function(error){
  console.log("Error"+error)
  alert("Please enter the correct details!")

});
},
      signOut(){
        this.get('session').close();
      }
        // signIn() {
        //   var user = {
        //     email: this.get('email'),
        //     password: this.get('password')
        //   }
        //   this.sendAction('signIn', user);
        //       }

  }

});
