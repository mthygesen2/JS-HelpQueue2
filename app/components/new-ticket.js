import Ember from 'ember';

export default Ember.Component.extend({
  isQ1showing: true,
  isQ2showing: false,
  isQ3showing: false,
  isFormShowing: false,
  isDeleteShowing: false,
  actions: {
    questionShow: function() {
      this.set('isQ1showing', false);
      this.set('isQ2showing', true);
    },
    question2Show: function() {
      this.set('isQ2showing', false);
      this.set('isQ3showing', true);
    },
    question3Show: function() {
      this.set('isQ3showing', false);
      this.set('isFormShowing', true);
    },
    saveTicket() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        description: this.get('description'),
        timestamp: Date.now()
      };
      console.log(params);
      this.set('isFormShowing', false);
      this.set('isDeleteShowing', true);
      this.sendAction('saveTicket', params);
    }
  }
});
